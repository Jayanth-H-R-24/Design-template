const features = [
  {
    icon: '✦',
    title: 'Product Design',
    text: 'Craft bold digital experiences that look premium and convert better.',
  },
  {
    icon: '◎',
    title: 'Brand Strategy',
    text: 'Position your business with a memorable visual identity and messaging system.',
  },
  {
    icon: '▣',
    title: 'Growth Systems',
    text: 'Build faster funnels, smarter pages, and clearer messaging for scale.',
  },
];

const stats = [
  { value: '120+', label: 'Projects launched' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '18k', label: 'Monthly user reach' },
  { value: '32%', label: 'Average conversion lift' },
];

const testimonials = [
  {
    quote:
      'Nova translated our messy ideas into a luxury brand presence that customers instantly trusted.',
    name: 'Amelia Stone',
    role: 'Founder, Luma Atelier',
  },
  {
    quote:
      'The website feels premium, fast, and conversion-focused. Every section is purposeful.',
    name: 'Daniel Kim',
    role: 'Marketing Lead, Peak Labs',
  },
  {
    quote:
      'Their process was seamless from strategy to launch. Our brand finally feels world-class.',
    name: 'Sofia Reed',
    role: 'CEO, Northstar Co.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'For new brands ready to stand out online.',
    features: ['Modern landing page', 'Brand visual direction', 'Responsive design'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'Perfect for scaling businesses with bigger goals.',
    features: ['Full marketing site', 'Conversion-focused sections', 'Priority support'],
    featured: true,
  },
  {
    name: 'Studio',
    price: '$199',
    description: 'For founders who want premium design systems.',
    features: ['Custom experience design', 'Advanced UX strategy', 'Ongoing optimization'],
    featured: false,
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <div className="brand">
          <span className="brand-mark">N</span>
          <span>Nova Studio</span>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <button className="nav-button">Book a call</button>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">Design that feels premium</span>
            <h1>We build bold digital brands people remember.</h1>
            <p>
              Turn your vision into a stunning experience with strategy, visuals, and
              design systems that elevate your business.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Get started</button>
              <button className="secondary-button">View portfolio</button>
            </div>

            <div className="hero-meta">
              <div>
                <strong>300+</strong>
                <span>brands elevated</span>
              </div>
              <div>
                <strong>96%</strong>
                <span>client retention</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="dashboard-card">
              <div className="card-header">
                <span className="dot red" />
                <span className="dot amber" />
                <span className="dot green" />
              </div>

              <div className="card-body">
                <div className="mini-chart">
                  <span style={{ height: '30%' }} />
                  <span style={{ height: '55%' }} />
                  <span style={{ height: '72%' }} />
                  <span style={{ height: '48%' }} />
                  <span style={{ height: '92%' }} />
                  <span style={{ height: '100%' }} />
                </div>

                <div className="stats-panel">
                  <div>
                    <small>Engagement</small>
                    <strong>+84%</strong>
                  </div>
                  <div>
                    <small>Revenue</small>
                    <strong>$48K</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip container">
          <span>brandly</span>
          <span>northstar</span>
          <span>lumina</span>
          <span>craftlab</span>
          <span>canvas</span>
        </section>

        <section id="about" className="about container">
          <div className="section-heading">
            <span className="eyebrow">Why teams choose us</span>
            <h2>Design systems built to win attention.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="stats-section container">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="work" className="showcase container">
          <div className="showcase-copy">
            <span className="eyebrow">Selected work</span>
            <h2>We blend storytelling, product thinking, and design clarity.</h2>
            <p>
              From high-converting websites to premium digital identities, we create experiences that move
              brands forward.
            </p>
          </div>

          <div className="showcase-grid">
            <div className="showcase-card large-card">
              <div className="card-badge">Luxury</div>
              <h3>Luma Atelier</h3>
            </div>
            <div className="showcase-card small-card one">
              <div className="card-badge">SaaS</div>
              <h3>Peak Labs</h3>
            </div>
            <div className="showcase-card small-card two">
              <div className="card-badge">Retail</div>
              <h3>Canvas & Co</h3>
            </div>
          </div>
        </section>

        <section className="testimonials container">
          <div className="section-heading center">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by teams building what’s next.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="pricing container">
          <div className="section-heading center">
            <span className="eyebrow">Flexible pricing</span>
            <h2>Choose the plan that fits your growth stage.</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                <span className="plan-name">{plan.name}</span>
                <h3>{plan.price}<small>/mo</small></h3>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className={plan.featured ? 'primary-button' : 'secondary-button'}>
                  Choose plan
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div>
          <div className="brand">
            <span className="brand-mark">N</span>
            <span>Nova Studio</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
        </div>

        <button className="primary-button">Start a project</button>
      </footer>
    </div>
  );
}

export default App;
