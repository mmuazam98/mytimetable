import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../css/MobileNavigation.css";
const MobileNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    let list = document.querySelectorAll(".list");

    let currPage = location.pathname;
    currPage = parseInt(currPage[1]) || 1;
    list.forEach((e, index) => {
      if (index + 1 === currPage) {
        e.classList.add("active");
      }
    });
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = (e) => {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active";
      };
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="bottom-nav">
      <div className="navigation">
        <ul>
          <li className="list">
            <Link to="/1">
              <span className="icon">1</span>
              <span className="title">Day Order 1</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/2">
              <span className="icon">2</span>
              <span className="title">Day Order 2</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/3">
              <span className="icon">3</span>
              <span className="title">Day Order 3</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/4">
              <span className="icon">4</span>
              <span className="title">Day Order 4</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/5">
              <span className="icon">5</span>
              <span className="title">Day Order 5</span>
            </Link>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
