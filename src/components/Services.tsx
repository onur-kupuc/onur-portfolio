function Services() {
    return (
        <section className="section services-section">
            <div className="section-topline">
                <span className="section-label">02 / NELER YAPIYORUM?</span>
                <span className="section-index">CAPABILITIES</span>
            </div>

            <div className="services-heading">
                <h2>
                    Dijital
                    <br />
                    <span>şeyler üretiyorum.</span>
                </h2>

                <p>
                    Bir teknolojiyi yalnızca öğrenmek için değil,
                    gerçek bir problemi çözmek için kullanmayı
                    tercih ediyorum.
                </p>
            </div>

            <div className="services-grid">
                <article className="service-item">
                    <span className="service-number">01</span>

                    <div className="service-content">
                        <span className="service-label">BUILD / WEB</span>
                        <h3>Web Geliştirme</h3>

                        <p>
                            İşletmeler, kişisel markalar ve fikirler için
                            modern, hızlı ve responsive web deneyimleri.
                        </p>
                    </div>

                    <span className="service-arrow">↗</span>
                </article>

                <article className="service-item">
                    <span className="service-number">02</span>

                    <div className="service-content">
                        <span className="service-label">BUILD / MOBILE</span>
                        <h3>Mobil Uygulama</h3>

                        <p>
                            Mobil fikirleri çalışan ürünlere dönüştüren
                            uygulama deneyimleri ve prototipler.
                        </p>
                    </div>

                    <span className="service-arrow">↗</span>
                </article>

                <article className="service-item">
                    <span className="service-number">03</span>

                    <div className="service-content">
                        <span className="service-label">EXPLORE / PRODUCT</span>
                        <h3>Dijital Ürünler</h3>

                        <p>
                            Gerçek ihtiyaçları araştırıyor, fikirleri
                            uygulanabilir dijital ürünlere dönüştürüyorum.
                        </p>
                    </div>

                    <span className="service-arrow">↗</span>
                </article>

                <article className="service-item service-item-accent">
                    <span className="service-number">04</span>

                    <div className="service-content">
                        <span className="service-label">MINDSET / PROBLEM</span>
                        <h3>Problem Odaklı</h3>

                        <p>
                            Önce problemi anlamaya, sonra teknolojiyle
                            doğru çözümü oluşturmaya odaklanıyorum.
                        </p>
                    </div>

                    <span className="service-arrow">↗</span>
                </article>
            </div>
        </section>
    )
}

export default Services