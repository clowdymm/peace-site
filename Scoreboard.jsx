/* PEACE site — Scoreboard (the peace tally) + a bronze quote band */
(() => {
const { Eyebrow, Stat, Rule } = window.PeaceDesignSystem_adb1e5;

function Scoreboard() {
  const stats = [
    { value: '1', label: 'Day of Peace', sub: 'And counting' },
    { value: '0', label: 'Sides Taken', sub: 'Not a party. Not political.' },
    { value: '∞', label: 'Reasons to Celebrate', sub: 'In perpetuity' },
  ];
  return (
    <section id="scoreboard" style={{ background: 'var(--surface-sunken)', padding: '80px 32px', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <Eyebrow rules align="center" style={{ maxWidth: '420px', margin: '0 auto 8px' }}>The Peace Scoreboard</Eyebrow>
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, textAlign: 'center',
          fontSize: 'clamp(28px,4vw,42px)', color: 'var(--ink-900)', margin: '0 0 48px', letterSpacing: '0.02em',
        }}>This Is History in the Making</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} label={s.label} sub={s.sub} />
          ))}
        </div>
        <Rule style={{ maxWidth: '520px', margin: '52px auto 0' }} />
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section style={{ background: 'var(--surface-inverse)', padding: '88px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--gold-400)" aria-hidden="true" style={{ marginBottom: '24px' }}>
          <path d="M12 2 L14.6 9.0 L22 9.3 L16.1 13.9 L18.2 21 L12 16.7 L5.8 21 L7.9 13.9 L2 9.3 L9.4 9.0 Z" />
        </svg>
        <blockquote style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(26px,3.6vw,40px)', lineHeight: 1.32,
          color: 'var(--parchment-100)', margin: 0, fontStyle: 'italic', textWrap: 'pretty',
        }}>
          "You are witnessing peace. Celebrate it — and have fun."
        </blockquote>
        <div style={{
          marginTop: '32px', fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-400)',
        }}>The Peace Community</div>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Scoreboard, QuoteBand });
})();
