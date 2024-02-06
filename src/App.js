import React, { useState } from "react";
import PersonalDetailsPage from "./Components/PersonalDetailsPage";
import EducationPage from "./Components/EducationPage";
import HomePage from "./Components/HomePage";
import "./App.css";
import Qualification from "./Components/Qualification";
import Hobbies from "./Components/Hobbies";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "personal-details":
        return <PersonalDetailsPage />;
      case "education":
        return <EducationPage />;
      case "qualification":
        return <Qualification />;
      case "hobbies":
        return <Hobbies />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>Shreyas Profile</h1>
        </header>
        <nav>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("personal-details")}>
            Personal Details
          </button>
          <button onClick={() => setCurrentPage("education")}>Education</button>
          <button onClick={() => setCurrentPage("qualification")}>
           Job Qualification
          </button>
          <button onClick={() => setCurrentPage("hobbies")}>Hobbies</button>
        </nav>

        <main>{renderPage()}</main>
      </div>
    </>
  );
}

export default App;
