/* PEACE site — Header */
(() => {
const { Button, Seal } = window.PeaceDesignSystem_adb1e5;

function Header({ onNav, active }) {
  const links = [
    { id: 'accord', label: 'The Moment' },
    { id: 'about', label: 'Peace Facts' },
    { id: 'terms', label: 'The Coin' },
    { id: 'join', label: 'How to Buy' },
    { id: 'faqs', label: 'FAQ' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(230,228,222,0.86)',
      backdropFilter: 'saturate(120%) blur(6px)',
      borderBottom: '1px solid var(--border-hairline)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '20px',
      }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }}
           style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <Seal size={40} year="" />
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px',
            letterSpacing: '0.16em', color: 'var(--ink-900)',
          }}>PEACE</span>
        </a>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); onNav(l.id); }}
               style={{
                 fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px',
                 letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none',
                 color: active === l.id ? 'var(--text-gold)' : 'var(--text-muted)',
                 transition: 'color var(--dur-fast)',
               }}>{l.label}</a>
          ))}
          <Button variant="gold" size="sm" onClick={() => onNav('accord')}><span style={{ color: 'rgb(0, 0, 0)' }}>Get $PEACE</span></Button>
        </nav>
      </div>
    </header>
  );
}

window.PeaceSite = Object.assign(window.PeaceSite || {}, { Header });
})();
