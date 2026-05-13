// CaseStudies.jsx — Quiet Media

// ─── Case Studies Section (homepage / work page preview) ─────
const CaseStudiesSection = ({ onNavigate }) => {
  useReveal();
  const [hovered, setHovered] = React.useState(null);

  const cases = [
    {
      id: 'soul',
      eyebrow: 'LIVE PERFORMANCE · FILM',
      title: 'Diversity — SOUL UK Tour 2026',
      headline: 'Turning live dance into cinematic theatre.',
      detail: '8 short films · 100,000+ live audience · Sold-out theatres nationwide',
      year: '2026',
      pullQuote: '"A structure that felt closer to theatre than a traditional dance showcase."',
      pullSource: 'Lyric Lounge Review',
    },
    {
      id: 'lttl',
      eyebrow: 'FEATURE FILM',
      title: 'Look to the Light',
      headline: 'From independent production to five major streaming platforms.',
      detail: 'Paramount+ · Amazon Prime · Sky Store · Apple TV · YouTube',
      year: '2023',
      pullQuote: '"Its cinematography paints the stark contrasts of Eddie\'s life."',
      pullSource: 'Overly Honest Movie Reviews',
    },
    {
      id: 'sophie-conran',
      eyebrow: 'BRAND RETAINER',
      title: 'Sophie Conran',
      headline: '68% revenue growth. 250k to 340k followers.',
      detail: 'Retained content partner · Brand identity films · Social content',
      year: 'Ongoing',
      pullQuote: null,
      pullSource: null,
    },
  ];

  return (
    <section
      id="case-studies"
      style={{
        padding: 'clamp(80px,10vw,140px) 0',
        borderTop: '1px solid rgba(var(--fg-rgb),0.06)',
      }}
    >
      {/* Section header */}
      <div
        className="reveal"
        style={{
          marginBottom: 'clamp(36px,5vw,56px)',
          padding: '0 clamp(24px,5vw,80px)',
        }}
      >
        <p
          style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'rgba(var(--fg-rgb),0.28)',
            marginBottom: '14px',
          }}
        >
          CASE STUDIES
        </p>
        <h2
          style={{
            fontSize: 'clamp(28px,4vw,48px)',
            fontWeight: 300,
            letterSpacing: '-0.8px',
            color: 'var(--fg-primary)',
            lineHeight: 1.1,
          }}
        >
          The work, in detail.
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {cases.map((c, i) => (
          <div
            key={c.id}
            className="reveal"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onNavigate(`case-study-${c.id}`)}
            style={{
              padding: 'clamp(28px,4vw,44px) clamp(24px,5vw,80px)',
              borderTop: '1px solid rgba(var(--fg-rgb),0.07)',
              borderBottom: i === cases.length - 1 ? '1px solid rgba(var(--fg-rgb),0.07)' : 'none',
              cursor: 'none',
              transition: 'opacity 0.2s, background 0.25s',
              opacity: hovered !== null && hovered !== i ? 0.38 : 1,
              background: hovered === i ? 'rgba(var(--fg-rgb),0.02)' : 'transparent',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              {/* Left: content */}
              <div style={{ flex: 1, minWidth: '240px' }}>
                <p
                  style={{
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(var(--fg-rgb),0.25)',
                    marginBottom: '12px',
                  }}
                >
                  {c.eyebrow}
                </p>
                <h3
                  style={{
                    fontSize: 'clamp(20px,2.8vw,32px)',
                    fontWeight: 300,
                    letterSpacing: '-0.5px',
                    color: 'var(--fg-primary)',
                    lineHeight: 1.1,
                    marginBottom: '10px',
                    display: 'inline-block',
                    transform: hovered === i ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(14px,1.5vw,16px)',
                    fontWeight: 300,
                    color: 'rgba(var(--fg-rgb),0.55)',
                    lineHeight: 1.5,
                    marginBottom: c.pullQuote ? '16px' : '0',
                    maxWidth: '560px',
                  }}
                >
                  {c.headline}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(var(--fg-rgb),0.28)',
                    lineHeight: 1.6,
                    marginBottom: c.pullQuote ? '18px' : '0',
                    maxWidth: '560px',
                  }}
                >
                  {c.detail}
                </p>
                {c.pullQuote && (
                  <p
                    style={{
                      fontSize: '13px',
                      fontStyle: 'italic',
                      color: 'rgba(var(--fg-rgb),0.38)',
                      lineHeight: 1.6,
                      borderLeft: '2px solid rgba(var(--fg-rgb),0.1)',
                      paddingLeft: '14px',
                      maxWidth: '480px',
                    }}
                  >
                    {c.pullQuote}{' '}
                    <span style={{ fontStyle: 'normal', fontSize: '11px', opacity: 0.7 }}>
                      — {c.pullSource}
                    </span>
                  </p>
                )}
              </div>

              {/* Right: year + CTA */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '24px',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    color: 'rgba(var(--fg-rgb),0.2)',
                  }}
                >
                  {c.year}
                </span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: hovered === i ? 'var(--fg-primary)' : 'rgba(var(--fg-rgb),0.28)',
                    transition: 'color 0.25s, gap 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  READ CASE STUDY
                  <span
                    style={{
                      display: 'inline-block',
                      transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── SOUL Case Study Page ─────────────────────────────────────
const CaseStudySoulPage = ({ onNavigate, onBook }) => {
  useReveal();

  const pullQuotes = [
    {
      quote: 'The short film provided the back story to the whole production.',
      source: 'Arts Review Hub',
    },
    {
      quote: 'A recurring filmed narrative threaded through the show.',
      source: 'Lyric Lounge Review',
    },
    {
      quote: 'A structure that felt closer to theatre than a traditional dance showcase.',
      source: 'Lyric Lounge Review',
    },
    {
      quote: 'Exquisitely filmed sequences, interwoven with the live performance.',
      source: 'Fairy Powered Productions',
    },
    {
      quote: 'The narrative thread woven through its striking video design.',
      source: 'Adventures in Theatreland',
    },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Hero video strip */}
      <div
        style={{
          width: '100%',
          aspectRatio: '21/9',
          overflow: 'hidden',
          marginTop: '68px',
          background: '#0a0a0a',
        }}
      >
        <video
          src="assets/soul-hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="SOUL — Diversity tour film sequence"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            display: 'block',
            opacity: 0.85,
          }}
        />
      </div>

      {/* Back link + header */}
      <section
        style={{
          padding: 'clamp(48px,7vw,88px) clamp(24px,5vw,80px) clamp(32px,4vw,56px)',
          borderBottom: '1px solid rgba(var(--fg-rgb),0.06)',
        }}
      >
        <button
          onClick={() => onNavigate('work')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(var(--fg-rgb),0.3)',
            cursor: 'none',
            padding: 0,
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(var(--fg-rgb),0.65)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(var(--fg-rgb),0.3)')}
        >
          ← OUR WORK
        </button>

        <div className="reveal">
          <p
            style={{
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(var(--fg-rgb),0.28)',
              marginBottom: '20px',
            }}
          >
            LIVE PERFORMANCE · FILM · 2026
          </p>
          <h1
            style={{
              fontSize: 'clamp(40px,7vw,88px)',
              fontWeight: 300,
              letterSpacing: '-1.5px',
              color: 'var(--fg-primary)',
              lineHeight: 1.0,
              marginBottom: '20px',
            }}
          >
            Diversity — SOUL<br />UK Tour 2026
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,22px)',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.42)',
              lineHeight: 1.5,
              maxWidth: '560px',
              letterSpacing: '-0.15px',
            }}
          >
            Turning live dance into cinematic theatre.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          background: '#EDECE8',
          padding: 'clamp(32px,4vw,48px) clamp(24px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2px',
          borderBottom: '1px solid rgba(10,10,10,0.08)',
        }}
      >
        {[
          { number: '8', label: 'Short films produced' },
          { number: '100,000+', label: 'Live audience' },
          { number: 'UK-wide', label: 'Sold-out theatres' },
          { number: '2026', label: 'Tour year' },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              padding: 'clamp(16px,2vw,24px)',
              borderLeft: i > 0 ? '1px solid rgba(10,10,10,0.08)' : 'none',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(20px,2.5vw,30px)',
                fontWeight: 300,
                letterSpacing: '-0.5px',
                color: '#0A0A0A',
                marginBottom: '6px',
                lineHeight: 1,
              }}
            >
              {s.number}
            </p>
            <p
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(10,10,10,0.4)',
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Overview */}
      <section
        style={{
          padding: 'clamp(64px,8vw,100px) clamp(24px,5vw,80px)',
          borderBottom: '1px solid rgba(var(--fg-rgb),0.06)',
          maxWidth: '780px',
        }}
      >
        <div className="reveal">
          <p
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(var(--fg-rgb),0.28)',
              marginBottom: '20px',
            }}
          >
            OVERVIEW
          </p>
          <p
            style={{
              fontSize: 'clamp(16px,1.8vw,20px)',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.7)',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}
          >
            For Diversity's SOUL UK Tour 2026, Quiet Media produced the cinematic film
            sequences that became a central part of the show's emotional and narrative structure.
          </p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.42)',
              lineHeight: 1.9,
              marginBottom: '20px',
            }}
          >
            Directed, produced and edited by Samuel Hosier, the films helped build the story
            world of the production — connecting live choreography with a wider narrative about
            artificial intelligence, memory, human connection and what it means to remain
            present in an increasingly digital world.
          </p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.42)',
              lineHeight: 1.9,
            }}
          >
            The films were not designed as background visuals. They were created as cinematic
            story fragments woven through the performance, helping bridge choreography,
            projection, theatre and film into one unified experience.
          </p>
        </div>
      </section>

      {/* Two-col: Challenge + Our Role */}
      <section
        className="two-col-grid"
        style={{
          padding: 'clamp(64px,8vw,100px) clamp(24px,5vw,80px)',
          borderBottom: '1px solid rgba(var(--fg-rgb),0.06)',
          alignItems: 'start',
          gap: 'clamp(40px,6vw,100px)',
        }}
      >
        <div className="reveal">
          <p
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(var(--fg-rgb),0.28)',
              marginBottom: '20px',
            }}
          >
            THE CHALLENGE
          </p>
          <h2
            style={{
              fontSize: 'clamp(22px,3vw,32px)',
              fontWeight: 300,
              letterSpacing: '-0.5px',
              color: 'var(--fg-primary)',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Film that lives inside a live show.
          </h2>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.42)',
              lineHeight: 1.9,
              marginBottom: '16px',
            }}
          >
            The show needed filmed sequences that could carry story and emotion without
            slowing down the energy of a live touring production. Every cut had to support the
            pace of the stage, the emotional arc of the show, and the wider concept of SOUL.
          </p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.42)',
              lineHeight: 1.9,
            }}
          >
            The sequences also needed to give the audience enough story to connect
            emotionally, while leaving space for the choreography to complete the idea
            in the room.
          </p>
        </div>

        <div className="reveal">
          <p
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(var(--fg-rgb),0.28)',
              marginBottom: '20px',
            }}
          >
            OUR ROLE
          </p>
          <h2
            style={{
              fontSize: 'clamp(22px,3vw,32px)',
              fontWeight: 300,
              letterSpacing: '-0.5px',
              color: 'var(--fg-primary)',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            End-to-end production.
          </h2>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(var(--fg-rgb),0.42)',
              lineHeight: 1.9,
              marginBottom: '20px',
            }}
          >
            Quiet Media shaped the films from production through to final delivery — casting
            key on-screen roles, sourcing and securing locations, designing the visual approach,
            selecting lenses, directing the shoot, editing and crafting the pacing so each
            sequence could sit seamlessly inside the live show.
          </p>
          {/* Role list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Casting & on-screen direction',
              'Location sourcing & management',
              'Visual language & lens selection',
              'Shoot direction',
              'Edit & pacing for live integration',
              'Final delivery for touring production',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: 'rgba(var(--fg-rgb),0.25)',
                  }}
                />
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(var(--fg-rgb),0.5)',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film strip */}
      <FilmStrip
        images={[
          'assets/soul-1.jpg','assets/soul-2.jpg','assets/soul-3.jpg','assets/soul-4.jpg',
          'assets/soul-5.jpg','assets/soul-6.jpg','assets/soul-7.jpg','assets/soul-8.jpg',
          'assets/soul-9.jpg','assets/soul-10.jpg',
        ]}
        id="soul-strip"
        direction="left"
        speed={1.4}
      />

      {/* Pull quotes */}
      <section
        style={{
          padding: 'clamp(64px,8vw,100px) clamp(24px,5vw,80px)',
          borderTop: '1px solid rgba(var(--fg-rgb),0.06)',
          borderBottom: '1px solid rgba(var(--fg-rgb),0.06)',
        }}
      >
        <div className="reveal" style={{ marginBottom: 'clamp(40px,5vw,60px)' }}>
          <p
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(var(--fg-rgb),0.28)',
              marginBottom: '14px',
            }}
          >
            PRESS
          </p>
          <h2
            style={{
              fontSize: 'clamp(24px,3.5vw,40px)',
              fontWeight: 300,
              letterSpacing: '-0.8px',
              color: 'var(--fg-primary)',
              lineHeight: 1.1,
            }}
          >
            What reviewers said.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          {pullQuotes.map((q, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: 'var(--bg-secondary)',
                padding: 'clamp(24px,3vw,36px)',
                borderTop: '1px solid rgba(var(--fg-rgb),0.07)',
              }}
            >
              <p
                style={{
                  fontSize: '26px',
                  fontWeight: 300,
                  color: 'rgba(var(--fg-rgb),0.1)',
                  marginBottom: '16px',
                  lineHeight: 1,
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: 'italic',
                }}
              >
                ❝
              </p>
              <p
                style={{
                  fontSize: 'clamp(14px,1.4vw,16px)',
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'rgba(var(--fg-rgb),0.55)',
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}
              >
                {q.quote}
              </p>
              <div
                style={{
                  borderTop: '1px solid rgba(var(--fg-rgb),0.07)',
                  paddingTop: '14px',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(var(--fg-rgb),0.3)',
                  }}
                >
                  {q.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credits */}
      <section
        style={{
          padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,80px)',
          borderBottom: '1px solid rgba(var(--fg-rgb),0.06)',
        }}
      >
        <div className="reveal">
          <p
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(var(--fg-rgb),0.28)',
              marginBottom: '24px',
            }}
          >
            CREDITS
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2px',
            }}
          >
            {[
              { role: 'Production Company', name: 'Quiet Media' },
              { role: 'Director · Producer · Editor', name: 'Samuel Hosier' },
              { role: 'Director of Photography', name: 'Hugo Lai' },
              { role: 'Casting · Locations · Production', name: 'Quiet Media' },
              { role: 'Client', name: 'Diversity — SOUL UK Tour 2026' },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(16px,2vw,22px) 0',
                  borderBottom: '1px solid rgba(var(--fg-rgb),0.05)',
                }}
              >
                <p
                  style={{
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(var(--fg-rgb),0.22)',
                    marginBottom: '6px',
                  }}
                >
                  {c.role}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgba(var(--fg-rgb),0.65)',
                    lineHeight: 1.4,
                  }}
                >
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#EDECE8',
          padding: 'clamp(64px,8vw,100px) clamp(24px,5vw,80px)',
        }}
      >
        <div className="reveal" style={{ maxWidth: '560px' }}>
          <p
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.35)',
              marginBottom: '20px',
            }}
          >
            START A CONVERSATION
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px,4vw,44px)',
              fontWeight: 300,
              letterSpacing: '-0.8px',
              color: '#0A0A0A',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Have a project in mind?
          </h2>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(10,10,10,0.45)',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}
          >
            Book a free 30-minute intro call. We'll talk about your project and see
            if we're the right fit.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onBook}
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#0A0A0A',
                border: 'none',
                padding: '16px 36px',
                cursor: 'none',
                transition: 'opacity 0.2s',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              BOOK AN INTRO CALL
            </button>
            <button
              onClick={() => onNavigate('work')}
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(10,10,10,0.6)',
                background: 'transparent',
                border: '1px solid rgba(10,10,10,0.25)',
                padding: '16px 36px',
                cursor: 'none',
                transition: 'border-color 0.2s, color 0.2s',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(10,10,10,0.55)';
                e.currentTarget.style.color = '#0A0A0A';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(10,10,10,0.25)';
                e.currentTarget.style.color = 'rgba(10,10,10,0.6)';
              }}
            >
              SEE MORE WORK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { CaseStudiesSection, CaseStudySoulPage });
