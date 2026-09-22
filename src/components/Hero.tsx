function Hero() {
    return (
        <section className="hero">
            <div className="hero-grid" />

            <div className="hero-glow" />

            <div className="hero-content">
                <div className="hero-eyebrow">
                    <span className="status-dot" />
                    WEB DEVELOPMENT • ONUR KÜPÜÇ
                </div>

                <h1>
                    Fikirleri
                    <br />
                    <span>web'e dönüştürüyorum.</span>
                </h1>

                <p className="hero-description">
                    Markalar ve dijital ürünler için modern, hızlı ve
                    kullanıcı odaklı web deneyimleri geliştiriyorum.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="button button-primary">
                        Çalışmalarımı Gör
                        <span>↗</span>
                    </a>

                    <a href="#contact" className="button button-secondary">
                        Benimle Çalış
                    </a>
                </div>
            </div>

            <div className="hero-signature" aria-hidden="true">
                <svg
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="200"
                        cy="200"
                        r="150"
                        stroke="currentColor"
                        strokeWidth="1"
                    />

                    <path
                        d="M200 50V350"
                        stroke="currentColor"
                        strokeWidth="1"
                    />

                    <path
                        d="M50 200H350"
                        stroke="currentColor"
                        strokeWidth="1"
                    />

                    <path
                        d="M130 200C130 155 158 125 200 125C242 125 270 155 270 200C270 245 242 275 200 275"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />

                    <path
                        d="M200 125V275M200 200L270 135M200 200L270 265"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    <path
                        d="M260 200H325M305 180L325 200L305 220"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="hero-bottom">
                <span>BASED IN TÜRKİYE</span>
                <span>SCROLL TO EXPLORE ↓</span>
            </div>
        </section>
    )
}

export default Hero