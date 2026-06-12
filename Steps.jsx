/* PEACE site — How to Buy: find $PEACE on Solana (contract address + copy) */
(() => {
const { Eyebrow, Button } = window.PeaceDesignSystem_adb1e5;

function Steps({ onNav }) {
  const ADDRESS = window.PEACE_CA; // shared address — set it in Parts.jsx
  const [copied, setCopied] = React.useState(false);
  const fieldRef = React.useRef(null);

  const copyAddress = () => {
    const done = () => { setCopied(true); window.clearTimeout(copyAddress._t); copyAddress._t = window.setTimeout(() => setCopied(false), 1900); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ADDRESS).then(done).catch(() => { fallbackCopy(); done(); });
    } else { fallbackCopy(); done(); }
  };
  const fallbackCopy = () => {
    const el = fieldRef.current;
    if (!el) return;
    el.removeAttribute('readonly'); el.select(); el.setSelectionRange(0, ADDRESS.length);
    try { document.execCommand('copy'); } catch (e) {}
    el.setAttribute('readonly', '');
    if (window.getSelection) window.getSelection().removeAllRanges();
  };

  return (
    <section id="join" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <Eyebrow rules align="center" style={{ maxWidth: '300px', margin: '0 auto 16px' }}>How to Buy</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: 0 }}>You can find $PEACE on Solana Here:</h2>
        </div>

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {/* CA field — same style as the keepsake */}
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '10px', textAlign: 'center' }}>Contract Address</div>
          <div style={{
            display: 'flex', alignItems: 'stretch', marginBottom: '22px',
            background: 'var(--parchment-50)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', overflow: 'hidden',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', padding: '0 18px', background: 'var(--bronze-900)',
              color: 'var(--gold-400)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', letterSpacing: '0.16em',
            }}>CA:</span>
            <input
              ref={fieldRef} readOnly value={ADDRESS} onClick={(e) => e.target.select()}
              aria-label="Contract address"
              style={{
                flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
                fontFamily: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace', fontSize: '15px',
                color: 'var(--ink-900)', padding: '18px 16px', textOverflow: 'ellipsis',
              }}
            />
          </div>

          {/* big copy button */}
          <Button variant="gold" size="lg" onClick={copyAddress} style={{ width: '100%', justifyContent: 'center', fontSize: '17px', padding: '20px 32px' }}>
            {copied ? '✓ Address Copied!' : 'Copy Address'}
          </Button>
          <div aria-live="polite" style={{
            textAlign: 'center', marginTop: '14px', fontFamily: 'var(--font-ui)', fontSize: '14px',
            color: 'var(--laurel-600)', opacity: copied ? 1 : 0, transition: 'opacity 200ms',
          }}>✓ Address copied to clipboard</div>
        </div>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Steps });
})();
