/* PEACE site — Terms of the Accord (allocation analog) */
(() => {
const { Eyebrow, Card } = window.PeaceDesignSystem_adb1e5;

const LOCKED_FILL = 'repeating-linear-gradient(45deg, var(--gold-600) 0, var(--gold-600) 5px, var(--gold-500) 5px, var(--gold-500) 10px)';
const UNLOCKED_FILL = 'linear-gradient(90deg, var(--gold-600), var(--gold-400))';

function Bar({ label, total, segments }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '9px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-gold)' }}>{total}%</span>
      </div>
      <div style={{ height: '12px', background: 'var(--parchment-300)', borderRadius: 'var(--radius-pill)', overflow: 'hidden', display: 'flex' }}>
        {segments.map((s, i) => (
          <div key={i} style={{ width: s.pct + '%', height: '100%', background: s.locked ? LOCKED_FILL : UNLOCKED_FILL, borderRight: i < segments.length - 1 ? '1px solid var(--parchment-100)' : 'none' }} />
        ))}
      </div>
      {segments.some((s) => s.note) ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', marginTop: '8px' }}>
          {segments.filter((s) => s.note).map((s, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: s.locked ? LOCKED_FILL : UNLOCKED_FILL, flex: '0 0 auto' }} />
              {s.note}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Terms() {
  return (
    <section id="terms" style={{ padding: '92px 32px', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '56px', alignItems: 'center' }} className="peace-terms-grid">
        <div>
          <Eyebrow style={{ marginBottom: '16px' }}>Token Info</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,46px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: '0 0 18px' }}>Allocation of the $PEACE</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 16px', maxWidth: '46ch' }}>
            The total supply of $PEACE is allocated across three groups, each released on its own schedule. Liquidity is live from day one; ecosystem and team allocations unlock over time to keep the project aligned for the long run.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-gold)', margin: '0 0 16px', maxWidth: '46ch' }}>
            $PEACE is now freely tradeable on the blockchain.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-faint)', margin: 0, maxWidth: '52ch' }}>
            $PEACE is an expression of support for the ideals embodied by the symbol "$PEACE" and its artwork — not an investment opportunity, investment contract, or security of any type. See the full terms below.
          </p>
        </div>
        <Card padding={36} raised>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '24px' }}>The Allocation Schedule</div>
          <div style={{ display: 'grid', gap: '26px' }}>
            <Bar label="Liquidity Pool" total={20} segments={[{ pct: 100, locked: false, note: '20% unlocked' }]} />
            <Bar label="Ecosystem" total={20} segments={[{ pct: 50, locked: true, note: '10% locked' }, { pct: 50, locked: false, note: '10% unlocked' }]} />
            <Bar label="Team" total={60} segments={[{ pct: 16.67, locked: true, note: '10% locked in vault' }, { pct: 83.33, locked: false, note: '50% vested over 4 years' }]} />
          </div>
          <div style={{ marginTop: '26px', paddingTop: '20px', borderTop: '1px solid var(--border-hairline)', display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: UNLOCKED_FILL }} /> Unlocked
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: LOCKED_FILL }} /> Locked / Vested
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Terms });
})();
