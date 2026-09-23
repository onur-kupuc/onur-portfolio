function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-grid" />
            <div className="hero-noise" />
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-content">
                <div className="hero-eyebrow">
                    <span className="status-dot" />
                    WEB GELİŞTİRME
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
                        <strong>DİJİTAL ÜRÜN</strong>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-visual-header">
                    <span>ONUR KÜPÜÇ</span>
                    <span>2026 / 001</span>
                </div>

                <div className="hero-logo-frame">
                    <div className="hero-logo-corner hero-logo-corner-tl" />
                    <div className="hero-logo-corner hero-logo-corner-br" />

                    <img
                        src="/images/logo.png"
                        alt="Onur Küpüç OK logo"
                        className="hero-logo-image"
                    />

                    <div className="hero-logo-index">
                        <span>IDENTITY</span>
                        <strong>OK / 01</strong>
                    </div>
                </div>

                <div className="hero-project-tag hero-project-tag-top">
                    <span>01</span>
                    <strong>WEB</strong>
                </div>

                <div className="hero-project-tag hero-project-tag-bottom">
                    <span>03</span>
                    <strong>PRODUCT</strong>
                </div>

                <div className="hero-cross hero-cross-one">+</div>
                <div className="hero-cross hero-cross-two">+</div>

                <div className="hero-coordinates">
                    <span>37.8746° N</span>
                    <span>32.4932° E</span>
                </div>
            </div>

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