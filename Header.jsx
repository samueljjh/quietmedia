// Header.jsx — Quiet Media navigation
const QMHeader = ({ currentPage, onNavigate, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  const handleNav = (id) => { setMenuOpen(false); onNavigate(id); };

  const onHero = currentPage === 'home' && !scrolled;
  const onHeroDark = onHero && theme === 'dark';
  const onHeroLight = onHero && theme === 'light';

  const navBg = scrolled || menuOpen
    ? `rgba(var(--bg-rgb), 0.97)`
    : onHeroLight
      ? `rgba(var(--bg-rgb), 0.5)`
      : 'transparent';

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'work', label: 'OUR WORK' },
    { id: 'case-studies', label: 'CASE STUDIES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'team', label: 'MEET THE TEAM' },
  ];

  const ThemeToggle = () => (
    <button onClick={onToggleTheme} aria-label="Toggle theme" style={{
      background: 'none', border: 'none', cursor: 'pointer', padding: '6px',
      color: onHeroDark ? 'rgba(255,255,255,0.6)' : 'var(--fg-primary)',
      opacity: 0.45,
      display: 'flex', alignItems: 'center',
      transition: 'opacity 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
      onMouseLeave={e => e.currentTarget.style.opacity = '0.45'}
    >
      {theme === 'dark' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );

  const headerStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    height: scrolled ? '56px' : '68px',
    background: navBg,
    backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(var(--fg-rgb),0.07)' : '1px solid transparent',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 clamp(24px, 5vw, 80px)',
    transition: 'height 0.4s var(--ease-out), background 0.4s ease, border-color 0.4s ease',
  };

  return (
    <>
      <header style={headerStyle}>
        {/* Logo */}
        <button onClick={() => handleNav('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', gap: '10px', zIndex: 201,
        }}>
          <QMark size={20} color={onHeroDark ? '#ffffff' : 'var(--fg-primary)'} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px', fontWeight: 300, letterSpacing: '-0.01em',
            color: onHeroDark ? '#ffffff' : 'var(--fg-primary)',
            transition: 'color 0.3s ease',
          }}>quiet media</span>
        </button>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => handleNav(item.id)} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px', fontWeight: 500,
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: onHeroDark
                  ? currentPage === item.id ? '#ffffff' : 'rgba(255,255,255,0.5)'
                  : currentPage === item.id ? 'var(--fg-primary)' : `rgba(var(--fg-rgb),0.4)`,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                transition: 'color 0.3s ease',
                borderBottom: currentPage === item.id
                  ? onHeroDark ? '1px solid rgba(255,255,255,0.5)' : `1px solid rgba(var(--fg-rgb),0.45)`
                  : '1px solid transparent',
                paddingBottom: '2px',
              }}>{item.label}</button>
            ))}
            <ThemeToggle />
            <button onClick={() => onNavigate('book')} data-magnetic style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: onHeroDark ? '#0A0A0A' : 'var(--bg-primary)',
              background: onHeroDark ? '#ffffff' : 'var(--fg-primary)',
              border: 'none', padding: '10px 22px', cursor: 'pointer', transition: 'opacity 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >BOOK A CALL</button>
          </nav>
        )}

        {/* Hamburger (mobile) */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', zIndex: 201 }}>
            <ThemeToggle />
            <button onClick={() => setMenuOpen(o => !o)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
              display: 'flex', flexDirection: 'column', gap: '5px',
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '22px', height: '1px',
                  background: onHeroDark ? '#ffffff' : 'var(--fg-primary)',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform: i === 0 && menuOpen ? 'translateY(6px) rotate(45deg)' : i === 2 && menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {isMobile && (
        <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 300,
                letterSpacing: '-0.02em',
                color: currentPage === item.id ? 'var(--fg-primary)' : `rgba(var(--fg-rgb),0.45)`,
                background: 'none', border: 'none', borderBottom: `1px solid rgba(var(--fg-rgb),0.07)`,
                cursor: 'pointer', padding: '20px 0', textAlign: 'left',
                transition: 'color 0.2s',
              }}>{item.label}</button>
            ))}
          </nav>
          <button onClick={() => { setMenuOpen(false); onNavigate('book'); }} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'var(--bg-primary)', background: 'var(--fg-primary)', border: 'none',
            padding: '18px 32px', cursor: 'pointer', marginTop: '32px', alignSelf: 'flex-start',
          }}>BOOK AN INTRO CALL</button>
          <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <div style={{ fontSize: '11px', color: `rgba(var(--fg-rgb),0.25)`, lineHeight: 1.8 }}>
              <div>tamy@quietmedia.co.uk</div>
              <div>samuel@quietmedia.co.uk</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Object.assign(window, { QMHeader });
