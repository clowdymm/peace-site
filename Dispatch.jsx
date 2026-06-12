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

function Footer({ onNav }) {
  const cols = [
    ['The Peace', [['accord', 'The Moment'], ['about', 'Peace Facts'], ['terms', 'Token Info']]],
    ['Take Part', [['join', 'How to Buy'], ['collectible', 'Collectible'], ['dispatch', 'Dispatch']]],
    ['More', [['legal', 'Terms'], ['scoreboard', 'Scoreboard'], ['top', 'Home']]],
  ];
  return (
    <footer style={{ background: 'var(--surface-inverse)', padding: '72px 32px 40px', color: 'var(--parchment-200)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))', gap: '40px' }} className="peace-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <Seal size={60} color="var(--gold-400)" deep="var(--gold-400)" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', letterSpacing: '0.16em', color: 'var(--parchment-100)' }}>PEACE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.32em', color: 'var(--gold-400)', marginTop: '4px' }}>AND STILL WINNING</div>
              </div>
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
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11.5px', lineHeight: 1.7, color: 'var(--taupe-400)', maxWidth: '92ch' }}>
          <p style={{ margin: '0 0 14px' }}>
            Peace Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$PEACE" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. MemesForPeace.com is not political and has nothing to do with any political campaign or any political office or governmental agency.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            "TRUMP" is a registered trademarks of DTTM Operations LLC. This product is not distributed or sold by Donald J. Trump, The Trump Organization or any of their respective affiliates or principals.
          </p>
          <p style={{ margin: 0 }}>
            CIC Digital LLC will never call, text, email or otherwise contact you to request your personal information. Please be careful.
          </p>
        </div>
      </div>
    </footer>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Dispatch, Footer });
})();
