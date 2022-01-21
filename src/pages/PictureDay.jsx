import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../css/basic.css";

function PictureDay() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=3kWEV8WjbLfMhXstgJXz8Cb5Bv9TwMNn6LFQa8Ne";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchApi();
  }, []);

  if (!data)
    return (
      <div className="gifDiv">
        <img className="gif" src="./images/GifNasa.gif" alt="NASA" />
      </div>
    );

  return (
    <div className="page2">
      <Header />
      <div className="title"></div>
      <div className="media">
        {data.media_type === "image" ? (
          <img src={data.url} alt={data.title} className="imgDay" />
        ) : (
          <iframe src={data.url} title={data.title} className="imgDay" />
        )}
      </div>
      <div className="description">
        <h1 className="titleDay">{data.title}</h1>
        <h2 className="dateDay">{data.date}</h2>
        <p>{data.explanation}</p>
      </div>
      <Footer />
    </div>
  );
}

export default PictureDay;
