import React from 'react';
import { NEIGHBORHOOD_DESTINATIONS } from '../data/towerData';
import { ScrollReveal } from './ScrollReveal';
import { Navigation, MapPin, Compass, Train, Car, ShoppingBag, TreePine, Clock } from 'lucide-react';

export const ProjectLocation: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    if (cat.includes('Highway') || cat.includes('Car')) return <Car size={16} color="var(--accent-gold)" />;
    if (cat.includes('Metro') || cat.includes('Rail')) return <Train size={16} color="var(--accent-gold)" />;
    if (cat.includes('Retail') || cat.includes('Mall')) return <ShoppingBag size={16} color="var(--accent-gold)" />;
    if (cat.includes('Green') || cat.includes('Park')) return <TreePine size={16} color="var(--accent-gold)" />;
    return <Navigation size={16} color="var(--accent-gold)" />;
  };

  return (
    <section
      id="location"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '850px' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill">
              <Compass size={12} color="var(--accent-gold)" />
              <span>Location & Connectivity</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} distance={14}>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                lineHeight: 1.16,
                letterSpacing: 'clamp(0.04em, 1.2vw, 0.08em)',
                color: '#FAF8F5',
                marginBottom: '1rem'
              }}
            >
              Everything You Need,{' '}
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--accent-gold)'
                }}
              >
                Effortlessly Within Reach
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} distance={12}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: 'rgba(250, 248, 245, 0.85)',
                lineHeight: 1.6
              }}
            >
              Positioned in Hyderabad, Telangana, India—strategically situated (Coordinates: 17.452361, 78.358107) with effortless access across Hyderabad’s premier business districts, residential hubs, and transit arteries.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Location Spread */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Clean Verified Destinations List */}
          <ScrollReveal delay={100} distance={14}>
            <div
              className="card-editorial"
              style={{
                padding: 'clamp(1rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(201, 169, 130, 0.2)', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Key Destination
                </span>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Transit Access
                </span>
              </div>

              {NEIGHBORHOOD_DESTINATIONS.map((dest, idx) => (
                <div
                  key={dest.name}
                  style={{
                    padding: '1.15rem 0',
                    borderBottom: idx !== NEIGHBORHOOD_DESTINATIONS.length - 1 ? '1px solid rgba(255, 255, 255, 0.07)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(201, 169, 130, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {getCategoryIcon(dest.category)}
                      </div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: 'clamp(0.875rem, 1.4vw, 1.05rem)',
                          fontWeight: 600,
                          color: '#FAF8F5',
                          letterSpacing: '0.03em'
                        }}
                      >
                        {dest.name}
                      </h4>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(201, 169, 130, 0.12)',
                        border: '1px solid rgba(201, 169, 130, 0.3)',
                        color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                    >
                      <Clock size={11} />
                      <span>{dest.distance}</span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'rgba(250, 248, 245, 0.62)',
                      lineHeight: 1.5,
                      paddingLeft: '2.4rem'
                    }}
                  >
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Google Maps Interactive Location Embed */}
          <ScrollReveal delay={160} distance={16} scale>
            <div
              className="card-editorial"
              style={{
                position: 'relative',
                padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(360px, 45vw, 540px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0F1612',
                  border: '1px solid rgba(201, 169, 130, 0.25)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.153592667417!2d78.35810747858075!3d17.452361240762322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93001097a37b%3A0x42ac63f1896523e9!2sSmart%20Elite%20Realtors!5e0!3m2!1sen!2sin!4v1790565732138!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Smart Elite Realtors Location"
                />

                {/* Floating Map Legend */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.65rem 1rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.94)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '8px',
                    border: '1px solid rgba(201, 169, 130, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(250, 248, 245, 0.75)',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                    <span style={{ fontWeight: 600, color: '#FAF8F5' }}>Smart Elite Realtors</span>
                  </div>
                  <div>
                    <span>Hyderabad, Telangana (17.452361, 78.358107)</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
