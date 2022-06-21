import React, { useState, useCallback, useMemo } from 'react';

function fibonacci(num) {
  if (Number.isNaN(num) || num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function VaultFunc() {
  const [count, setCount] = useState(0);

  const increment = (i = 1) => setCount(count + i)
  const decrement = (i = 1) => setCount(count - i)

  const incrementCb = useCallback((i) => () => increment(i), [count])
  const decrementCb = useCallback((i) => () => decrement(i), [count])

  const incrementAttr = (e) => increment(+e.target.getAttribute('data-i'))
  const decrementAttr = (e) => decrement(+e.target.getAttribute('data-i'))

  const fib = useMemo(() => {
    console.log("calculating Fibonacci", count);
    return fibonacci(count);
  }, [count]);

  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {count}.</h2>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => decrement(2)}>-2</button>
      <button onClick={incrementCb(3)}>+3</button>
      <button onClick={decrementCb(3)}>-3</button>
      <button data-i="4" onClick={incrementAttr}>+4</button>
      <button data-i="4" onClick={decrementAttr}>-4</button>

      <h1>Фибоначчи!</h1>
      <h2>Сейчас {fib} - {fib} - {fib} - {fib} - {fib} - {fib} - {fib} - {fib}.</h2>
    </div>
  );
}
