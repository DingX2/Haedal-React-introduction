import React from "react";
import CardNews from "./CardNews";
import MainPage from "./MainPage";

const Navbar = () => {
  return (
    <div>
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
              Third
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
        <h4 id="scrollspyHeading1">Main Page</h4>
        <MainPage></MainPage>
        <h4 id="scrollspyHeading2">Card News</h4>
        <CardNews></CardNews>
        
      </div>
    </div>
  );
};

export default Navbar;
