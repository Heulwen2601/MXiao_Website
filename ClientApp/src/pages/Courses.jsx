import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./Courses.css";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("beginner");
  const [currentGolden, setCurrentGolden] = useState(0);
  const [currentTeacher, setCurrentTeacher] = useState(0);
  const totalTeachers = 6;

  const nextGolden = () => {
    setCurrentGolden((prev) => (prev + 1) % 3);
  };

  const prevGolden = () => {
    setCurrentGolden((prev) => (prev - 1 + 3) % 3);
  };

  const nextTeacher = () => {
    setCurrentTeacher((prev) => (prev + 1) % totalTeachers);
  };

  const prevTeacher = () => {
    setCurrentTeacher((prev) => (prev - 1 + totalTeachers) % totalTeachers);
  };

  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <section className="breadcrumbs-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Trang chủ</Link>
            <span> &gt; </span>
            <span>Khóa học - Lộ trình</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-content">
            <div className="hero-left">
              <h1 className="courses-hero-title">KHÓA HỌC LUYỆN THI TẠI MXIAO</h1>
              <div className="video-placeholder">
                <span>Video hoặc hình ảnh</span>
              </div>
              <div className="hero-buttons">
                <button className="hero-cta-btn">Xem lịch khai giảng</button>
                <button className="hero-cta-btn">Tư vấn lộ trình học</button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-illustration">
                <div className="illustration-placeholder">Hình minh họa</div>
                <button className="register-float-btn">ĐĂNG KÝ NGAY</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="course-selection-section">
        <div className="container">
          <h2 className="section-title">LỰA CHỌN KHÓA HỌC PHÙ HỢP VỚI BẠN</h2>
          <div className="course-type-buttons">
            <button className="course-type-btn">Học Online</button>
            <button className="course-type-btn">Học Offline</button>
            <button className="course-type-btn">Học Nhóm</button>
            <button className="course-type-btn">Học Cấp Tốc 1:1</button>
            <button className="course-type-btn">Ôn thi</button>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path-section">
        <div className="container">
          <h2 className="section-title">LỘ TRÌNH CHINH PHỤC TIẾNG TRUNG</h2>
          <div className="path-tabs">
            <button 
              className={`path-tab ${activeTab === "beginner" ? "active" : ""}`}
              onClick={() => setActiveTab("beginner")}
            >
              Sơ Cấp (0-HSK3)
            </button>
            <button 
              className={`path-tab ${activeTab === "intermediate" ? "active" : ""}`}
              onClick={() => setActiveTab("intermediate")}
            >
              Trung Cấp
            </button>
            <button 
              className={`path-tab ${activeTab === "advanced" ? "active" : ""}`}
              onClick={() => setActiveTab("advanced")}
            >
              Cao Cấp (HSK4)
            </button>
          </div>

          {activeTab === "beginner" && (
            <div className="path-content beginner-content">
              <div className="path-info">
                <div className="target-audience">
                  <h3>ĐỐI TƯỢNG</h3>
                  <ul>
                    <li>Người bắt đầu từ con số 0</li>
                    <li>Người đã học nhưng mất gốc</li>
                  </ul>
                </div>
                <div className="path-roadmap">
                  <h3>Lộ trình</h3>
                  <p>52 buổi học</p>
                  <p className="price">Học phí: 6.000.000 VND</p>
                </div>
                <div className="path-outcome">
                  <h3>KẾT QUẢ ĐẦU RA</h3>
                  <ul>
                    <li>Cam kết đạt HSK3 - HSKK Sơ cấp</li>
                    <li>Thành thạo 1200 từ vựng và 75 chủ điểm ngữ pháp nền tảng</li>
                    <li>Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết trình độ sơ cấp</li>
                  </ul>
                </div>
              </div>
              <div className="path-illustration">
                <div className="path-illustration-placeholder">Hình minh họa</div>
              </div>
            </div>
          )}

          {activeTab === "intermediate" && (
            <div className="path-content intermediate-content">
              <div className="path-info">
                <div className="target-audience">
                  <h3>ĐỐI TƯỢNG</h3>
                  <ul>
                    <li>Đã hoàn thành HSK3</li>
                    <li>Muốn nâng cao trình độ</li>
                  </ul>
                </div>
                <div className="path-roadmap">
                  <h3>Lộ trình</h3>
                  <p>40 buổi học</p>
                  <p className="price">Học phí: 8.000.000 VND</p>
                </div>
                <div className="path-outcome">
                  <h3>KẾT QUẢ ĐẦU RA</h3>
                  <ul>
                    <li>Cam kết đạt HSK4 - HSKK Trung cấp</li>
                    <li>Thành thạo 2500 từ vựng và ngữ pháp trung cấp</li>
                    <li>Giao tiếp tự tin trong công việc và cuộc sống</li>
                  </ul>
                </div>
              </div>
              <div className="path-illustration">
                <div className="path-illustration-placeholder">Hình minh họa</div>
              </div>
            </div>
          )}

          {activeTab === "advanced" && (
            <div className="path-content advanced-content">
              <div className="path-info">
                <div className="target-audience">
                  <h3>ĐỐI TƯỢNG</h3>
                  <ul>
                    <li>Đã hoàn thành HSK4</li>
                    <li>Muốn đạt trình độ cao cấp</li>
                  </ul>
                </div>
                <div className="path-roadmap">
                  <h3>Lộ trình</h3>
                  <p>65 buổi học</p>
                  <p className="price">Học phí: 12.000.000 VND</p>
                </div>
                <div className="path-outcome">
                  <h3>KẾT QUẢ ĐẦU RA</h3>
                  <ul>
                    <li>Cam kết đạt HSK5 - HSKK Cao cấp</li>
                    <li>Thành thạo 5000+ từ vựng và ngữ pháp cao cấp</li>
                    <li>Sử dụng tiếng Trung thành thạo trong mọi tình huống</li>
                  </ul>
                </div>
              </div>
              <div className="path-illustration">
                <div className="path-illustration-placeholder">Hình minh họa</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Golden Board */}
      <section className="golden-board-section">
        <div className="container">
          <p className="golden-stats">500+ Học viên đã hoàn thành Khóa Sơ cấp (0-HSK3)</p>
          <h2 className="section-title golden-title">BẢNG VÀNG MXIAO</h2>
          <div className="golden-board-wrapper">
            <button className="golden-nav-button golden-prev" onClick={prevGolden}>‹</button>
            <div className="golden-board-card">
              <div className="golden-image-placeholder">Học viên</div>
              <div className="golden-content">
                <h3>Lê Anh Bắc</h3>
                <p>Đạt HSK 10.0</p>
                <p>Đạt giải bốc phét cấp quốc gia</p>
              </div>
            </div>
            <button className="golden-nav-button golden-next" onClick={nextGolden}>›</button>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="teachers-section">
        <div className="container">
          <h2 className="section-title">ĐỘI NGŨ GIÁO VIÊN CHUYÊN MÔN CAO</h2>
          <div className="teachers-carousel">
            <button className="teacher-nav-button teacher-prev" onClick={prevTeacher}>‹</button>
            <div className="teachers-slider">
              {[0, 1, 2].map((offset) => {
                const teacherIndex = (currentTeacher + offset) % totalTeachers;
                const isActive = offset === 1;
                return (
                  <div key={teacherIndex} className={`teacher-slide ${isActive ? "active" : ""}`}>
                    <div className="teacher-card">
                      <div className="teacher-image-placeholder">GV {teacherIndex + 1}</div>
                      <h3>Nguyễn Huy Hoàng {teacherIndex + 1}</h3>
                      <p>Cử nhân học viện ăn bám quốc gia</p>
                      <p>Thạc sĩ tại MXIAO</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="teacher-nav-button teacher-next" onClick={nextTeacher}>›</button>
            <div className="teacher-indicators">
              {Array.from({ length: totalTeachers }, (_, index) => (
                <span 
                  key={index} 
                  className={`teacher-indicator ${index === currentTeacher ? "active" : ""}`}
                  onClick={() => setCurrentTeacher(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Test Section */}
      <section className="free-test-section">
        <div className="container">
          <h2 className="test-title">Kiểm tra trình độ MIỄN PHÍ</h2>
          <div className="test-illustration">
            <div className="test-characters">Hình minh họa</div>
          </div>
          <button className="test-button">Bắt đầu kiểm tra</button>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="container">
          <h2 className="consultation-title">ĐĂNG KÝ NHẬN TƯ VẤN NGAY!</h2>
          <div className="consultation-wrapper">
            <div className="consultation-form">
              <form className="registration-form">
                <div className="form-group">
                  <input type="text" placeholder="Họ và tên" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Số điện thoại" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" className="form-input" />
                </div>
                <div className="form-group">
                  <select className="form-input">
                    <option value="">Chọn khóa học quan tâm</option>
                    <option value="beginner">Khóa Sơ cấp (0-HSK3)</option>
                    <option value="intermediate">Khóa Trung cấp (HSK4)</option>
                    <option value="advanced">Khóa Cao cấp (HSK5)</option>
                  </select>
                </div>
                <button type="submit" className="consultation-submit-button">Đăng ký ngay</button>
              </form>
            </div>
            <div className="consultation-image">
              <div className="consultation-image-placeholder">Hình ảnh tư vấn</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}



