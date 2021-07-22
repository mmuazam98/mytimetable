import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/MobileNavigation.css";
const MobileNavigation = () => {
  useEffect(() => {
    let list = document.querySelectorAll(".list");
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = (e) => {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active";
      };
    }

    list.forEach((elements) => {
      elements.addEventListener("click", function (event) {
        let bg = document.querySelector("body");
        let color = event.target.getAttribute("data-color");
        console.log(event.target);
        bg.style.backgroundColor = color;
      });
    });
  }, []);
  return (
    <div className="bottom-nav">
      <div className="navigation">
        <ul>
          <li className="list active" data-color="#dc143c">
            <Link to="/1">
              <span className="icon">1</span>
              <span className="title">Day Order 1</span>
            </Link>
          </li>
          <li className="list" data-color="#3c40c6">
            <Link to="/2">
              <span className="icon">2</span>
              <span className="title">Day Order 2</span>
            </Link>
          </li>
          <li className="list" data-color="#05c46b">
            <Link to="/3">
              <span className="icon">3</span>
              <span className="title">Day Order 3</span>
            </Link>
          </li>
          <li className="list" data-color="#0fbcf9">
            <Link to="/4">
              <span className="icon">4</span>
              <span className="title">Day Order 4</span>
            </Link>
          </li>
          <li className="list" data-color="#ffa801">
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
