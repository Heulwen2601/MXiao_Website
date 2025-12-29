import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo_white.png";
import "./Header.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <div className="header-top-bar"></div>
      <header className="main-header">
        <div className="header-container">
          <Link to="/" className="logo-container">
            <img src={logo} alt="MXIAO CHINESE LEARNING" className="logo-img" />
            <div className="logo-text">
              <span className="logo-main">MXIAO</span>
              <span className="logo-sub">CHINESE LEARNING</span>
            </div>
          </Link>

          <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
            <Link to="/about" className="nav-link">Về MXiao</Link>
            <Link to="/courses" className="nav-link">Khóa học - Lộ trình</Link>
            <Link to="/teachers" className="nav-link">Đội ngũ giáo viên</Link>
            <Link to="/hsk" className="nav-link">Luyện thi HSK</Link>
            <Link to="/test" className="nav-link">Kiểm tra trình độ</Link>
          </nav>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}

