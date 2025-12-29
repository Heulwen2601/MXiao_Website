import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Liên hệ</h3>
          <ul className="footer-list">
            <li>Website: www.mxiao.edu.vn</li>
            <li>Email: hello@mxiao.edu.vn</li>
            <li>Hotline: 0869.XXX.XXX</li>
            <li>Thời gian làm việc: 9h - 21h, T2 - CN</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Hợp tác truyền thông / báo chí / đối tác</h3>
          <ul className="footer-list">
            <li>Gửi email về: marketing.mxiaochinese@gmail.com</li>
            <li>Hoặc liên hệ Oxxx (Mr. Hữu Khoát)</li>
            <li className="footer-note">- Trường thông tin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

