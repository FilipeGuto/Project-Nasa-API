import React, { useState, useEffect } from "react";

function Saturn() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchApi() {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=saturn`
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
    </>
  );
}

export default Saturn;