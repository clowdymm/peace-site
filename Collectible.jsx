/* PEACE site — The Official Peace Collectible (interactive fold-open keepsake) */
(() => {
const { Eyebrow, Button } = window.PeaceDesignSystem_adb1e5;

function Keepsake() {
  const [open, setOpen] = React.useState(false);
  const seal = 'assets/peace-seal.svg';

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={open}
      aria-label={open ? 'Close the keepsake' : 'Open the keepsake'}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen((v) => !v); } }}
      style={{
        position: 'relative', aspectRatio: '4 / 5', width: '100%', cursor: 'pointer',
        overflow: 'hidden', perspective: '1400px',
        background: 'radial-gradient(125% 95% at 50% 12%, #2c2519 0%, #1F1B14 58%, #14110b 100%)',
        border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-md)',
        userSelect: 'none', outline: 'none',
      }}
    >
      {/* offset gold rule */}
      <div style={{ position: 'absolute', inset: '11px', border: '1px solid rgba(173,138,71,0.45)', pointerEvents: 'none', zIndex: 6 }}></div>

      {/* revealed logo behind the seal */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1,
      }}>
        <img src="keepsake-logo.png" alt="The Peace logo" style={{
          width: '64%', height: 'auto', display: 'block',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.62)',
          filter: 'drop-shadow(0 10px 30px rgba(173,138,71,0.45))',
          transition: 'opacity 520ms var(--ease-out) 240ms, transform 620ms var(--ease-out) 200ms',
        }} />
      </div>

      {/* radiant glow that blooms on open */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', width: '90%', height: '90%',
        transform: 'translate(-50%,-50%)', zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 50%, rgba(194,163,94,0.30) 0%, rgba(194,163,94,0) 62%)',
        opacity: open ? 1 : 0, transition: 'opacity 700ms var(--ease-out) 220ms',
      }}></div>

      {/* the folding seal — two leaves that unfold like a stamp */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', width: '58%', aspectRatio: '1 / 1',
        transform: open ? 'translate(-50%,-50%) scale(1.04)' : 'translate(-50%,-50%) scale(0.92)',
        transformStyle: 'preserve-3d', zIndex: 3,
        transition: 'transform 620ms var(--ease-standard)',
      }}>
        {/* left leaf */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', overflow: 'hidden',
          transformOrigin: 'right center', backfaceVisibility: 'hidden',
          transform: open ? 'rotateY(-158deg)' : 'rotateY(0deg)',
          transition: 'transform 640ms var(--ease-standard)',
          filter: open ? 'brightness(0.6)' : 'brightness(1)',
        }}>
          <img src={seal} alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '200%', height: '100%' }} />
        </div>
        {/* right leaf */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', overflow: 'hidden',
          transformOrigin: 'left center', backfaceVisibility: 'hidden',
          transform: open ? 'rotateY(158deg)' : 'rotateY(0deg)',
          transition: 'transform 640ms var(--ease-standard)',
          filter: open ? 'brightness(0.6)' : 'brightness(1)',
        }}>
          <img src={seal} alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: '200%', height: '100%' }} />
        </div>
      </div>

      {/* prompt */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: '22px', textAlign: 'center', zIndex: 6,
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.28em',
        textTransform: 'uppercase', color: 'var(--gold-400)',
        opacity: 0.92, transition: 'opacity 300ms',
      }}>
        {open ? 'Tap to fold' : 'Tap to unseal'}
      </div>
    </div>
  );
}

function Collectible() {
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
    <section id="collectible" style={{ padding: '96px 32px' }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '56px', alignItems: 'center',
      }} className="peace-terms-grid">
        <Keepsake />
        <div>
          <Eyebrow style={{ marginBottom: '16px' }}>The Keepsake</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,46px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: '0 0 18px' }}>The Official Peace Collectible</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 24px', maxWidth: '46ch' }}>
            The ultimate digital keepsake for everyone who witnessed the dawn of peace. A commemorative piece of art capturing the moment the world changed.
          </p>

          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '10px' }}>Contract Address</div>
          <div style={{
            display: 'flex', alignItems: 'stretch', maxWidth: '480px', marginBottom: '26px',
            background: 'var(--parchment-50)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', overflow: 'hidden',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', padding: '0 14px', background: 'var(--bronze-900)',
              color: 'var(--gold-400)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.16em',
            }}>CA:</span>
            <input
              ref={fieldRef} readOnly value={ADDRESS} onClick={(e) => e.target.select()}
              aria-label="Contract address"
              style={{
                flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
                fontFamily: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace', fontSize: '13px',
                color: 'var(--ink-900)', padding: '13px 14px', textOverflow: 'ellipsis',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg" onClick={copyAddress}>{copied ? 'Copied!' : 'Start Collecting'}</Button>
            <span aria-live="polite" style={{
              fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--laurel-600)',
              opacity: copied ? 1 : 0, transition: 'opacity 200ms',
            }}>✓ Address copied to clipboard</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Collectible });
})();
