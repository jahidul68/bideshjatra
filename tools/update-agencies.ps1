# Rebuilds agencies.js from the official BMET agency list (https://oep.gov.bd/agencies).
# Run from the repo root:  powershell -File tools\update-agencies.ps1
$ErrorActionPreference = 'Stop'
$html = (Invoke-WebRequest -Uri 'https://oep.gov.bd/agencies' -UseBasicParsing -TimeoutSec 60).Content
$html = [System.Net.WebUtility]::HtmlDecode($html)
$rows = [regex]::Matches($html, '<tr>\s*<td>\d+</td>\s*<td>\s*RL(\d+)\s*</td>\s*<td>(.*?)</td>.*?<td>\s*(Active|Expired|Cancelled|Suspended|[A-Za-z ]+?)\s*</td>\s*<td>\s*([0-9]{2}/[A-Za-z]{3}/[0-9]{4})?\s*</td>\s*</tr>', 'Singleline')
if ($rows.Count -lt 500) { throw "Only parsed $($rows.Count) rows; page layout probably changed." }
$months = @{Jan='01';Feb='02';Mar='03';Apr='04';May='05';Jun='06';Jul='07';Aug='08';Sep='09';Oct='10';Nov='11';Dec='12'}
$out = foreach ($m in $rows) {
  $name = ($m.Groups[2].Value -replace '\s+', ' ').Trim() -replace '\\', '' -replace '"', '\"'
  $exp = ''
  if ($m.Groups[4].Value -match '^(\d{2})/([A-Za-z]{3})/(\d{4})$') { $exp = "$($Matches[3])-$($months[$Matches[2]])-$($Matches[1])" }
  '["{0}","{1}","{2}","{3}"]' -f $m.Groups[1].Value, $name, $m.Groups[3].Value.ToLower(), $exp
}
$stamp = Get-Date -Format 'yyyy-MM-dd'
$js = "/* Snapshot of the official BMET agency list, taken $stamp. Rows: [RL, name, status, expiry]. Rebuild with tools/update-agencies.ps1 */`nwindow.AGENCY_LIST = { date: `"$stamp`", rows: [`n" + ($out -join ",`n") + "`n] };`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'agencies.js'), $js, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Wrote $($rows.Count) agencies"
