import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Search() {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState('planet earth');

  useEffect(() => {
    fetchApi(searchText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data)
    return (
      <div className="gifDiv">
        <img className="gif" src="./images/GifNasa.gif" alt="NASA" />
      </div>
    );

  async function fetchApi(text) {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${text}`
    );
    const {
      collection: { items },
    } = await response.json();
    setData(items);
  }

  if (!data) return <div />;

  function onChange(event) {
    const value = event.target.value;
    setSearchText(value);
  }

  return (
    <>
      <Header />
      <main>
        <section >
        <form>
          <div
            className="search" >
          <div>
            <label>
              <input
                id="search"
                name="search"
                type="text"
                onChange={onChange}
                placeholder="search in english"
              />
            </label>
          </div>
          <div>
            <button type="button" onClick={() => fetchApi(searchText)}>
              SEARCH
            </button>
          </div>
          </div>
        </form>
          {data.map(( item ) => {
            return (
              <div className="itemsSearch">
            <div key={ Math.random() } className="searchDiv">
              {item.data && <h1>{ item.data[0].title }</h1> }
              {item.links && <img src={ item.links[0].href } alt={ 'foto' } />}
            </div>
              </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Search;
