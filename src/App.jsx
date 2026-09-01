import './App.css'

const features = [
  {
    icon: '🌳',
    title: 'Pohon keluarga interaktif',
    text: 'Tampilkan silsilah keluarga secara visual agar hubungan antar anggota lebih mudah dipahami.',
  },
  {
    icon: '🧾',
    title: 'Data anggota terstruktur',
    text: 'Catat nama, orang tua, pasangan, anak, dan detail penting lainnya dalam satu tempat.',
  },
  {
    icon: '📱',
    title: 'Responsive untuk semua perangkat',
    text: 'Desain yang nyaman digunakan di desktop, tablet, maupun smartphone.',
  },
  {
    icon: '🔒',
    title: 'Keamanan data lebih terjaga',
    text: 'Semua data disimpan dengan sistem cloud yang aman dan mudah dikelola.',
  },
]

const packages = [
  {
    name: 'Basic',
    price: 'Rp 2.500.000',
    desc: 'Cocok untuk keluarga atau individu yang ingin aplikasi siap pakai.',
    items: ['Source code', 'Dokumentasi', 'Setup awal', 'Support 1 bulan'],
    featured: false,
  },
  {
    name: 'Pro',
    price: 'Rp 5.000.000',
    desc: 'Untuk kebutuhan custom branding dan fitur tambahan yang lebih lengkap.',
    items: ['Semua di Basic', 'Custom branding', 'Modifikasi fitur', 'Support 2 bulan'],
    featured: true,
  },
  {
    name: 'Custom',
    price: 'Rp 10.000.000+',
    desc: 'Solusi khusus untuk komunitas, organisasi, atau kebutuhan bisnis tertentu.',
    items: ['Custom design', 'Integrasi tambahan', 'Maintenance', 'Prioritas support'],
    featured: false,
  },
]

function App() {
  return (
    <div className="landing-page">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">A</div>
          <div>
            <strong>ABITECH</strong>
            <span>Pohon Keluarga App</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#features">Fitur</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Harga</a>
        </nav>

        <a
          className="nav-cta"
          href="https://wa.me/6282247971808?text=Halo%20ABITECH%2C%20saya%20tertarik%20dengan%20Pohon%20Keluarga%20App"
          target="_blank"
          rel="noreferrer"
        >
          Hubungi Saya
        </a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Digitalisasi silsilah keluarga</span>
            <h1>Kelola keluarga Anda dengan aplikasi pohon keluarga yang modern.</h1>
            <p>
              Pohon Keluarga App membantu Anda mencatat anggota keluarga, menampilkan hubungan
              antar keluarga, dan menjaga data silsilah tetap terorganisir dalam satu platform.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#pricing">Lihat Harga</a>
              <a className="secondary-btn" href="#demo">Lihat Demo</a>
            </div>

            <ul className="trust-list">
              <li>✅ Mudah digunakan</li>
              <li>✅ Responsif di semua perangkat</li>
              <li>✅ Cocok untuk keluarga dan komunitas</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Preview aplikasi">
            <div className="phone-shell">
              <div className="phone-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="screen-card">
                <div className="family-tree">
                  <div className="node node-main">
                    <strong>Orang Tua</strong>
                    <small>1 keluarga</small>
                  </div>

                  <div className="tree-branch">
                    <div className="node small">
                      <strong>Anak 1</strong>
                    </div>
                    <div className="node small">
                      <strong>Anak 2</strong>
                    </div>
                    <div className="node small">
                      <strong>Anak 3</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mini-stats">
                <div>
                  <strong>120+</strong>
                  <span>Anggota</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Generasi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">Kenapa memilih kami</span>
            <h2>Fitur yang membantu keluarga Anda tetap terhubung.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section demo-section" id="demo">
          <div className="demo-copy">
            <span className="eyebrow">Solusi yang praktis</span>
            <h2>Lebih dari sekadar daftar nama, tapi representasi keluarga yang nyata.</h2>
            <p>
              Dengan tampilan pohon keluarga yang jelas, Anda bisa melihat hubungan antar anggota,
              menambahkan data baru, dan menjaga jejak keluarga dengan lebih terstruktur.
            </p>
          </div>

          <div className="demo-points">
            <div className="point-box">
              <strong>01</strong>
              <span>Input data keluarga dengan cepat</span>
            </div>
            <div className="point-box">
              <strong>02</strong>
              <span>Visualisasi hubungan antar anggota</span>
            </div>
            <div className="point-box">
              <strong>03</strong>
              <span>Siap digunakan untuk kebutuhan keluarga maupun komunitas</span>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="section-heading center">
            <span className="eyebrow">Paket jual</span>
            <h2>Mulai dari yang paling sederhana sampai kebutuhan custom.</h2>
          </div>

          <div className="pricing-grid">
            {packages.map((item) => (
              <article key={item.name} className={`price-card ${item.featured ? 'featured' : ''}`}>
                <div className="price-header">
                  <span>{item.name}</span>
                  {item.featured && <span className="badge-featured">Terbaik</span>}
                </div>
                <h3>{item.price}</h3>
                <p>{item.desc}</p>
                <ul>
                  {item.items.map((listItem) => (
                    <li key={listItem}>✓ {listItem}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6282247971808?text=Halo%20ABITECH%2C%20saya%20ingin%20membeli%20paket%20Pohon%20Keluarga%20App%20%28%20item.name%20%29"
                  target="_blank"
                  rel="noreferrer"
                  className="price-btn"
                >
                  Pilih Paket
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner section">
          <div>
            <span className="eyebrow">Siap mulai?</span>
            <h2>Jual aplikasi Anda dengan tampilan yang lebih kuat.</h2>
          </div>
          <a
            className="primary-btn"
            href="https://wa.me/6282247971808?text=Halo%20ABITECH%2C%20saya%20ingin%20membeli%20Pohon%20Keluarga%20App"
            target="_blank"
            rel="noreferrer"
          >
            Chat Sekarang
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 ABITECH</p>
        <p>Pohon Keluarga App by ABITECH</p>
      </footer>
    </div>
  )
}

export default App