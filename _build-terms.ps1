# Generates a styled terms.html from "TERMS FOR CLAUDE.txt"
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$src  = 'C:\Users\Administrator\Downloads\TERMS FOR CLAUDE.txt'
$lines = [System.IO.File]::ReadAllLines($src)

function Enc($s) { $s.Replace('&','&amp;').Replace('<','&lt;').Replace('>','&gt;') }

$body = New-Object System.Text.StringBuilder
foreach ($raw in $lines) {
  $line = $raw.Trim().Replace('CIC VENTURES LLC', 'CIC DIGITAL LLC')
  if ($line.Length -eq 0) { continue }
  $hasLower = $line -cmatch '[a-z]'
  $isHeader = (-not $hasLower) -and ($line -notmatch '\.') -and ($line.Length -lt 70)
  if ($isHeader) {
    [void]$body.AppendLine("<h2>$(Enc $line)</h2>")
  } else {
    [void]$body.AppendLine("<p>$(Enc $line)</p>")
  }
}

$head = @'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Terms &amp; Conditions &mdash; $PEACE</title>
<link rel="icon" type="image/jpeg" href="favicon.jpg" />
<link rel="stylesheet" href="styles.css" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Archivo+Black&display=swap');
  :root {
    --font-display: 'Archivo Black', 'Archivo', 'Arial Black', sans-serif;
    --font-body: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  }
  body { margin: 0; background: var(--surface-page); color: var(--text-body); font-family: var(--font-body); }
  .terms-bar {
    position: sticky; top: 0; z-index: 10;
    background: rgba(230,228,222,0.9); backdrop-filter: saturate(120%) blur(6px);
    border-bottom: 1px solid var(--border-hairline);
  }
  .terms-bar-inner {
    max-width: 820px; margin: 0 auto; padding: 16px 28px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
  }
  .terms-brand { font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: 0.16em; color: var(--ink-900); text-decoration: none; }
  .terms-back { font-family: var(--font-display); font-weight: 600; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-gold); text-decoration: none; }
  .terms-wrap { max-width: 820px; margin: 0 auto; padding: 56px 28px 96px; }
  .terms-wrap h1 { font-family: var(--font-display); font-weight: 700; font-size: clamp(32px,5vw,52px); letter-spacing: 0.02em; color: var(--ink-900); margin: 0 0 8px; }
  .terms-eyebrow { font-family: var(--font-display); font-weight: 600; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--text-gold); margin: 0 0 14px; }
  .terms-wrap h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(18px,2.4vw,24px); letter-spacing: 0.02em; color: var(--ink-900); margin: 44px 0 14px; padding-top: 22px; border-top: 1px solid var(--border-hairline); }
  .terms-wrap p { font-size: 15.5px; line-height: 1.7; color: var(--text-body); margin: 0 0 16px; }
  .terms-rule { height: 2px; width: 64px; background: var(--gold-500); margin: 18px 0 28px; border: 0; }
</style>
</head>
<body>
<div class="terms-bar">
  <div class="terms-bar-inner">
    <a class="terms-brand" href="index.html">PEACE</a>
    <a class="terms-back" href="index.html">&larr; Back to site</a>
  </div>
</div>
<main class="terms-wrap">
  <div class="terms-eyebrow">The Fine Print</div>
  <h1>Terms &amp; Conditions</h1>
  <hr class="terms-rule" />
'@

$foot = @'
</main>
</body>
</html>
'@

$html = $head + $body.ToString() + $foot
$out = Join-Path $root 'terms.html'
[System.IO.File]::WriteAllText($out, $html, (New-Object System.Text.UTF8Encoding($false)))
$kb = [math]::Round((Get-Item $out).Length / 1KB, 1)
Write-Host "Wrote terms.html ($kb KB)"
