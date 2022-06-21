import React, { useState, useEffect } from 'react';


export default function ClockFunc() {
  const [now, setNow] = useState({ date: new Date() });

  const tick = () => setNow({ date: new Date() });

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {now.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
