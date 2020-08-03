import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import reqests from "./requests";
function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={reqests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={reqests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={reqests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={reqests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={reqests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={reqests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={reqests.fetchRomanceMovies} />
      {/* <Row title="Documentries" fetchUrl={reqests.fetchDocumentries} /> */}
    </div>
  );
}

export default App;
