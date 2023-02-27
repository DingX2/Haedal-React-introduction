import "./css/notice.css";

export default function Notice() {
  return (
    <div className="notice">
      <div className="notice_title">
        <img src="img/bell.png" alt="bell" />
        <span>공지사항</span>
      </div>
      <div className="notice_text">
        <span>해달에 많은 관심 부탁드립니다.</span>
        <br />
        <span>그리고 해달은 귀엽습니다.</span>
      </div>
    </div>
  );
}
