# Builds a single self-contained peace-review.html (CSS + bundle + JSX + images inlined)
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
function ReadText($p) { [System.IO.File]::ReadAllText((Join-Path $root $p)) }
function DataUri($p, $mime) {
  $b = [System.IO.File]::ReadAllBytes((Join-Path $root $p))
  "data:$mime;base64," + [Convert]::ToBase64String($b)
}

# --- inline assets ---
$css = (ReadText 'tokens/fonts.css') + "`n" + (ReadText 'tokens/colors.css') + "`n" +
       (ReadText 'tokens/typography.css') + "`n" + (ReadText 'tokens/spacing.css')
$bundle = ReadText '_ds_bundle.js'

$imgMap = @{
  'hero-portrait.png'      = DataUri 'hero-portrait.png' 'image/png'
  'facts-image.png'        = DataUri 'facts-image.png' 'image/png'
  'keepsake-logo.png'      = DataUri 'keepsake-logo.png' 'image/png'
  'assets/peace-seal.svg'  = DataUri 'assets/peace-seal.svg' 'image/svg+xml'
}

$jsxFiles = 'Parts.jsx','Header.jsx','Hero.jsx','PeaceFacts.jsx','Terms.jsx','Steps.jsx',
            'Scoreboard.jsx','Collectible.jsx','Community.jsx','Dispatch.jsx'
$jsxBlocks = ''
foreach ($f in $jsxFiles) {
  $code = ReadText $f
  foreach ($k in $imgMap.Keys) { $code = $code.Replace($k, $imgMap[$k]) }
  $jsxBlocks += "`n<script type=`"text/babel`" data-presets=`"react`">`n$code`n</script>`n"
}

# app bootstrap (mirrors index.html)
$app = @'
<script type="text/babel" data-presets="react">
  const {
    TopTicker, MedallionMarquee, Header, Hero, AccordBand,
    PeaceFacts, Terms, Steps, Scoreboard, QuoteBand,
    CommunityBanner, TermsCta, Dispatch, Footer, Collectible,
  } = window.PeaceSite;
  function App() {
    const [active, setActive] = React.useState('top');
    const [expanded, setExpanded] = React.useState(false);
    const onNav = (id) => {
      setActive(id);
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 64), behavior: 'smooth' });
    };
    return (
      <>
        <TopTicker />
        <Header onNav={onNav} active={active} />
        <Hero onNav={onNav} />
        <MedallionMarquee />
        <AccordBand expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
        <PeaceFacts />
        <Terms />
        <Steps onNav={onNav} />
        <Scoreboard />
        <QuoteBand />
        <Collectible />
        <Dispatch />
        <CommunityBanner onNav={onNav} />
        <TermsCta />
        <Footer onNav={onNav} />
      </>
    );
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
'@

$head = @'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>$PEACE — At Long Last, Peace</title>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Archivo+Black&display=swap');
  :root {
    --font-display: 'Archivo Black', 'Archivo', 'Arial Black', sans-serif;
    --font-body: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
    --font-ui: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--surface-page); color: var(--text-body); }
  @keyframes peace-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .peace-marquee { animation: peace-marquee 42s linear infinite; }
  .peace-marquee-slow { animation: peace-marquee 60s linear infinite; }
  @media (prefers-reduced-motion: reduce) { .peace-marquee, .peace-marquee-slow { animation: none; } }
  @media (max-width: 900px) {
    .peace-hero-grid, .peace-facts-grid, .peace-terms-grid { grid-template-columns: 1fr !important; }
    .peace-steps-grid { grid-template-columns: 1fr !important; }
    .peace-footer-grid { grid-template-columns: 1fr 1fr !important; }
  }
'@

$html = $head + "`n" + $css + "`n</style>`n" +
        "<script>`n" + $bundle + "`n</script>`n" +
        "</head>`n<body>`n<div id=`"root`"></div>`n" +
        $jsxBlocks + $app + "`n</body>`n</html>`n"

$out = Join-Path $root 'peace-review.html'
[System.IO.File]::WriteAllText($out, $html, (New-Object System.Text.UTF8Encoding($false)))
$kb = [math]::Round((Get-Item $out).Length / 1KB)
Write-Host "Wrote peace-review.html ($kb KB)"
