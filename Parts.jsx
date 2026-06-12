/* PEACE site — shared parts: ceremonial placeholder, top ticker, medallion marquee */
(() => {
/* 👉 THE $PEACE CONTRACT ADDRESS — replace this ONE value with the real Solana mint address.
   It powers the CA field in both the "How to Buy" section and the Keepsake. */
window.PEACE_CA = '5g4ApM9Stbav4naiV5nnWrFgKh1v6UcNSwx22TkpMnaJ';

const { Seal } = window.PeaceDesignSystem_adb1e5;

/* A warm, on-brand image placeholder: parchment panel, gold frame,
   faint seal watermark, and a letterspaced caption. Swap for real art later. */
function Placeholder({ label = 'Commemorative Portrait', circle = false, sealSize = 96, style = {} }) {
  return (
    <div style={{
      position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(155deg, var(--parchment-100), var(--parchment-300))',
      border: '1px solid var(--border-gold)',
      borderRadius: circle ? '50%' : 'var(--radius-md)',
      overflow: 'hidden', ...style,
    }}>
      <Seal size={sealSize} year="" color="rgba(173,138,71,0.34)" deep="rgba(173,138,71,0.34)" />
      {label ? (
        <span style={{
          position: 'absolute', bottom: '14px', fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</span>
      ) : null}
    </div>
  );
}

function TopTicker() {
  const items = ['Peace Declared', '$PEACE Is Live', 'A Moment That Belongs to All of Humanity', 'Get Your Piece of History', 'And Still Winning'];
  const base = [...items, ...items, ...items];
  const row = [...base, ...base];
  return (
    <div style={{ background: 'var(--surface-inverse)', overflow: 'hidden', borderBottom: '1px solid rgba(214,188,132,0.22)' }}>
      <div className="peace-marquee" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', width: 'max-content', padding: '9px 0' }}>
        {row.map((t, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '34px', paddingRight: '34px',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px',
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-400)',
          }}>
            {t}
            <span style={{ width: '5px', height: '5px', rotate: '45deg', background: 'var(--gold-500)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function MedallionMarquee() {
  const labels = ['At Long Last, Peace', 'This Is History in the Making', 'Celebrate With Us', '$PEACE Is Live', 'Own Your Piece of History'];
  const row = [...labels, ...labels];
  return (
    <section style={{
      background: 'var(--surface-sunken)', padding: '38px 0', overflow: 'hidden',
      borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)',
    }}>
      <div className="peace-marquee-slow" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', width: 'max-content' }}>
        {row.map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '26px', paddingRight: '52px' }}>
            <Seal size={56} year="" />
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px',
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-900)',
            }}>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Placeholder, TopTicker, MedallionMarquee });
})();
