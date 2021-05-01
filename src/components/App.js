import React from "react";
import AboutPage from "./AboutPage";
import Homepage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPageFunc";

function App() {
  function getPage() {
    const route = window.location.pathname;
    console.log(route);
    if (route === "/about") return <AboutPage />;
    else if (route === "/courses") return <CoursesPage />;
    else return <Homepage />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}
export default App;
