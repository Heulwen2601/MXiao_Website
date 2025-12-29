import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero/Hero";
import "./Home.css";

export default function Home() {
  const [currentTeacher, setCurrentTeacher] = useState(0);
  const [currentGolden, setCurrentGolden] = useState(0);
  const totalTeachers = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeacher((prev) => (prev + 1) % totalTeachers);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTeacher = () => {
    setCurrentTeacher((prev) => (prev + 1) % totalTeachers);
  };

  const prevTeacher = () => {
    setCurrentTeacher((prev) => (prev - 1 + totalTeachers) % totalTeachers);
  };

  const nextGolden = () => {
    setCurrentGolden((prev) => (prev + 1) % 3);
  };

  const prevGolden = () => {
    setCurrentGolden((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <>
      <Header />
      <Hero />

      {/* LỢI ÍCH */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">LỢI ÍCH KHI HỌC TẠI MXIAO CHINESE</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>SĨ SỐ GIỚI HẠN</h3>
              <p>10 HỌC VIÊN/LỚP</p>
            </div>
            <div className="benefit-card">
              <h3>CAM KẾT ĐẦU RA</h3>
              <p>KHÔNG ĐẠT HỌC LẠI MIỄN PHÍ</p>
            </div>
            <div className="benefit-card">
              <h3>HỌC KHẨU NGỮ CÙNG GV TRUNG QUỐC</h3>
              <p>Giáo viên bản ngữ chuyên nghiệp</p>
            </div>
            <div className="benefit-card">
              <h3>ĐÁNH GIÁ CÁ NHÂN CHI TIẾT SAU MỖI CHẶNG HỌC</h3>
              <p>Theo dõi tiến độ học tập cá nhân</p>
            </div>
            <div className="benefit-card">
              <h3>HỌC ONLINE CÓ RECORD BÀI HỌC</h3>
              <p>Xem lại bài học bất cứ lúc nào</p>
            </div>
            <div className="benefit-card">
              <h3>TÀI LIỆU HỌC TẬP MIỄN PHÍ ĐỘC QUYỀN</h3>
              <p>Tài liệu được biên soạn riêng</p>
            </div>
          </div>
        </div>
      </section>

      {/* KHÓA HỌC CHÍNH */}
      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">3 KHÓA HỌC CHÍNH</h2>
          <div className="courses-grid">
            <div className="course-card course-beginner">
              <div className="course-header">
                <span className="course-level">0-HSK3</span>
                <h3>Khóa Sơ cấp</h3>
              </div>
              <div className="course-content">
                <div className="course-detail">52 buổi học</div>
                <div className="course-detail">10-12 học viên</div>
                <div className="course-detail">2-3 buổi/tuần</div>
                <div className="course-detail">HSK3 + HSKK Sơ cấp</div>
              </div>
            </div>
            <div className="course-card course-intermediate">
              <div className="course-header">
                <span className="course-level">HSK4</span>
                <h3>Khóa Trung cấp</h3>
              </div>
              <div className="course-content">
                <div className="course-detail">40 buổi học</div>
                <div className="course-detail">10-12 học viên</div>
                <div className="course-detail">3 buổi/tuần</div>
                <div className="course-detail">HSK4 + HSKK Trung cấp</div>
              </div>
            </div>
            <div className="course-card course-advanced">
              <div className="course-header">
                <span className="course-level">HSK 5</span>
                <h3>Khóa Cao cấp</h3>
              </div>
              <div className="course-content">
                <div className="course-detail">65 buổi học</div>
                <div className="course-detail">10-12 học viên</div>
                <div className="course-detail">2 buổi/tuần</div>
                <div className="course-detail">HSK5 + HSKK Cao cấp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 KHÓA HỌC KỸ NĂNG */}
      <section className="skill-courses-section">
        <div className="container">
          <h2 className="section-title">2 KHÓA HỌC KỸ NĂNG</h2>
          <div className="skill-courses-grid">
            <div className="skill-course-card skill-basic">
              <h3>Khóa Giao tiếp cơ bản</h3>
              <div className="skill-course-details">
                <p>20 buổi học</p>
                <p>Tập trung phản xạ - nghe nói đời thường</p>
                <p>Học qua hội thoại & tình huống thực tế</p>
                <p className="skill-output">Đầu ra: Giao tiếp cơ bản không cần chỉ</p>
              </div>
            </div>
            <div className="skill-course-card skill-hsk">
              <h3>Khóa Ôn thi HSK</h3>
              <div className="skill-course-details">
                <p>Lộ trình linh hoạt theo cấp độ HSK</p>
                <p>Tổng ôn từ vựng, kỹ năng - đề thi</p>
                <p>Dạy mẹo làm bài, kỹ năng xử lý thời gian</p>
                <p className="skill-output">Đầu ra: Đạt điểm mục tiêu HSK theo yêu cầu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BẢNG VÀNG MXIAO */}
      <section className="golden-board-section">
        <div className="container">
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

      {/* GIÁO VIÊN */}
      <section className="teachers-section">
        <div className="container">
          <h2 className="section-title golden-title">GIÁO VIÊN TẠI MXIAO</h2>
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
                      <p>Cử nhân học viện An bám quốc gia</p>
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

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Kiểm tra trình độ MIỄN PHÍ</h2>
          <p className="cta-subtitle">Đánh giá trình độ tiếng Trung của bạn ngay hôm nay</p>
          <button className="cta-button">Bắt đầu kiểm tra</button>
        </div>
      </section>

      {/* ĐĂNG KÝ NHẬN TƯ VẤN */}
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
                    <option value="basic-communication">Khóa Giao tiếp cơ bản</option>
                    <option value="hsk-prep">Khóa Ôn thi HSK</option>
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
