import "./css/footer.css";

{
  /* <div className="Footer">
  <img className="Footer" alt="Footer" src="./img/Footer.png" />
</div> */
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer_intro">
        <div className="footer_haedal">
          <div className="footer_haedal_logo">
            <img src="img/haedal_logo.png" alt="haedal_logo" />
            <span>HAEDAL</span>
          </div>
          <div className="footer_haedal_desc">
            <span>경북대학교 IT대학 학술동아리</span>
          </div>
        </div>
        <div className="footer_links">
          <img
            src="img/insta.png"
            alt="instagram"
            onClick={() =>
              window.open("https://www.instagram.com/knu.haedal/", "_blank")
            }
          />
          <img
            src="img/notion.png"
            alt="notion"
            onClick={() =>
              window.open(
                "https://encouraging-hawk-156.notion.site/092c37464b6946d7a9290eef1d78b2fa",
                "_blank"
              )
            }
          />
        </div>
      </div>
      <div className="footer_contact">
        <span>Contact</span>
        <ul>
          <li>
            <span>010-8232-0418 (김은정)</span>
          </li>
          <li>
            <span>010-5210-2039 (김아진)</span>
          </li>
        </ul>
      </div>
      <div className="footer_madeBy">
        <span>Made By</span>
        <ul>
          <li>
            <span>김은정 김아진</span>
          </li>
          <li>
            <span>이수현 남동우 조현호 김현주 .feat(React)</span>
          </li>
        </ul>
      </div>
      <div className="footer_copyright">
        <span>Ⓒ KNU_HAEDAL</span>
      </div>
    </div>
  );
}

export default Footer;
