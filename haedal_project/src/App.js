import "./css/app.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import CardNews from "./CardNews";
import MainPage from "./MainPage";
import Calender from "./Calender";
import Apply from "./Apply";
import Notice from "./Notice";
import Buttons from "./Buttons";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="App">
      <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
        <a class="navbar-brand" href="#">
          <div className='nav-logo'>
            <span>HAE</span><div className='nav-logo-img-wrap'><img src='img/haedal_logo.png' /></div><span>DAL</span>
          </div>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              MainPage
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              CardNews
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading3">
              Apply
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <h4 id="scrollspyHeading1"> </h4>
        <MainPage />
        <Introduction />
        <Calender />
        <Notice />

        <h4 id="scrollspyHeading2"> </h4>
        <CardNews />
        <Buttons />

        <h4 id="scrollspyHeading3"> </h4>
        <Apply />
        <Footer />
      </div>
    </div>
  );
}

export default App;
