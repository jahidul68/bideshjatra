# Turning on the "কোথা থেকে, কোথায়?" map

The map page (`dalalnaki.com/#map`) works without this. It then shows only the official BMET 2025
numbers and hides the form. To let visitors add their own answers:

1. Make a free project at <https://supabase.com> (Region: Singapore is closest to Bangladesh).
2. Open **SQL Editor → New query**, paste everything from `setup.sql`, press **Run**.
3. Open **Project Settings → API** and copy:
   - the **Project URL** (looks like `https://abcd1234.supabase.co`)
   - the **anon / publishable key** (never the `service_role` / secret key)
4. Paste both into `data.js` → `META.supabaseUrl` and `META.supabaseKey`, commit, push.

The anon key is meant to be public: the database rules in `setup.sql` only let visitors add an
answer and read the grouped totals.

## What is stored

One row per answer: district, country, stage (want to go / in process / already went), and
optionally an amount in taka plus whether it was asked or actually paid. No names, phone numbers,
agency names or IP addresses. Cost figures only become visible for a country once 3 or more people
have reported.

## Looking after it

- Each phone can send one answer (remembered in the browser). Someone determined can still spam.
  To clean up, open **Table Editor → journeys** and delete rows.
- The free plan pauses a project after 7 days with no requests. Visits to the map count, but
  while traffic is low, check the dashboard now and then and press **Resume** if it is paused.

## Testing locally

Open `index.html?demo#map` to see the map filled with made-up answers (nothing is sent).
