import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assents/LogoInfinite.png";
import Vector from "../../assents/Vector.png";
import Avatar from "../../assents/Avatar.png";

import "./style.css";
import {
  BsHouseDoor,
  BsController,
  BsReverseLayoutTextWindowReverse,
  BsMouse2,
  BsDisplay,
  BsFillCartFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Menu from "../SideBar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from '../SideBar'

export const Header = () => {
  const [sideBar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sideBar);

  return (
    <>
      <div className="ContainerNav">
        <nav className="NavInitial">
          <FaBars onClick={showSiderbar} />
          {sideBar && <SideBar active={setSidebar} />}
          <div>
            <img className="logo" src={Logo} alt="Infinite" />
          </div>
          <form className="form-inline">
            <div className="input-group search-box">
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">
                  <img src={Vector} alt="Infinite" />
                </button>
              </span>
              <input
                type="text"
                className="busque"
                placeholder="Busque aqui "
                aria-label="Search for..."
              />
            </div>
          </form>
          <div className="user">
            <img src={Avatar} alt="Avatar" className="avatar" />
            <a href="/login" className="link">
              Faça login <br /> ou cadastre-se{" "}
            </a>
            <a href="/carrinho" className="link2">
              <BsFillCartFill />
            </a>
          </div>
        </nav>
      </div>
      <nav className="navbar">
        <div className="DivFunc">
          <a href="/home" className="links">
            <br />
            <BsHouseDoor />
            Home
          </a>
          <a href="/games" className="links">
            <BsController />
            Games
          </a>
          <a href="/hardware" className="links">
            <BsReverseLayoutTextWindowReverse />
            Hardware
          </a>
          <a href="/perifericos" className="links">
            <BsMouse2 />
            Periféricos
          </a>
          <a href="/pcs" className="links">
            <BsDisplay />
            Pcs
          </a>
        </div>
      </nav>
    </>
  );
};