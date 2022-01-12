import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import '../css/basic.css'


function PictureDay() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=3kWEV8WjbLfMhXstgJXz8Cb5Bv9TwMNn6LFQa8Ne';
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchApi();
  }, [])

  if(!data) return (
    <div>
      <img className="logo" src="./images/nasa.png" alt="NASA" />
    </div>
    );

  return (
    <>
      <Header />
      <main>
        <h2>{ data.title }</h2>
        <h3>{ data.date }</h3>
        <section>
          { data.media_type === 'image' ?
          <img src={ data.url } alt={ data.title } />
          :
          <iframe src={ data.url } title={ data.title }/>
          }
          <p>{ data.explanation }</p>
        </section>
        <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        </p>
      </main>
      <Footer />
    </>
  );
}

export default PictureDay;
