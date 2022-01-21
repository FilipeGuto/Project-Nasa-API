import React, { useState, useEffect } from "react";

function Jupiter() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchApi() {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=jupiter`
    );
    const {
      collection: { items },
    } = await response.json();
    setData(items);
  }

  if (!data)
  return (
    <div className="gifDiv">
      <img className="gif" src="./images/GifNasa.gif" alt="NASA" />
    </div>
  );


  return (
    <>
      <main>
        <section >
          <div
            className="search" >
          </div>
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
    </>
  );
}

export default Jupiter;