
import { useState } from "react";

type ProjectCategory = "ALL" | "WEB" | "MOBILE" | "SAAS";

type Project = {
    number: string;
    title: string;
    category: ProjectCategory;
    type: string;
    description: string;
    technologies: string[];
    status: string;
    image?: string;
};

const projects: Project[] = [
    {
        number: "01",
        title: "Galeri Muskad",
        category: "WEB",
        type: "OTOMOTİV / WEB",
        description:
            "Otomotiv galerisi için modern, hızlı ve güven odaklı dijital deneyim.",
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "GELİŞTİRİLİYOR",
    },

    {
        number: "02",
        title: "Başbilen Fidancılık",
        category: "WEB",
        type: "TARIM / WEB",
        description:
            "Fidanlık işletmesini dijital dünyada güçlü şekilde konumlandıran web deneyimi.",
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "GELİŞTİRİLİYOR",
    },

    {
        number: "03",
        title: "Av Bayii Stok Otomasyonu",
        category: "WEB",
        type: "OTOMASYON / WEB",
        description:
            "Av bayilerinin ürün ve stok süreçlerini yönetmesine yardımcı olan otomasyon sistemi.",
        technologies: ["WEB", "DATABASE"],
        status: "TAMAMLANDI",
    },

    {
        number: "04",
        title: "Çocuk Gelişim Platformu",
        category: "MOBILE",
        type: "MOBILE / GAMIFICATION",
        description:
            "Çocukların sorumluluk ve alışkanlık kazanmasını destekleyen oyunlaştırılmış ebeveyn-çocuk platformu.",
        technologies: ["MOBILE", "QR", "GAMIFICATION"],
        status: "TAMAMLANDI",
    },

    {
        number: "05",
        title: "Dijital Davetiye Platformu",
        category: "SAAS",
        type: "SAAS / WEB",
        description:
            "Etkinlikler için dijital davetiye oluşturma ve yönetme platformu.",
        technologies: ["React", "TypeScript", "SaaS"],
        status: "GELİŞTİRİLİYOR",
    },
];

function Projects() {
    const [activeCategory, setActiveCategory] =
        useState<ProjectCategory>("ALL");

    const [visibleCount, setVisibleCount] = useState(3);

    const filteredProjects =
        activeCategory === "ALL"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const hasMoreProjects =
        visibleCount < filteredProjects.length;

    const handleCategoryChange = (category: ProjectCategory) => {
        setActiveCategory(category);
        setVisibleCount(3);
    };

    const handleLoadMore = () => {
        setVisibleCount((current) => current + 3);
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="section-topline">
                <span className="section-label">
                    01 / SEÇİLİ ÇALIŞMALAR
                </span>

                <span className="section-index">
                    PROJECTS / 2026
                </span>
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
                    için geliştirdiğim web, mobil ve dijital ürünler.
                </p>
            </div>

            <div className="projects-filters">
                {(["ALL", "WEB", "MOBILE", "SAAS"] as ProjectCategory[]).map(
                    (category) => (
                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? "project-filter active"
                                    : "project-filter"
                            }
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    )
                )}
            </div>

            <div className="projects-list">
                {visibleProjects.map((project) => (
                    <article
                        className="project-card"
                        key={project.number}
                    >
                        <div className="project-number">
                            {project.number}
                        </div>

                        <div className="project-preview">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            ) : (
                                <div className="project-preview-placeholder">
                                    <span>{project.title}</span>
                                    <small>PROJECT PREVIEW</small>
                                </div>
                            )}

                            <div className="project-preview-overlay">
                                <span>{project.type}</span>

                                <span>
                                    {project.number} /{" "}
                                    {String(filteredProjects.length).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="project-info">
                            <div>
                                <span className="project-category">
                                    {project.type}
                                </span>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="project-meta">
                                <span className="project-status">
                                    {project.status}
                                </span>

                                <button className="project-link">
                                    VIEW PROJECT
                                    <span>↗</span>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {hasMoreProjects && (
                <div className="projects-load-more">
                    <button
                        className="projects-load-more-button"
                        onClick={handleLoadMore}
                    >
                        <span>DEVAMINI İNCELE</span>

                        <span className="projects-load-more-count">
                            +{filteredProjects.length - visibleCount}
                        </span>

                        <span className="projects-load-more-arrow">
                            ↓
                        </span>
                    </button>
                </div>
            )}
        </section>
    );
}

export default Projects;

