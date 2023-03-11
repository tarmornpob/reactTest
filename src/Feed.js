import React, { useEffect, useState } from 'react';
import './css/t.css';

const FetchFeed = () => {

		
		var userStore = [];
		var userStore2 = [];



		const [hasError, setError] = useState(false);
		const [hasData, setData] = useState({});
		const [isLoaded, setLoaded] = useState(false);
		//const [count, setCount] = useState(userStore);

		const [count2, setCount2] = useState([]);

let {name,gender} = count2

		//console.log(dataHere);
		async function fetchData() {
			//var url = "https://api.taapi.io/stoch?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhcm1vcm5wb2IyQGdtYWlsLmNvbSIsImlhdCI6MTYyMjYwNzM3NSwiZXhwIjo3OTI5ODA3Mzc1fQ.3sgqq-GajkMJD7HzNLPq6RSeq59WF6rUm9kJtII2qwM&exchange=binance&symbol=BTC/USDT&backtracks=20&kPeriod=9&dPeriod=3&kSmooth=3&chart=candles&interval=3m";
			
			var url = "https://randomuser.me/api"; 
			
			const res = await fetch(url);
			res
			.json()
			.then(res => {

				setData(res);

				setLoaded(true);

			  	
/*
					
var data = count2.filter(item => item.gender === 'male');

const id = count2.findIndex((item)=>{
return item.gender == 'male'
})


if(id !== -1) {
	console.log("000");
console.log(id);
} else {

	console.log(id);
		setCount2([
			            ...count2,
			            {
			                name: res.results[0]["name"]["first"],
			                gender: res.results[0]["gender"]
			            }]);

} */

	setCount2([
			            ...count2,
			            {
			                name: res.results[0]["name"]["first"],
			                gender: res.results[0]["gender"]
			            }]);

/*
if(data.length > 0) {
		console.log("000");

console.log(data);
var data = "";
}
else {

	console.log("111");



}
*/



							

			})
			.catch(err => setError(err));
		}

		



			useEffect(() => {

				


			const interval = setInterval(() => {

			fetchData();



				},3000);





			return () => clearInterval(interval);

					

				},[count2]);


	async function appendT() {

		/*

		if(hasData) {

		await console.log(" NOW VALUE " + isOO);
		await console.log("L : " + JSON.stringify(hasData));

		await userStore2.push('<div id="display-data"><pre>' + hasData.results[0]["name"]["first"] + '</pre></div>');

					await setCount2(count2 + userStore2[userStore2.length-1]);
					//await console.log(userStore2[userStore2.length-1]);

					await console.log("C 2 "+ count2);

		//var temp = (<div>55</div>);


		 await setOO(isOO + 1);
		
		 await userStore.push(<div>{hasData.results[0]["name"]["first"]} | </div>);

		//		await console.log("L : " + JSON.stringify(hasData));


	//	await console.log("L : " + userStore);
		
					await setCount(count + userStore[userStore.length-1].props.children);

		} */


	}





if(hasError) {
	return (
		<p>Connection failed..</p>
		);
} else if(!isLoaded) {


	return (
		<p>Loading..</p>
		);
} else {



/*
	
let div = document.createElement("div");
let p = document.createElement("b");
console.log(p.innerHTML);
div.append("555",p);

if(document.getElementById('blocker')) {

document.getElementById('blocker').append(div);

}*/
	


			//console.log(hasData.results.length);
	
	/*
	<div dangerouslySetInnerHTML={{__html: count2}}>
</div>
*/


return(<div>
	<input type="button" value="Get Data" className="btn btn-success" onClick={fetchData}/>
	<input type="button" value="Add Data" className="btn btn-primary" onClick={appendT}/>
	<hr/>
	{JSON.stringify(hasData)} 
	<hr/> 
	<div>
	

<hr/>
 <ul>
  {count2.map((item,i) => (
          <li key={i}>
            {item.name} • {item.gender}
          </li>
        ))}
    </ul>

	</div>
	</div>);
}
}

const App = () => {

	return (

		<div className="container contain-t">
		<div className="row" id="blocker"><FetchFeed/></div>
		</div>

		);

}

export default App;