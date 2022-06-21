import React, { useState, useEffect } from 'react';


export default function VaultFunc() {
  const [valutes, setValutes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://www.cbr-xml-daily.ru/daily_json.js',
      );

      const json = await res.json()

      setValutes(Object.values(json.Valute));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Список валют</h1>
      <div className="container">{
        valutes.map(valute => {
          console.log(valute)
          return (<div>{valute.Name}: ${valute.Value}</div>)
        })
      }</div>
    </div>
  );
}
