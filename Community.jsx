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

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <button type="button" onClick={onToggle} style={{
        width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
        padding: '24px 4px', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(17px,2vw,21px)', letterSpacing: '0.01em', color: 'var(--ink-900)' }}>{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2" aria-hidden="true"
             style={{ flex: '0 0 auto', transition: 'transform var(--dur-base) var(--ease-standard)', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>
          <path d="M6 9 L12 15 L18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: open ? '260px' : '0', overflow: 'hidden', transition: 'max-height var(--dur-base) var(--ease-standard)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 4px 24px', maxWidth: '60ch' }}>{a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'What is $PEACE?', a: 'A commemorative digital coin marking the day the war ended. An expression of celebration — a keepsake of the moment, for everyone.' },
    { q: 'Is $PEACE political?', a: 'No. $PEACE takes no side and backs no party, campaign, office, or agency. It commemorates a moment that belongs to all of humanity.' },
    { q: 'Is $PEACE an investment?', a: 'No. $PEACE is an expression of support for the ideals embodied by the symbol "$PEACE" and its artwork — not an investment opportunity, investment contract, or security of any kind.' },
    { q: 'Where can I get it?', a: '$PEACE is freely tradeable on the blockchain. Create a wallet, fund it, and swap — see How to Buy above. It takes minutes.' },
    { q: 'How will I be contacted?', a: 'Only through the dispatch you choose to join. We will never call, text, or email to request your personal information. Please be careful.' },
  ];
  return (
    <section id="faqs" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <Eyebrow rules align="center" style={{ maxWidth: '300px', margin: '0 auto 16px' }}>Questions</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '0.01em', color: 'var(--ink-900)', margin: 0 }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
          {items.map((it, i) => (
            <FaqItem key={i} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { CommunityBanner, Faq });
})();
