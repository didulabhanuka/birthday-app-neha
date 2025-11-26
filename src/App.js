import React from "react";
import "./App.css";
import HorizontalBook from "./components/HorizontalBook";

import Page1Intro from "./pages/Page1Intro";
import Page2Wish from "./pages/Page2Wish";
import Page3WishesWall from "./pages/Page3WishesWall";
import Page4Puzzle from "./pages/Page4Puzzle";
import Page5Doodle from "./pages/Page5Doodle";


export default function App() {
  return (
    <>
      <HorizontalBook>
        <Page1Intro />
        <Page2Wish />
        <Page3WishesWall />
        <Page4Puzzle />
        <Page5Doodle />
      </HorizontalBook>
    </>
  );
}
