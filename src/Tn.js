import React, { useState } from 'react';

const App = () => {

	const [input, setInput] = useState({
		myid:''
	});

const handleC = e => {
    const { target } = e;
    const { name } = target;
    const value = name === 'term' ? target.checked : target.value;

    console.log(e.target.value);
	
    setInput({
      ...input,
      [name]: value
    });

  }

  const showData = () => {
  	console.log(input.myid);
  }

return(
	<div>
	<form id="list">
	<input type="text" name="myid" onChange={handleC}/>
        <button type="button" onClick={showData}>Get!</button>
	</form>
	</div>
	);

}

export default App;