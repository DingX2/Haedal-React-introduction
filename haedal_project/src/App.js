import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import CardNews from "./CardNews";
import MainPage from "./MainPage";
import Calender from "./Calender";
import Apply from './Apply';
import Notice from './Notice';
import Buttons from "./Buttons";
import Introduction from './Introduction';

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <div className="App">
      <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
        <a class="navbar-brand" href="#">
          HAEDAL
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
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading4">
              Fourth
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading5">
              Fifth
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
        <Buttons/>

        <h4 id="scrollspyHeading3"> </h4>
        <Apply />
        <Footer />
      </div>
    </div>
  );
}

export default App;
