/* PEACE site — Community banner + FAQ accordion */
(() => {
const { Eyebrow, Button } = window.PeaceDesignSystem_adb1e5;

function CommunityBanner({ onNav }) {
  return (
    <section id="community" style={{ background: 'var(--surface-inverse)', padding: '96px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="var(--gold-400)" aria-hidden="true" style={{ marginBottom: '26px' }}>
          <path d="M12 2 L14.6 9.0 L22 9.3 L16.1 13.9 L18.2 21 L12 16.7 L5.8 21 L7.9 13.9 L2 9.3 L9.4 9.0 Z" />
        </svg>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '12px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: '20px' }}>The Peace Community</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px,5.4vw,68px)', lineHeight: 1.04, letterSpacing: '0.02em', color: 'var(--parchment-100)', margin: '0 0 22px' }}>JOIN THE<br />PEACE COMMUNITY</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(18px,2.2vw,22px)', lineHeight: 1.5, color: 'var(--parchment-200)', margin: '0 auto 18px', maxWidth: '52ch' }}>
          This is bigger than any one nation. The Peace Community is for everyone who believes the future is built on unity, not division. Together, we're celebrating what matters: an end to suffering and a new chapter for the region and the world.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 'clamp(18px,2.2vw,22px)', color: 'var(--gold-400)', margin: '0 auto 36px' }}>
          This is History in the Making!
        </p>
        <Button variant="gold" size="lg" onClick={() => onNav('join')}>Join the Community</Button>
      </div>
    </section>
  );
}

function TermsCta() {
  return (
    <section id="legal" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow rules align="center" style={{ maxWidth: '300px', margin: '0 auto 16px' }}>The Fine Print</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: '0 0 18px' }}>Terms &amp; Conditions</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-body)', margin: '0 auto 32px', maxWidth: '52ch' }}>
          Before taking part, please review the full Terms &amp; Conditions governing $PEACE and this site.
        </p>
        <Button variant="gold" size="lg" onClick={() => { window.location.href = 'terms.html'; }}>Read the Terms &amp; Conditions</Button>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { CommunityBanner, TermsCta });
})();
