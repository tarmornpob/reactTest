import React, { useEffect, useState } from 'react';

function MyAjax() {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);



 useEffect(() => {





		fetch("https://api.taapi.io/stoch?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhcm1vcm5wb2IyQGdtYWlsLmNvbSIsImlhdCI6MTYyMjYwNzM3NSwiZXhwIjo3OTI5ODA3Mzc1fQ.3sgqq-GajkMJD7HzNLPq6RSeq59WF6rUm9kJtII2qwM&exchange=binance&symbol=BTC/USDT&backtracks=20&kPeriod=9&dPeriod=3&kSmooth=3&chart=candles&interval=3m")
		.then(res => res.json())
		.then(
		(result) => {

     // setCount(count + 1);
			setIsLoaded(true);
			setItems(result);
		},
		(error) => {
			setIsLoaded(true);
			setError(error);
		}
		)
 



	}, [])



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    	<div>
   <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <ul>
        {items.map(item => (
          <li key={item.backtrack}>
            {item.valueK} {item.valueD}
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default MyAjax;