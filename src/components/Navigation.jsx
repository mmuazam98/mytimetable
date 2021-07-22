import React, { useEffect } from "react";
import "../css/Navigation.css";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

const Navigation = () => {
  const location = useLocation();
  useEffect(() => {
    const setActivePage = () => {
      let tabsNewAnim = $("#navbarSupportedContent");
      // let selectorNewAnim = $("#navbarSupportedContent").find("li").length;
      const links = document.querySelectorAll(".nav-item");
      let currPage = location.pathname;
      currPage = parseInt(currPage[1]) || 1;
      links.forEach((e, index) => {
        if (index + 1 === currPage) {
          e.classList.add("active");
        }
      });
      let activeItemNewAnim = tabsNewAnim.find(".active");
      let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      let itemPosNewAnimTop = activeItemNewAnim.position();
      let itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
      $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        let activeWidthNewAnimHeight = $(this).innerHeight();
        let activeWidthNewAnimWidth = $(this).innerWidth();
        let itemPosNewAnimTop = $(this).position();
        let itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
        });
      });
    };
    $(document).ready(function () {
      setTimeout(function () {
        setActivePage();
      }, 0);
    });
    $(window).on("resize", function () {
      setTimeout(function () {
        setActivePage();
      }, 500);
    });
    $(".navbar-toggler").click(function () {
      setTimeout(function () {
        setActivePage();
      });
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="top-nav">
        <nav className="navbar navbar-expand-custom navbar-mainbg fixed-top">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/1">
                  Day Order 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/2">
                  Day Order 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/3">
                  Day Order 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/4">
                  Day Order 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/5">
                  Day Order 5
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
