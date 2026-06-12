/* PEACE site — Dispatch sign-up + Footer */
(() => {
const { Button, Input, Eyebrow, Seal, Card } = window.PeaceDesignSystem_adb1e5;

function Dispatch() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  return (
    <section id="dispatch" style={{ padding: '88px 32px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Card accent padding={48} style={{ textAlign: 'center' }}>
          <Eyebrow align="center" style={{ marginBottom: '16px' }}>Join the Peace Dispatch</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.4vw,38px)',
            color: 'var(--ink-900)', margin: '0 0 12px', letterSpacing: '0.02em',
          }}>Only Good News</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-body)', margin: '0 auto 28px', maxWidth: '46ch', lineHeight: 1.5 }}>
            Be first to hear allocation news, collectible drops, and community celebrations. No noise — we write only when there is peace to report.
          </p>
          {sent ? (
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--laurel-600)',
              padding: '18px', border: '1px solid rgba(94,107,67,0.4)', borderRadius: 'var(--radius-sm)',
              background: 'rgba(94,107,67,0.08)',
            }}>✓ Welcome to the celebration. Only good news from here.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSent(true); }}
                  style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '220px', textAlign: 'left' }}>
                <Input label="Your Email" type="email" placeholder="citizen@nation.org"
                       value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <Button variant="gold" type="submit" style={{ height: '47px' }}>Sign Up</Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

function SocialLink({ label, children }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} aria-label={label} style={{
      width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      border: '1px solid rgba(214,188,132,0.35)', borderRadius: 'var(--radius-sm)', color: 'var(--gold-400)',
    }}>{children}</a>
  );
}

function Footer({ onNav }) {
  const cols = [
    ['The Peace', [['accord', 'The Moment'], ['about', 'Peace Facts'], ['terms', 'Token Info']]],
    ['Take Part', [['join', 'How to Buy'], ['collectible', 'Collectible'], ['dispatch', 'Dispatch']]],
    ['More', [['faqs', 'FAQ'], ['scoreboard', 'Scoreboard'], ['top', 'Home']]],
  ];
  return (
    <footer style={{ background: 'var(--surface-inverse)', padding: '72px 32px 40px', color: 'var(--parchment-200)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))', gap: '40px' }} className="peace-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <Seal size={60} year="" color="var(--gold-400)" deep="var(--gold-400)" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', letterSpacing: '0.16em', color: 'var(--parchment-100)' }}>PEACE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.32em', color: 'var(--gold-400)', marginTop: '4px' }}>AND STILL WINNING</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <SocialLink label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5-6.6L5.7 22H2.5l7.8-8.9L1.5 2h6.8l4.5 6 5.1-6Zm-1.2 18h1.8L7.2 3.9H5.3L17.7 20Z" /></svg>
              </SocialLink>
              <SocialLink label="Dispatch">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 5h16v14H4z" /><path d="M4 6l8 6 8-6" /></svg>
              </SocialLink>
            </div>
          </div>
          {cols.map(([title, links]) => (
            <div key={title}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: '16px' }}>{title}</div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(([id, label], i) => (
                  <a key={i} href={`#${id}`} onClick={(e) => { e.preventDefault(); onNav(id); }}
                     style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--parchment-300)', textDecoration: 'none' }}>{label}</a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div style={{ height: '1px', background: 'rgba(214,188,132,0.3)', margin: '48px 0 24px' }} />
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '11.5px', lineHeight: 1.7, color: 'var(--taupe-400)', margin: '0 0 18px', maxWidth: '92ch' }}>
          The Peace coin is intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$PEACE" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. [insert website] is not political and has nothing to do with any political campaign or any political office or governmental agency. See Terms & Conditions Here. We will never call, text, or email to request your personal information — please be careful.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--taupe-400)' }}>© The Peace Community. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--taupe-400)' }}>Privacy · Terms & Conditions · A commemorative collectible.</span>
        </div>
      </div>
    </footer>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Dispatch, Footer });
})();
