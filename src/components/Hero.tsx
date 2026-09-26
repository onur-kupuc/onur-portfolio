function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-grid" />
            <div className="hero-noise" />

            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            {/* SOL TARAF */}
            <div className="hero-content">
                <div className="hero-eyebrow">
                    <span className="status-dot" />
                    DİJİTAL ÜRÜN GELİŞTİRME
                </div>

                <h1>
                    Fikirleri
                    <span>dijitale</span>
                    dönüştürüyorum.
                </h1>

                <p className="hero-description">
                    Web siteleri, mobil uygulamalar ve dijital ürünler
                    geliştiriyorum. Fikirleri yalnızca tasarlamakla
                    kalmayıp çalışan dijital deneyimlere dönüştürüyorum.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="button button-primary">
                        Çalışmalarımı Gör
                        <span>↗</span>
                    </a>

                    <a
                        href="https://wa.me/905398863299"
                        target="_blank"
                        rel="noreferrer"
                        className="button button-secondary"
                    >
                        WhatsApp'tan Yaz
                    </a>
                </div>

                <div className="hero-fields">
                    <div className="hero-field">
                        <span>01</span>
                        <strong>WEB</strong>
                    </div>

                    <div className="hero-field">
                        <span>02</span>
                        <strong>MOBİL</strong>
                    </div>

                    <div className="hero-field">
                        <span>03</span>
                        <strong>ÜRÜN</strong>
                    </div>
                </div>
            </div>

            {/* SAĞ TARAF */}
            <div className="hero-visual">

                {/* BÜYÜK ANA GÖRSEL */}
                <div className="hero-logo-frame">
                    <div className="hero-logo-glow" />

                    <img
                        src="/images/logo.png"
                        alt="Onur Küpüç"
                        className="hero-logo-image"
                    />

                    <div className="hero-logo-corner hero-logo-corner-tl" />
                    <div className="hero-logo-corner hero-logo-corner-br" />
                </div>

                {/* WEB */}
                <div className="hero-service-card hero-service-card-one">
                    <span className="hero-service-number">01</span>

                    <div className="hero-service-icon">
                        ↗
                    </div>

                    <div className="hero-service-content">
                        <span>WEB</span>
                        <strong>Web Siteleri</strong>
                        <p>
                            Modern · Hızlı · Responsive
                        </p>
                    </div>
                </div>

                {/* MOBİL */}
                <div className="hero-service-card hero-service-card-two">
                    <span className="hero-service-number">02</span>

                    <div className="hero-service-icon">
                        ↗
                    </div>

                    <div className="hero-service-content">
                        <span>MOBILE</span>
                        <strong>Mobil Uygulamalar</strong>
                        <p>
                            iOS · Android · Ürün
                        </p>
                    </div>
                </div>

                {/* DİJİTAL ÜRÜN */}
                <div className="hero-service-card hero-service-card-three">
                    <span className="hero-service-number">03</span>

                    <div className="hero-service-icon">
                        ↗
                    </div>

                    <div className="hero-service-content">
                        <span>PRODUCT</span>
                        <strong>Dijital Ürünler</strong>
                        <p>
                            SaaS · Platform · Fikir
                        </p>
                    </div>
                </div>
            </div>

            {/* ALT BİLGİ */}
            <div className="hero-bottom">
                <span>ONUR KÜPÜÇ / DIGITAL WORK</span>

                <a href="#projects">
                    KEŞFETMEK İÇİN KAYDIR
                    <span>↓</span>
                </a>
            </div>
        </section>
    )
}

export default Hero
