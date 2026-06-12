/* PEACE site — About / "Peace Facts" + narrative */
(() => {
const { Seal, Eyebrow, Rule } = window.PeaceDesignSystem_adb1e5;

function Fact({ n, title, children }) {
  return (
    <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
      <div style={{ flex: '0 0 auto', marginTop: '2px' }}><Seal size={42} year="" /></div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '6px' }}>Peace Fact {n}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: '0 0 6px' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.5, color: 'var(--text-muted)', margin: 0 }}>{children}</p>
      </div>
    </div>
  );
}

function PeaceFacts() {
  const { Placeholder } = window.PeaceSite;
  return (
    <section id="about" style={{ padding: '92px 32px 40px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <Eyebrow rules align="center" style={{ maxWidth: '320px', margin: '0 auto 18px' }}>Peace Facts</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,4.4vw,52px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: '0 0 14px' }}>A Moment That Belongs to Everyone</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '19px', lineHeight: 1.5, color: 'var(--text-body)', margin: 0 }}>Not a side. Not a party. A celebration of the day the guns fell silent.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: '56px', alignItems: 'center' }} className="peace-facts-grid">
          <div style={{ position: 'relative', aspectRatio: '5 / 6', width: '100%' }}>
            <img src="facts-image.png" alt="The Commemorative Edition" style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-md)',
            }} />
            <div style={{ position: 'absolute', inset: '10px', border: '1px solid rgba(173,138,71,0.5)', pointerEvents: 'none' }}></div>
          </div>
          <div style={{ display: 'grid', gap: '32px' }}>
            <Fact n="1" title="One Historic Moment">The day the guns fell silent, after generations of conflict — the moment the world has been waiting for.</Fact>
            <Fact n="2" title="Zero Sides Taken">Not a side. Not a party. A celebration that belongs to all of humanity.</Fact>
            <Fact n="3" title="A Keepsake of the Day">The $PEACE coin commemorates the day the war ended — your piece of the moment the world changed.</Fact>
            <Fact n="4" title="Endless Reasons to Celebrate">An end to suffering and a new chapter for the region and the world. Have fun.</Fact>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-narrow)', margin: '76px auto 0', textAlign: 'center' }}>
        <Rule style={{ maxWidth: '440px', margin: '0 auto 34px' }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(18px,2.1vw,22px)', lineHeight: 1.62, color: 'var(--text-body)', margin: 0, textWrap: 'pretty' }}>
          On the day the guns fell silent, the world held its breath — and a new chapter began. This is the moment generations have waited for: an end to suffering and a future built on unity, not division. Now you can own your piece of that history — and celebrate it with the whole world.
        </p>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { PeaceFacts });
})();
