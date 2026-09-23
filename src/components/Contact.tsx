function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="section-topline">
                <span className="section-label">05 / İLETİŞİM</span>

                <span className="contact-status">
                    <span className="status-dot" />
                    YENİ PROJELERE AÇIĞIM
                </span>
            </div>

            <div className="contact-content">
                <div className="contact-heading">
                    <h2>
                        Bir fikrin
                        <br />
                        <span>mi var?</span>
                    </h2>

                    <p>
                        Bir web sitesi, mobil uygulama, dijital ürün
                        veya yeni bir fikir hakkında konuşmak istersen
                        bana ulaşabilirsin.
                    </p>
                </div>

                <div className="contact-actions">
                    <a
                        href="https://wa.me/905398863299"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-button contact-button-primary"
                    >
                        <span>WhatsApp'tan yaz</span>
                        <span>↗</span>
                    </a>

                    <a
                        href="mailto:onur.kupuc.tr@gmail.com"
                        className="contact-button"
                    >
                        <span>E-posta gönder</span>
                        <span>↗</span>
                    </a>
                </div>
            </div>

            <div className="contact-links">
                <a
                    href="https://www.instagram.com/kupuconur/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Instagram</span>
                    <strong>@kupuconur ↗</strong>
                </a>

                <a
                    href="https://github.com/onur-kupuc"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>GitHub</span>
                    <strong>onur-kupuc ↗</strong>
                </a>

                <a href="mailto:onur.kupuc.tr@gmail.com">
                    <span>E-posta</span>
                    <strong>onur.kupuc.tr@gmail.com ↗</strong>
                </a>

                <a
                    href="https://wa.me/905398863299"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>WhatsApp</span>
                    <strong>+90 539 886 32 99 ↗</strong>
                </a>
            </div>
        </section>
    )
}

export default Contact