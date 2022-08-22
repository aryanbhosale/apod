import React, { useState, useEffect } from 'react';
import HttpClient from './HttpClient';
import './App.css';

const Contents = () => {
  const [apod, setApod] = useState({});

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, []);

  return (
    <div>
        <p>
          <hr />
                <a href={``}>{"<"}</a> 
                {" | "} 
                <a href="https://apod.nasa.gov/apod/archivepix.html">Archive</a> 
                {" | "} 
                <a href="https://apod.nasa.gov/apod/lib/apsubmit2015.html">Submissions</a> 
                {" | "} 
                <a href="https://apod.nasa.gov/apod/lib/aptree.html">Index</a> 
                {" | "}
                <a href="https://antwrp.gsfc.nasa.gov/cgi-bin/apod/apod_search">Search</a>
                {" | "} 
                <a href="https://apod.nasa.gov/apod/calendar/allyears.html">Calender</a>
                {" | "} 
                <a href="https://apod.nasa.gov/apod.rss">RSS</a>
                {" | "} 
                <a href="https://apod.nasa.gov/apod/lib/edlinks.html">Education</a>
                {" | "} 
                <a href="https://apod.nasa.gov/apod/lib/about_apod.html">About APOD</a>
                {" | "} 
                <a href={`http://asterisk.apod.com/discuss_apod.php?${apod.date}`}>Discuss</a>
                {" | "}
                <a href={``}>{">"}</a>
            <hr />
        </p>
    </div>
  );
}

export default Contents;