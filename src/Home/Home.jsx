// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Home, LearnSyntax, LearnVideos, LearnAI, PuzzlesGames, Compiler } from "./pages";

// import { Divider, Slider } from "antd";
// import Layout, { Content, Footer, Header as AntHeader } from "antd/es/layout/layout";
// import Sider from "antd/es/layout/Sider";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";
import "./Home.css";
// import { Home, LearnSyntax, LearnVideos, LearnAI, PuzzlesGames, Compiler } from "./pages";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Sidebar />
      <div className="videos">
        <div className="sample-videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kUMe1FH4CHE?si=rAFVTbBT-2QPW-D-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
            Html Course
          </iframe>
          <h3>HTML course for Begginers</h3>
          <p>
            Learn HTML in this complete course for beginners. This is an
            all-in-one beginner tutorial to help you learn web development
            skills. This course teaches HTML5.
          </p>
          <button className="videos-btn">Start Watching</button>
        </div>
        <div className="sample-videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OXGznpKZ_sA?si=Wsitas0cqvapcx3g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
            css course
          </iframe>
          <h3>CSS course for Begginers</h3>
          <p>
            Learn CSS in this complete course for beginners. This is an
            all-in-one beginner tutorial to help you learn web development
            skills. This course teaches CSS3.
          </p>
          <button className="videos-btn">Start Watching</button>
        </div>
        <div className="sample-videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PkZNo7MFNFg?si=xAfH0qwIksJEad-a"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h3>JavaScript course for Begginers</h3>
          <p>
            Learn JavaScript in this complete course for beginners. This is an
            all-in-one beginner tutorial to help you learn web development
            skills. This course teaches JavaScript ES6.
          </p>
          <button className="videos-btn">Start Watching</button>
        </div>
        <div className="sample-videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x4rFhThSX04?si=VB85PpokJ0mgATCi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h3>React course for Begginers</h3>
          <p>
            Learn JavaScript in this complete course for beginners. This is an
            all-in-one beginner tutorial to help you learn web development
            skills. This course teaches JavaScript ES6.
          </p>
          <button className="videos-btn">Start Watching</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
