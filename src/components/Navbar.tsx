

function Navbar() {
    return (
        <header className="navbar">
            <a href="#top" className="navbar-logo" aria-label="Onur Küpüç ana sayfa">
                <div className="logo">
                    <img
                        src="/images/logo_min.png"
                        alt=""
                        className="logo-image"
                    />
                    <span>ONUR KÜPÜÇ</span>
                </div>
            </a>

            <nav className="navbar-links" aria-label="Ana navigasyon">
                <a href="#projects">Çalışmalar</a>
                <a href="#about">Hakkımda</a>
                <a href="#contact">İletişim</a>
            </nav>

            <a
                href="https://wa.me/905398863299"
                target="_blank"
                rel="noreferrer"
                className="navbar-cta"
            >
                WhatsApp'tan yaz
                <span>↗</span>
            </a>

            <details className="mobile-menu">
                <summary aria-label="Menüyü aç">MENU</summary>

                <div className="mobile-menu-panel">
                    <a href="#projects">Çalışmalar</a>
                    <a href="#about">Hakkımda</a>
                    <a href="#contact">İletişim</a>

                    <a
                        href="https://wa.me/905398863299"
                        target="_blank"
                        rel="noreferrer"
                        className="mobile-menu-contact"
                    >
                        WhatsApp'tan yaz ↗
                    </a>
                </div>
            </details>
        </header>
    )
}

export default Navbar