// BookingModal.jsx — mailto: booking flow
const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = React.useState(0); // 0=type, 1=date, 2=time, 3=details
  const [selected, setSelected] = React.useState({
    callType: null, date: null, time: null,
    name: '', email: '', company: '', notes: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) { setStep(0); setSelected({ callType: null, date: null, time: null, name: '', email: '', company: '', notes: '' }); setSubmitted(false); }
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const callTypes = [
    { id: 'general', label: 'General Enquiry', desc: 'Tell us about your project and explore how we can help.' },
    { id: 'corporate', label: 'Corporate Video', desc: 'Brand films, talking heads, social content and events.' },
    { id: 'film', label: 'Film Production', desc: 'Narrative, dramatic and feature-length projects.' },
  ];

  const getDates = () => {
    const dates = [];
    const d = new Date();
    d.setDate(d.getDate() + 1);
    while (dates.length < 10) {
      const day = d.getDay();
      if (day !== 0 && day !== 6) dates.push(new Date(d)); // weekdays only
      d.setDate(d.getDate() + 1);
    }
    return dates;
  };

  // Hardcoded available time slots
  const timeSlots = ['09:00','10:00','11:00','13:00','14:00','15:00','16:00'];
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const set = (key, val) => setSelected(s => ({ ...s, [key]: val }));

  const canProceed = () => {
    if (step === 0) return !!selected.callType;
    if (step === 1) return !!selected.date;
    if (step === 2) return !!selected.time;
    if (step === 3) return selected.name.trim().length > 0 && selected.email.includes('@');
    return true;
  };

  const buildMailto = () => {
    const dateStr = `${dayNames[selected.date.getDay()]} ${selected.date.getDate()} ${monthNames[selected.date.getMonth()]}`;
    const callLabel = callTypes.find(c => c.id === selected.callType)?.label || selected.callType;
    const subject = encodeURIComponent(`Intro Call Request — ${selected.name}`);
    const body = encodeURIComponent(
      `New intro call request from the website.\n\n` +
      `Name: ${selected.name}\n` +
      `Email: ${selected.email}\n` +
      `Company: ${selected.company || 'N/A'}\n` +
      `Call type: ${callLabel}\n` +
      `Requested date: ${dateStr}\n` +
      `Requested time: ${selected.time} GMT\n\n` +
      `About the project:\n${selected.notes || 'Not provided'}`
    );
    return `mailto:tamy@quietmedia.co.uk?subject=${subject}&body=${body}`;
  };

  const handleSubmit = () => {
    window.location.href = buildMailto();
    setSubmitted(true);
  };

  const stepLabels = ['Call type','Date','Time','Your details'];

  const S = {
    overlay: {
      position: 'fixed', inset: 0, zIndex: 500,
      background: 'rgba(var(--bg-rgb),0.88)',
      backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
    },
    modal: {
      background: 'var(--bg-secondary)',
      border: '1px solid rgba(var(--fg-rgb),0.1)',
      width: '100%', maxWidth: '580px',
      maxHeight: '90vh',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'DM Sans', sans-serif",
    },
    header: {
      padding: '28px 32px 20px',
      borderBottom: '1px solid rgba(var(--fg-rgb),0.07)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexShrink: 0,
    },
    progress: {
      padding: '16px 32px',
      borderBottom: '1px solid rgba(var(--fg-rgb),0.07)',
      display: 'flex', gap: '0', flexShrink: 0,
    },
    body: {
      padding: '28px 32px',
      overflowY: 'auto', flex: 1,
    },
    footer: {
      padding: '20px 32px',
      borderTop: '1px solid rgba(var(--fg-rgb),0.07)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0,
    },
    label: { fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.28)', marginBottom: '12px' },
    input: {
      width: '100%', background: 'rgba(var(--fg-rgb),0.04)',
      border: '1px solid rgba(var(--fg-rgb),0.1)',
      color: 'var(--fg-primary)', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 300,
      padding: '12px 14px', outline: 'none',
      transition: 'border-color 0.2s',
    },
    textarea: {
      width: '100%', background: 'rgba(var(--fg-rgb),0.04)',
      border: '1px solid rgba(var(--fg-rgb),0.1)',
      color: 'var(--fg-primary)', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 300,
      padding: '12px 14px', outline: 'none', resize: 'vertical', minHeight: '80px',
    },
    btn: (active) => ({
      fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      padding: '13px 28px', cursor: 'pointer',
      background: active ? 'var(--fg-primary)' : 'transparent',
      color: active ? 'var(--bg-primary)' : 'rgba(var(--fg-rgb),0.35)',
      border: active ? 'none' : '1px solid rgba(var(--fg-rgb),0.15)',
      transition: 'all 0.2s',
    }),
  };

  if (submitted) return (
    <div style={S.overlay} onClick={onClose}>
      <div style={{ ...S.modal, padding: '64px 40px', textAlign: 'center', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
        <div style={{ width: '48px', height: '48px', border: '1px solid rgba(var(--fg-rgb),0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'rgba(var(--fg-rgb),0.7)' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{ fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.35)', marginBottom: '14px' }}>REQUEST SENT</p>
        <h2 style={{ fontSize: '26px', fontWeight: 300, color: 'var(--fg-primary)', letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>
          We'll be in touch shortly.
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(var(--fg-rgb),0.4)', lineHeight: 1.6, marginBottom: '8px' }}>
          Requested: {dayNames[selected.date.getDay()]} {selected.date.getDate()} {monthNames[selected.date.getMonth()]} at {selected.time} GMT
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(var(--fg-rgb),0.35)', lineHeight: 1.7, maxWidth: '340px', marginBottom: '36px' }}>
          Please send the draft email that has now popped open. Once we receive it, we'll confirm your call and send a calendar invite.<br /><br />
          If you have any trouble, call us on <span style={{ color: 'rgba(var(--fg-rgb),0.55)' }}>+44 (0) 7718 045455</span>.
        </p>
        <button onClick={onClose} style={S.btn(true)}>DONE</button>
      </div>
    </div>
  );

  return (
    <div className="booking-overlay" style={S.overlay} onClick={onClose}>
      <div className="booking-modal-inner" style={S.modal} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div style={S.header}>
          <div>
            <p style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.3)', marginBottom: '6px' }}>QUIET MEDIA</p>
            <h2 style={{ fontSize: '20px', fontWeight: 300, color: 'var(--fg-primary)', letterSpacing: '-0.02em' }}>Book an intro call</h2>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(var(--fg-rgb),0.35)', fontSize: '22px', lineHeight: 1, padding: '0 0 0 16px' }}>×</button>
        </div>

        {/* Step progress */}
        <div style={S.progress}>
          {stepLabels.map((label, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', paddingRight: i < stepLabels.length - 1 ? '16px' : '0' }}>
              <div style={{ height: '2px', background: i <= step ? 'var(--fg-primary)' : 'rgba(var(--fg-rgb),0.1)', transition: 'background 0.3s' }} />
              <span style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: i === step ? 'rgba(var(--fg-rgb),0.6)' : i < step ? 'rgba(var(--fg-rgb),0.35)' : 'rgba(var(--fg-rgb),0.18)' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Body */}
        <div style={S.body}>

          {/* Step 0: Call type */}
          {step === 0 && (
            <div>
              <p style={S.label}>What can we help you with?</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {callTypes.map(ct => (
                  <button key={ct.id} onClick={() => set('callType', ct.id)} style={{
                    background: selected.callType === ct.id ? 'rgba(var(--fg-rgb),0.07)' : 'transparent',
                    border: `1px solid ${selected.callType === ct.id ? 'rgba(var(--fg-rgb),0.3)' : 'rgba(var(--fg-rgb),0.1)'}`,
                    padding: '16px 18px', cursor: 'pointer', textAlign: 'left',
                    transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 400, color: 'var(--fg-primary)', marginBottom: '4px' }}>{ct.label}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(var(--fg-rgb),0.38)', lineHeight: 1.5 }}>{ct.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Date */}
          {step === 1 && (
            <div>
              <p style={S.label}>Choose a date</p>
              <div className="booking-date-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                {getDates().map((d, i) => {
                  const isSelected = selected.date && selected.date.toDateString() === d.toDateString();
                  return (
                    <button key={i} onClick={() => set('date', d)} style={{
                      padding: '12px 8px', cursor: 'pointer', textAlign: 'center', fontFamily: "'DM Sans', sans-serif",
                      background: isSelected ? 'rgba(var(--fg-rgb),0.09)' : 'transparent',
                      border: `1px solid ${isSelected ? 'rgba(var(--fg-rgb),0.35)' : 'rgba(var(--fg-rgb),0.1)'}`,
                      transition: 'all 0.2s',
                    }}>
                      <div style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.35)', marginBottom: '4px' }}>{dayNames[d.getDay()]}</div>
                      <div style={{ fontSize: '18px', fontWeight: 300, color: 'var(--fg-primary)' }}>{d.getDate()}</div>
                      <div style={{ fontSize: '9px', color: 'rgba(var(--fg-rgb),0.3)', marginTop: '2px' }}>{monthNames[d.getMonth()]}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Time */}
          {step === 2 && (
            <div>
              <p style={S.label}>Choose a time · GMT</p>
              <div className="booking-time-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {timeSlots.map(t => {
                  const isSelected = selected.time === t;
                  return (
                    <button key={t} onClick={() => set('time', t)} style={{
                      padding: '14px 8px', cursor: 'pointer', textAlign: 'center', fontFamily: "'DM Sans', sans-serif",
                      background: isSelected ? 'rgba(var(--fg-rgb),0.09)' : 'transparent',
                      border: `1px solid ${isSelected ? 'rgba(var(--fg-rgb),0.35)' : 'rgba(var(--fg-rgb),0.1)'}`,
                      fontSize: '14px', fontWeight: 300, color: 'var(--fg-primary)',
                      transition: 'all 0.2s',
                    }}>{t}</button>
                  );
                })}
              </div>
              <p style={{ marginTop: '16px', fontSize: '11px', color: 'rgba(var(--fg-rgb),0.25)', lineHeight: 1.6 }}>
                Calls last approximately 30 minutes. We'll send a video link in your confirmation.
              </p>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <p style={S.label}>Your name *</p>
                <input value={selected.name} onChange={e => set('name', e.target.value)} placeholder="Full name" style={S.input}
                  onFocus={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.1)'}
                />
              </div>
              <div>
                <p style={S.label}>Email address *</p>
                <input type="email" value={selected.email} onChange={e => set('email', e.target.value)} placeholder="you@company.com" style={S.input}
                  onFocus={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.1)'}
                />
              </div>
              <div>
                <p style={S.label}>Company / Organisation</p>
                <input value={selected.company} onChange={e => set('company', e.target.value)} placeholder="Optional" style={S.input}
                  onFocus={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.1)'}
                />
              </div>
              <div>
                <p style={S.label}>Tell us about your project</p>
                <textarea value={selected.notes} onChange={e => set('notes', e.target.value)} placeholder="Brief description — what you're looking to create, timeline, any questions..." style={S.textarea}
                  onFocus={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(var(--fg-rgb),0.1)'}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer nav */}
        <div style={S.footer}>
          <button onClick={() => step > 0 ? setStep(s => s - 1) : onClose()} style={S.btn(false)}>
            {step === 0 ? 'CANCEL' : 'BACK'}
          </button>
          {step === 3 ? (
            <button onClick={handleSubmit} disabled={!canProceed()} style={{ ...S.btn(canProceed()), opacity: canProceed() ? 1 : 0.4 }}>CONFIRM BOOKING</button>
          ) : (
            <button onClick={() => setStep(s => s + 1)} disabled={!canProceed()} style={{ ...S.btn(canProceed()), opacity: canProceed() ? 1 : 0.4 }}>CONTINUE</button>
          )}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { BookingModal });
