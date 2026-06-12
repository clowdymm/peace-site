/* PEACE site — Join in Three Steps (how-to analog) */
(() => {
const { Eyebrow, Card, Button } = window.PeaceDesignSystem_adb1e5;

function Step({ n, title, children, cta }) {
  return (
    <Card accent padding={34} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '64px', lineHeight: 1, color: 'var(--gold-500)', margin: '0 0 18px' }}>{n}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '23px', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: '0 0 10px' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 24px', flex: 1 }}>{children}</p>
      <div><Button variant="secondary" size="sm">{cta}</Button></div>
    </Card>
  );
}

function Steps({ onNav }) {
  return (
    <section id="join" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Eyebrow rules align="center" style={{ maxWidth: '300px', margin: '0 auto 16px' }}>How to Buy</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: 0 }}>Get Your $PEACE, in Three Steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="peace-steps-grid">
          <Step n="1" title="Create Your Wallet" cta="Get a Wallet">Download a supported wallet. It takes two minutes — history waits for no one.</Step>
          <Step n="2" title="Fund It" cta="Add Funds">Add funds by card or transfer, right inside the wallet. You are minutes from the moment.</Step>
          <Step n="3" title="Get Your $PEACE" cta="Get $PEACE Now">Swap for $PEACE and own your piece of the moment. Welcome to the celebration.</Step>
        </div>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Steps });
})();
