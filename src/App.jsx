import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const pageSize = 6;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pageSize={pageSize}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"business"}
                pageSize={pageSize}
                country={"us"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"entertainment"}
                pageSize={pageSize}
                country={"us"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pageSize={pageSize}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"health"}
                pageSize={pageSize}
                country={"us"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"science"}
                pageSize={pageSize}
                country={"us"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"sports"}
                pageSize={pageSize}
                country={"us"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"technology"}
                pageSize={pageSize}
                country={"us"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
