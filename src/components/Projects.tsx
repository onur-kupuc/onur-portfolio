function Projects() {
    return (
        <section id="projects" className="section projects-section">
            <div className="section-topline">
                <span className="section-label">01 / SEÇİLİ ÇALIŞMALAR</span>
                <span className="section-index">PROJECTS / 2026</span>
            </div>

            <div className="projects-heading">
                <div>
                    <h2>
                        Gerçek
                        <br />
                        <span>projeler.</span>
                    </h2>
                </div>

                <p>
                    Fikirleri gerçek kullanıcı deneyimlerine dönüştürmek
                    için geliştirdiğim ve üzerinde çalıştığım projeler.
                </p>
            </div>

            <div className="projects-list">
                <article className="project-card">
                    <div className="project-number">01</div>

                    <div className="project-preview project-preview-muskad">
                        <div className="project-preview-overlay">
                            <span>WEB EXPERIENCE</span>
                            <span>01 / 02</span>
                        </div>

                        <div className="project-preview-placeholder">
                            <span>GALERİ MUSKAD</span>
                            <small>PROJECT PREVIEW</small>
                        </div>
                    </div>

                    <div className="project-info">
                        <div>
                            <span className="project-category">
                                OTOMOTİV / WEB
                            </span>

                            <h3>Galeri Muskad</h3>

                            <p>
                                Otomotiv galerisi için modern, hızlı ve
                                güven odaklı dijital deneyim.
                            </p>
                        </div>

                        <span className="project-status">
                            GELİŞTİRİLİYOR
                        </span>
                    </div>
                </article>

                <article className="project-card">
                    <div className="project-number">02</div>

                    <div className="project-preview project-preview-fidan">
                        <div className="project-preview-overlay">
                            <span>DIGITAL PRESENCE</span>
                            <span>02 / 02</span>
                        </div>

                        <div className="project-preview-placeholder">
                            <span>BAŞBİLEN FİDANCILIK</span>
                            <small>PROJECT PREVIEW</small>
                        </div>
                    </div>

                    <div className="project-info">
                        <div>
                            <span className="project-category">
                                TARIM / WEB
                            </span>

                            <h3>Başbilen Fidancılık</h3>

                            <p>
                                Fidanlık işletmesini dijital dünyada
                                güçlü şekilde konumlandıran web deneyimi.
                            </p>
                        </div>

                        <span className="project-status">
                            GELİŞTİRİLİYOR
                        </span>
                    </div>
                </article>

                <article className="project-card project-card-coming">
                    <div className="project-number">03</div>

                    <div className="project-coming-content">
                        <span>03 / NEXT PROJECT</span>

                        <h3>
                            Yeni bir fikir
                            <br />
                            üzerinde çalışıyorum.
                        </h3>

                        <p>
                            Yeni proje burada yer alacak.
                        </p>
                    </div>

                    <div className="project-coming-mark">
                        +
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects