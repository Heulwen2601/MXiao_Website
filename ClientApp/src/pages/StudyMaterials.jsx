import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./StudyMaterials.css";

export default function StudyMaterials() {
  const skills = [
    { id: "doc", name: "Đọc", title: "Luyện thi HSK - Kỹ năng Đọc" },
    { id: "nghe", name: "Nghe", title: "Luyện thi HSK - Kỹ năng Nghe" },
    { id: "viet", name: "Viết", title: "Luyện thi HSK - Kỹ năng Viết" }
  ];

  const hskLevels = ["HSK3", "HSK4", "HSK5", "HSK6", "HSK7-9"];
  const hskkLevels = [
    { id: "so-cap", name: "HSKK Sơ cấp" },
    { id: "trung-cap", name: "HSKK Trung cấp" },
    { id: "cao-cap", name: "HSKK Cao cấp" }
  ];

  const featuredArticles = [
    { id: 1, title: "Tiêu đề", content: "Nội dung" },
    { id: 2, title: "Tiêu đề", content: "Nội dung" },
    { id: 3, title: "Tiêu đề", content: "Nội dung" }
  ];

  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <section className="breadcrumbs-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Trang chủ</Link>
            <span> &gt; </span>
            <span>Luyện thi HSK</span>
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="hsk-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title">LUYỆN THI HSK</h1>
            <p className="banner-subtitle">Chinh phục kỳ thi HSK với tài liệu và phương pháp hiệu quả</p>
          </div>
        </div>
        <div className="banner-image-placeholder">
          <span>Hình ảnh nhóm học viên</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="hsk-content-section">
        <div className="container">
          <div className="content-layout">
            {/* Left Column */}
            <main className="main-content">
              {/* General HSK Materials */}
              <div className="hsk-section">
                <div className="section-image">
                  <div className="section-image-placeholder">Hình ảnh</div>
                </div>
                <div className="section-content">
                  <h2 className="section-heading">Luyện thi HSK</h2>
                  <div className="materials-section">
                    <h3 className="materials-title">Tài liệu luyện thi HSK</h3>
                    <div className="material-buttons">
                      <Link to="/hsk/tai-lieu-a" className="material-btn">Tài liệu A</Link>
                      <Link to="/hsk/tai-lieu-b" className="material-btn">Tài liệu B</Link>
                      <Link to="/hsk/tai-lieu-c" className="material-btn">Tài liệu C</Link>
                    </div>
                    <Link to="/hsk/tai-lieu" className="view-more-link">&gt;&gt;&gt; Xem thêm</Link>
                  </div>
                </div>
              </div>

              {/* Skill Sections */}
              {skills.map((skill, index) => (
                <div key={skill.id} className={`hsk-section ${index > 0 ? "with-divider" : ""}`}>
                  <div className="section-image">
                    <div className="section-image-placeholder">Hình ảnh</div>
                  </div>
                  <div className="section-content">
                    <h2 className="section-heading">{skill.title}</h2>
                    <div className="hsk-level-buttons">
                      {hskLevels.map((level) => (
                        <Link
                          key={level}
                          to={`/hsk/${skill.id}/${level.toLowerCase()}`}
                          className="hsk-level-btn"
                        >
                          {level}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* HSKK Section */}
              <div className="hsk-section with-divider">
                <div className="section-image">
                  <div className="section-image-placeholder">Hình ảnh</div>
                </div>
                <div className="section-content">
                  <h2 className="section-heading">Luyện thi HSKK</h2>
                  <div className="hskk-level-buttons">
                    {hskkLevels.map((level) => (
                      <Link
                        key={level.id}
                        to={`/hsk/hskk/${level.id}`}
                        className="hskk-level-btn"
                      >
                        {level.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            {/* Right Sidebar */}
            <aside className="sidebar">
              {/* Registration */}
              <div className="sidebar-registration">
                <div className="registration-image">
                  <div className="registration-image-placeholder">Hình ảnh</div>
                </div>
                <button className="register-btn">Đăng ký ngay</button>
              </div>

              {/* Featured Articles */}
              <div className="featured-articles">
                <h2 className="sidebar-title">Bài viết nổi bật</h2>
                <div className="articles-list">
                  {featuredArticles.map((article) => (
                    <article key={article.id} className="article-item">
                      <div className="article-image">
                        <div className="article-image-placeholder">Hình ảnh</div>
                      </div>
                      <div className="article-content">
                        <h3 className="article-title">{article.title}</h3>
                        <p className="article-text">{article.content}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
