function About() {
    return (
        <section id="about" className="section about-section">
            <div className="section-topline">
                <span className="section-label">04 / HAKKIMDA</span>
                <span className="section-index">ABOUT / ONUR</span>
            </div>

            <div className="about-heading">
                <h2>
                    Koddan
                    <br />
                    <span>daha fazlası.</span>
                </h2>

                <p>
                    Yazılımı yalnızca kod yazmak olarak değil,
                    fikirleri hayata geçirmenin ve problemleri
                    çözmenin bir aracı olarak görüyorum.
                </p>
            </div>

            <div className="about-grid">
                <div className="about-main">
                    <p className="about-large">
                        4. sınıf Bilgisayar Mühendisliği öğrencisiyim.
                        Web ve mobil uygulamalar geliştiriyor,
                        öğrendiklerimi gerçek projeler üzerinde
                        deneyimliyorum.
                    </p>

                    <p>
                        Bir teknolojiyi ne kadar iyi kullandığımdan
                        önce, doğru problemi bulmanın ve doğru çözümü
                        tasarlamanın önemli olduğuna inanıyorum.
                    </p>

                    <p>
                        Bu nedenle sadece yeni teknolojiler öğrenmek
                        yerine fikirleri araştırıyor, projeler geliştiriyor
                        ve üretirken öğrenmeye devam ediyorum.
                    </p>
                </div>

                <aside className="about-side">
                    <div className="about-detail">
                        <span>ODAK</span>
                        <strong>Web · Mobil · Dijital Ürün</strong>
                    </div>

                    <div className="about-detail">
                        <span>ŞU AN</span>
                        <strong>Öğreniyor · Üretiyor · Geliştiriyor</strong>
                    </div>

                    <div className="about-detail">
                        <span>ROL</span>
                        <strong>Computer Engineering Student</strong>
                    </div>

                    <div className="about-detail">
                        <span>KONUM</span>
                        <strong>Türkiye</strong>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default About