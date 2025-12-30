import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./Teachers.css";

export default function Teachers() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Mock data - 15 teachers per page
  const teachers = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: "Nguyễn Huy Hoàng",
    degree: "Cử nhân học viện ăn bám quốc gia",
    master: "Thạc sĩ tại MXIAO",
    hskLevel: "HSK6"
  }));

  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <section className="breadcrumbs-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Trang chủ</Link>
            <span> &gt; </span>
            <span>Đội ngũ giáo viên</span>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="teachers-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title">ĐỘI NGŨ GIÁO VIÊN MXIAO</h1>
            <p className="banner-subtitle">Những người đồng hành tận tâm trên hành trình chinh phục tiếng Trung của bạn</p>
          </div>
        </div>
        <div className="banner-image-placeholder">
          <span>Hình ảnh nhóm giáo viên</span>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="teachers-grid-section">
        <div className="container">
          <div className="teachers-grid">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <div className="teacher-badge">{teacher.hskLevel}</div>
                <div className="teacher-image-placeholder">
                  <span>Hình ảnh giáo viên</span>
                </div>
                <div className="teacher-info">
                  <h3 className="teacher-name">{teacher.name}</h3>
                  <p className="teacher-degree">{teacher.degree}</p>
                  <p className="teacher-master">{teacher.master}</p>
                </div>
                <button className="teacher-view-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-button ${page === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            {totalPages > 3 && (
              <>
                <span className="pagination-ellipsis">...</span>
                <button className="pagination-button">{totalPages}</button>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}



