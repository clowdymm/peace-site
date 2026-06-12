/* PEACE site — image-forward Hero + framed Accord band */
(() => {
const { Button, Badge } = window.PeaceDesignSystem_adb1e5;

function Chip({ k, v }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingRight: '22px', borderRight: '1px solid var(--border-hairline)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', lineHeight: 1, color: 'var(--ink-900)' }}>{v}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-gold)' }}>{k}</span>
    </div>
  );
}

function Hero({ onNav }) {
  const { Placeholder } = window.PeaceSite;
  return (
    <section id="top" style={{ padding: '72px 32px 84px' }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: '56px', alignItems: 'center',
      }} className="peace-hero-grid">
        <div>
          <div style={{ marginBottom: '22px' }}><Badge tone="gold" style={{ whiteSpace: 'nowrap' }}>At Long Last</Badge></div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(40px, 5.6vw, 70px)', lineHeight: 1.04, letterSpacing: '0.02em',
            color: 'var(--ink-900)', margin: '0 0 22px',
          }}>WE HAVE PEACE<br />IN THE MIDDLE EAST</h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(18px,2.2vw,23px)',
            color: 'var(--text-body)', maxWidth: '46ch', margin: '0 0 14px', lineHeight: 1.5,
          }}>After generations of conflict, the guns have fallen silent. This is the moment the world has been waiting for — and now you can own your piece of history.</p>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '19px', color: 'var(--text-gold)', margin: '0 0 32px', maxWidth: '46ch', lineHeight: 1.5 }}>
            The $PEACE coin commemorates the day the war ended. Not a side. Not a party. A moment that belongs to all of humanity.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Button variant="gold" size="lg" onClick={() => onNav('join')}>Get Your $PEACE Now</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('community')}>Celebrate With Us</Button>
          </div>
          <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
            <Chip k="Declared" v="MMXXVI" />
            <Chip k="Sides Taken" v="0" />
            <Chip k="Tradeable" v="Now" />
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4 / 5', width: '100%' }}>
          <img src="hero-portrait.png" alt="Portrait of the Signing" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-md)',
          }} />
          {/* offset gold rule — the signature double-frame */}
          <div style={{ position: 'absolute', inset: '10px', border: '1px solid rgba(173,138,71,0.5)', pointerEvents: 'none' }}></div>
        </div>
      </div>
    </section>
  );
}

function AccordBand({ expanded, onToggle }) {
  const { Proclamation } = window.PeaceDesignSystem_adb1e5;
  const shortText = 'After generations of conflict, the guns have fallen silent. Discussions were brought to the highest levels and approved by all Parties Involved. As of this day, the war is over — and what comes next belongs to everyone.';
  const longTail = ' This is not a victory for one side or one party. It is a victory for humanity itself, and we are proud to share it with the world. Celebrate it with us — this is history in the making.';
  return (
    <section id="accord" style={{ padding: '84px 32px' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
        <Proclamation signature="The Peace Community">
          {shortText}{expanded ? longTail : ''}
        </Proclamation>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button type="button" onClick={onToggle} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-gold)',
          }}>{expanded ? 'Show Less' : 'Read the Full Statement'}</button>
        </div>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Hero, AccordBand });
})();
