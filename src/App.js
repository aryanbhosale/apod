import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import HttpClient from './HttpClient';
import Contents from './Contents';
import Footer from './Footer';

function App() {

  const [apod, setApod] = useState({});

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, []);

  return (
    <div className="App">
      <Header />
      {apod && (
        <article>
          <header>
            <p>{apod.date}</p>
          </header>
          <a href={apod.hdurl}><img src={apod.url} alt={apod.title} /></a>
          <br />
          <p><b>{apod.title}</b></p>
          <p><b>Image Credit & <a href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply">Copyright</a>: </b><a href={`https://www.flickr.com/people/140032790@N06/`}>{apod.copyright}</a></p>
          <p><b>Explanation:</b> {apod.explanation}</p>
          <p><b>Tomorrow's picture: </b><a href={``}>gaze into the cat's eye</a></p>
        </article>
      )}
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
