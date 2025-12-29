import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./StudyMaterials.css";

export default function StudyMaterials() {
  return (
    <>
      <Header />
      <section className="study-materials-page">
        <div className="page-container">
          <div className="breadcrumbs">
            <Link to="/">Trang chủ</Link>
            <span> &gt; </span>
            <Link to="/hsk">Luyện thi HSK</Link>
            <span> &gt; </span>
            <span>Tài liệu ôn thi</span>
          </div>
          <h1 className="page-title">Tài liệu ôn thi</h1>
          <p style={{ padding: "2rem", textAlign: "center" }}>Trang này đang được phát triển...</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

