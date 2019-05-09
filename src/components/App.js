import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      My sample react app.
      <br /><br />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
      <br />
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
