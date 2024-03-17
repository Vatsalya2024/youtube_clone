import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <Header />
                <div className="app__page">
                  <Sidebar />
                  <SearchPage/>
                </div>
              </>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </>
  );
}

export default App;
