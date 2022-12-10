import React, { useState } from "react";

import Link from "next/link";
import dynamic from "next/dynamic";
import useClickOutside from "./../../util/outsideClick";

const ThemeSwitch = dynamic(
  () => import("../../components/elements/ThemeSwitch"),
  {
    ssr: false,
  }
);
function HeaderLanding() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  let domNode = useClickOutside(() => {
    setIsActive({
      status: false,
    });
  });

  return (
    <>
      <div className="header landing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="brand-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="/images/logo.png"
                          alt=""
                          className="logo-primary"
                        />
                        <img
                          src="/images/logow.png"
                          alt=""
                          className="logo-white"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* <div className="search">
                                        <form>
                                            <span><i className="ri-search-line"></i></span>
                                            <input type="text" placeholder="Search Here" />
                                        </form>
                                    </div> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleTrueFalse}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className={
                      isToggled
                        ? "collapse navbar-collapse show"
                        : "collapse navbar-collapse"
                    }
                  >
                    <ul className="navbar-nav" ref={domNode}>
                      {/* <PerfectScrollbar> */}
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(1)}
                      >
                        {/* <a className="nav-link">Home
                                                    </a> */}
                        <Link href="/">
                          <a className="nav-link">Inicio</a>
                        </Link>
                        {/* <div class={
                                                    isActive.key == 1
                                                    ? "dropdown-menu show"
                                                    : "dropdown-menu"
                                                }>
                                                <Link href="/"><a className="dropdown-item">Home 1</a></Link>
                                                <Link href="/index2"><a className="dropdown-item">Home 2</a></Link>
                                            </div> */}
                      </li>
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(2)}
                      >
                        <Link href="/leaderboard">
                          <a className="nav-link">Leaderboard</a>
                        </Link>
                      </li>
                    
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(3)}
                      >
                        <Link href="/ranking">
                          <a className="nav-link">Ranking</a>
                        </Link>
                      </li>
                      {/* </PerfectScrollbar> */}
                    </ul>
                  </div>

                  <div className="signin-btn d-flex align-items-center">
                    <Link href="/signin">
                      <a className="btn btn-primary"> Ingresar </a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderLanding;
