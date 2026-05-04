// Footer.jsx — Quiet Media
const QMFooter = ({ onNavigate }) => {
  return (
    <footer style={{ background: 'var(--bg-primary)', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Brand values strip */}
      <div style={{
        borderTop: '1px solid rgba(var(--fg-rgb),0.07)',
        borderBottom: '1px solid rgba(var(--fg-rgb),0.07)',
        padding: '14px clamp(24px,5vw,80px)',
        display: 'flex', alignItems: 'center', gap: '0',
        overflowX: 'auto',
      }}>
        <QMark size={16} color={`rgba(var(--fg-rgb),0.4)`} style={{ marginRight: '24px', flexShrink: 0 }} />
        {['QUIET','FOCUSED','PURPOSEFUL','RELIABLE','CREATIVE'].map((v, i, arr) => (
          <React.Fragment key={v}>
            <span style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', color: `rgba(var(--fg-rgb),0.35)`, whiteSpace: 'nowrap' }}>{v}</span>
            {i < arr.length - 1 && <span style={{ display: 'inline-block', width: '1px', height: '10px', background: `rgba(var(--fg-rgb),0.15)`, margin: '0 20px', flexShrink: 0 }} />}
          </React.Fragment>
        ))}
      </div>

      {/* Main footer body */}
      <div style={{
        padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,80px) 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '40px',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <QMark size={18} />
            <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--fg-primary)', letterSpacing: '-0.01em' }}>quiet media</span>
          </div>
          <p style={{ fontSize: '12px', color: `rgba(var(--fg-rgb),0.28)`, lineHeight: 1.7 }}>
            Boutique film production.<br />Wiltshire, UK · Est. 2020
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: `rgba(var(--fg-rgb),0.22)`, marginBottom: '16px' }}>Navigate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'work', label: 'Our Work' },
              { id: 'about', label: 'About' },
              { id: 'team', label: 'Meet the Team' },
            ].map(item => (
              <button key={item.id} onClick={() => onNavigate(item.id)} style={{
                fontFamily: 'inherit', fontSize: '13px', color: `rgba(var(--fg-rgb),0.4)`,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                textAlign: 'left', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = `rgba(var(--fg-rgb),0.75)`}
                onMouseLeave={e => e.currentTarget.style.color = `rgba(var(--fg-rgb),0.4)`}
              >{item.label}</button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: `rgba(var(--fg-rgb),0.22)`, marginBottom: '16px' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <a href="mailto:tamy@quietmedia.co.uk" style={{ fontSize: '13px', color: `rgba(var(--fg-rgb),0.4)`, textDecoration: 'none' }}>tamy@quietmedia.co.uk</a>
            <a href="mailto:samuel@quietmedia.co.uk" style={{ fontSize: '13px', color: `rgba(var(--fg-rgb),0.4)`, textDecoration: 'none' }}>samuel@quietmedia.co.uk</a>
            <div style={{ marginTop: '8px', fontSize: '13px', color: `rgba(var(--fg-rgb),0.4)` }}>+44 (0) 7718 045455</div>
          </div>
        </div>

        {/* Follow */}
        <div>
          <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: `rgba(var(--fg-rgb),0.22)`, marginBottom: '16px' }}>Follow</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.instagram.com/quiet_media/" target="_blank" rel="noreferrer"
              style={{ width: '34px', height: '34px', border: `1px solid rgba(var(--fg-rgb),0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(var(--fg-rgb),0.35)`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(var(--fg-rgb),0.12)`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" style={{ fill: `rgba(var(--fg-rgb),0.5)` }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/quietmedia.co.uk" target="_blank" rel="noreferrer"
              style={{ width: '34px', height: '34px', border: `1px solid rgba(var(--fg-rgb),0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(var(--fg-rgb),0.35)`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(var(--fg-rgb),0.12)`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" style={{ fill: `rgba(var(--fg-rgb),0.5)` }}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div style={{
        borderTop: `1px solid rgba(var(--fg-rgb),0.05)`,
        padding: '18px clamp(24px,5vw,80px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px',
      }}>
        <span style={{ fontSize: '10px', color: `rgba(var(--fg-rgb),0.18)`, letterSpacing: '0.06em' }}>© 2024 BY QUIET MEDIA LIMITED · ALL RIGHTS RESERVED</span>
        <span style={{ fontSize: '10px', color: `rgba(var(--fg-rgb),0.18)`, letterSpacing: '0.06em' }}>WILTSHIRE, UK</span>
      </div>
    </footer>
  );
};

Object.assign(window, { QMFooter });
