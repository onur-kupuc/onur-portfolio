function Logo() {
    return (
        <div className="logo">
            <svg
                className="logo-mark"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="OK logo"
            >
                {/* O */}
                <path
                    d="M30 10C19 10 11 18 11 32C11 46 19 54 30 54"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                {/* K */}
                <path
                    d="M30 10V54M30 32L48 13M30 32L48 51"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Forward arrow */}
                <path
                    d="M43 32H56M50 25L57 32L50 39"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <span>ONUR KÜPÜÇ</span>
        </div>
    )
}

function Navbar() {
    return (
        <header className="navbar">
            <a href="/" className="navbar-logo">
                <Logo />
            </a>

            <nav className="navbar-links">
                <a href="#projects">Çalışmalar</a>
                <a href="#about">Hakkımda</a>
                <a href="#contact">İletişim</a>
            </nav>

            <a href="#contact" className="navbar-cta">
                Birlikte çalışalım
                <span>↗</span>
            </a>
        </header>
    )
}

export default Navbar