function LogoMark() {
    return (
        <svg
            className="logo-mark"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M30 10C19 10 11 18 11 32C11 46 19 54 30 54"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />

            <path
                d="M30 10V54M30 32L48 13M30 32L48 51"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M43 32H56M50 25L57 32L50 39"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Navbar() {
    return (
        <header className="navbar">
            <a href="#top" className="navbar-logo" aria-label="Onur Küpüç ana sayfa">
                <div className="logo">
                    <LogoMark />
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