import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useEffect, useState } from 'react';

const App =() => {

	const [hasError, setError] = useState(false);
	const [hasData, setData] = useState({});
	const [isLoaded, setLoaded] = useState(false);

		
		async function fetchData() {
			//var url = "https://api.taapi.io/stoch?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhcm1vcm5wb2IyQGdtYWlsLmNvbSIsImlhdCI6MTYyMjYwNzM3NSwiZXhwIjo3OTI5ODA3Mzc1fQ.3sgqq-GajkMJD7HzNLPq6RSeq59WF6rUm9kJtII2qwM&exchange=binance&symbol=BTC/USDT&backtracks=20&kPeriod=9&dPeriod=3&kSmooth=3&chart=candles&interval=3m";
			
			var url = "https://randomuser.me/api"; 
			
			const res = await fetch(url);
			res
			.json()
			.then(res => {
				setData(res)
				setLoaded(true);
			})
			.catch(err => setError(err));
		}
	
	/*useEffect(() => {
		fetchData();
	},[]);
*/

if(hasError) {
	return (
		<span>
		Wait Cick Button ..
		</span>
		);
} 

else if (!isLoaded) {

	return (
		<span>
	
		<button className="btn btn-warning" onClick={fetchData}>Call Api</button>
		<hr/>
		Wait Cick Button ..
		</span>
		);


}
 else {
 	return (


		<div>
		<button className="btn btn-outline-primary" onClick={fetchData}>Call Api</button>
		<hr/>
		<span>{JSON.stringify(hasData)}</span>
		</div>
		
 		
 		);
 }


	/*

	if(hasError) {
		return (<p>No data avaliable.</p>);
	} else {

	return (
	<div>
	  {hasData.map(hasData => (
	         <p>
	            {hasData.valueK} {hasData.valueD}
	          </p>
	        ))}
	</div>
	);

	}

	*/

}

export default App;