-- দালাল নাকি? — "কোথা থেকে, কোথায়?" map (#map)
-- Run this once in Supabase: SQL Editor → New query → paste → Run.
--
-- Privacy: no names, phone numbers, IP addresses or agency names are stored.
-- Visitors can only INSERT one row and read the grouped totals below; nobody can read single rows
-- through the public key.

create table if not exists public.journeys (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  district    text not null check (district ~ '^[a-z]{3,20}$'),
  country     text not null check (country ~ '^[a-z]{2,20}$'),
  stage       text not null check (stage in ('want', 'process', 'went')),
  amount      integer check (amount is null or amount between 10000 and 5000000),
  amount_kind text check (amount_kind in ('asked', 'paid')),
  constraint amount_pair check ((amount is null) = (amount_kind is null))
);

alter table public.journeys enable row level security;

drop policy if exists "anyone can add one answer" on public.journeys;
create policy "anyone can add one answer" on public.journeys
  for insert to anon with check (true);

revoke all on public.journeys from anon, authenticated;
grant insert on public.journeys to anon;

-- Totals per district → country → stage (what the map draws)
create or replace view public.journey_flows as
  select district, country, stage, count(*)::int as n
  from public.journeys
  group by district, country, stage;

-- Cost reports per country. A country only appears once 3 or more people have reported,
-- so a single answer can never be traced back to one family.
create or replace view public.cost_reports as
  select country,
         count(*)::int as n,
         (percentile_cont(0.5) within group (order by amount))::int as median,
         min(amount) as low,
         max(amount) as high
  from public.journeys
  where amount is not null
  group by country
  having count(*) >= 3;

grant select on public.journey_flows, public.cost_reports to anon;

-- Handy for you (run in the SQL editor, not public):
--   select * from public.journeys order by created_at desc limit 50;   -- latest answers
--   delete from public.journeys where id = 123;                        -- remove a spam row
