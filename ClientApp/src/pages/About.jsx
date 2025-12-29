import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image">
          <div className="about-hero-overlay">
            <h1 className="about-hero-title">GIỚI THIỆU VỀ MXIAO CHINESE</h1>
          </div>
        </div>
        <div className="about-intro">
          <div className="container">
            <div className="intro-text">
              <p>
                MXiao Chinese là trung tâm đào tạo tiếng Trung dành riêng cho người trẻ với mục tiêu rõ ràng, 
                phương pháp thực tế và cam kết đồng hành cùng học viên trên hành trình chinh phục tiếng Trung.
              </p>
              <p>
                Với hơn 1000 học viên đã đạt được các cấp độ HSK, cải thiện khả năng giao tiếp và tự tin sử dụng 
                tiếng Trung trong công việc và cuộc sống, MXiao tự hào là đối tác tin cậy của các bạn trẻ Việt Nam.
              </p>
              <p>
                Đội ngũ giáo viên chất lượng, lộ trình học tập được cá nhân hóa, và cam kết 100% đầu ra - đó là 
                những gì MXiao mang lại. Học ngôn ngữ không nên là một hành trình cô đơn, và đó chính là triết lý 
                giáo dục của chúng tôi.
              </p>
            </div>
          </div>
        </div>
        <div className="schedule-sticky">
          <div className="schedule-bar">
            <p>Lịch khai giảng</p>
            <div className="schedule-icons">
              <span>📞</span>
              <span>💬</span>
              <span>💭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">TRIẾT LÝ GIÁO DỤC</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <blockquote className="philosophy-quote">
                "Giáo dục không nên là một hành trình cô đơn"
              </blockquote>
              <div className="philosophy-description">
                <p>
                  Tại MXiao, mỗi học viên không chỉ nhận được kiến thức mà còn có một người đồng hành tận tâm. 
                  Giáo viên theo sát từng bước tiến bộ, sửa chữa những lỗi nhỏ nhất, và đảm bảo không ai phải 
                  đối mặt với khó khăn một mình.
                </p>
                <p>
                  Mọi lớp học, mọi lộ trình, mọi hoạt động đều được thiết kế xoay quanh việc cá nhân hóa, 
                  theo dõi sát sao và chịu trách nhiệm với từng bước đi của học viên. Đó là cách MXiao biến 
                  việc học ngôn ngữ từ một thử thách cô đơn thành một hành trình đầy cảm hứng và hỗ trợ.
                </p>
              </div>
            </div>
            <div className="philosophy-image">
              <div className="philosophy-image-placeholder">Hình ảnh giáo viên</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">GIÁ TRỊ CỐT LÕI</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">1</div>
              <h3>Đồng hành tận tâm</h3>
              <p>
                MXiao theo sát từng học viên, từ việc sửa những lỗi nhỏ nhất đến việc hỗ trợ trong những 
                thời điểm khó khăn.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">2</div>
              <h3>Cá nhân hóa thật sự</h3>
              <p>
                Lộ trình học tập được điều chỉnh theo khả năng, mục tiêu và thời gian biểu của từng người.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">3</div>
              <h3>Cam kết kết quả</h3>
              <p>
                Nếu học viên không đạt được kết quả, MXiao sẽ chịu trách nhiệm và hỗ trợ học lại miễn phí.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">4</div>
              <h3>Học để dùng được</h3>
              <p>
                Kiến thức gần gũi với giao tiếp, chứng chỉ và ứng dụng thực tế trong cuộc sống và công việc.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">5</div>
              <h3>Truyền cảm hứng bền vững</h3>
              <p>
                Lớp học nhỏ, giáo viên gần gũi, tạo môi trường học tập tích cực và thường xuyên.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Model */}
      <section className="training-model-section">
        <div className="container">
          <h2 className="section-title">MÔ HÌNH ĐÀO TẠO DÀNH RIÊNG CHO NGƯỜI TRẺ</h2>
          <div className="training-model-content">
            <div className="training-model-image">
              <div className="training-image-placeholder">Hình ảnh học viên</div>
            </div>
            <div className="training-model-text">
              <p className="training-intro">
                MXiao xây dựng một mô hình đào tạo đơn giản nhưng hiệu quả, giúp người trẻ tiến bộ nhanh 
                mà không bị quá tải, dựa trên 3 nguyên tắc cốt lõi:
              </p>
              <div className="training-principles">
                <div className="principle-item">
                  <div className="principle-number">1</div>
                  <div className="principle-content">
                    <h3>Tối ưu hoá nội dung</h3>
                    <p>
                      Lộ trình học tập dựa trên ngôn ngữ học ứng dụng, tập trung vào kiến thức cốt lõi, 
                      mục tiêu rõ ràng cho từng buổi học và giảm thiểu việc học thuộc lòng.
                    </p>
                  </div>
                </div>
                <div className="principle-item">
                  <div className="principle-number">2</div>
                  <div className="principle-content">
                    <h3>Cá thể hoá trong môi trường nhóm nhỏ</h3>
                    <p>
                      Sĩ số lớp giới hạn 10 học viên để theo dõi sát sao, phản hồi kịp thời, động viên 
                      nhóm và đảm bảo không ai bị bỏ lại phía sau.
                    </p>
                  </div>
                </div>
                <div className="principle-item">
                  <div className="principle-number">3</div>
                  <div className="principle-content">
                    <h3>Ứng dụng ngay trong quá trình học</h3>
                    <p>
                      Từ buổi học thứ 3, học viên đã bắt đầu thực hành giao tiếp tiếng Trung với giáo viên 
                      và bạn học, tích hợp các tình huống thực tế (giao tiếp, thi cử, viết đơn giản) để 
                      ứng dụng ngay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-column">
              <h2 className="mission-title">SỨ MỆNH</h2>
              <p>
                MXiao Chinese có sứ mệnh dẫn dắt người trẻ Việt Nam học tiếng Trung một cách có hệ thống, 
                thực tế và định hướng tương lai rõ ràng. Chúng tôi cam kết mang đến những lộ trình học tập 
                được cá nhân hóa, hiệu quả và có thể đo lường được, giúp học viên ứng dụng tiếng Trung 
                vào cuộc sống, công việc hoặc học thuật.
              </p>
            </div>
            <div className="vision-column">
              <h2 className="vision-title">TẦM NHÌN</h2>
              <p>
                MXiao hướng tới trở thành thương hiệu giáo dục tiếng Trung đáng tin cậy cho người trẻ Việt Nam, 
                hỗ trợ phát triển toàn diện từ kỹ năng ngôn ngữ, tư duy học tập đến định hướng nghề nghiệp. 
                Chúng tôi mong muốn giúp học viên tự tin sử dụng tiếng Trung để mở rộng cơ hội và đạt được 
                những mục tiêu của mình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">ĐỐI TÁC CỦA MXIAO CHINESE</h2>
          <div className="partners-grid">
            {[1, 2, 3].map((partner) => (
              <div key={partner} className="partner-item">
                <div className="partner-image-placeholder">Đối tác {partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

