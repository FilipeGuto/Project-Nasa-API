import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Desenvolvedor() {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState('planet earth');

  useEffect(() => {
    fetchApi(searchText);
  }, []);

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
        <form>
          <div>
            <label>
              <input
                id="search"
                name="search"
                type="text"
                onChange={onChange}
              />
            </label>
          </div>
          <div>
            <button type="button" onClick={() => fetchApi(searchText)}>
              SEARCH
            </button>
          </div>
        </form>
        <section className="itemsSearch">
          {data.map(( item ) => {
            console.log( item );
            return (
            <div key={ Math.random() }>
              {item.data && <h1>Titulo:{ item.data[0].title }</h1> }
              {item.links && <img src={ item.links[0].href } alt={ 'foto' } />}
            </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Desenvolvedor;
