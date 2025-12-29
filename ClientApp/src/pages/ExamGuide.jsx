import { useParams, Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./ExamGuide.css";

export default function ExamGuide() {
  const { skill } = useParams();
  
  return (
    <>
      <Header />
      <section className="exam-guide-page">
        <div className="page-container">
          <div className="breadcrumbs">
            <Link to="/">Trang chủ</Link>
            <span> &gt; </span>
            <Link to="/hsk">Luyện thi HSK</Link>
            <span> &gt; </span>
            <span>Hướng dẫn ôn thi HSK - Kỹ năng {skill || "X"}</span>
          </div>
          <h1 className="page-title">Hướng dẫn ôn thi HSK - Kỹ năng {skill || "X"}</h1>
          <p style={{ padding: "2rem", textAlign: "center" }}>Trang này đang được phát triển...</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

