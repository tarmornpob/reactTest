import React from 'react';


function BooksList () {

    
   const [books, updateBooks] = React.useState([]);
 
  async function fetchBooks() {
           const response = await fetch('https://randomuser.me/api');
           const json = await response.json();


           updateBooks([
            ...books,
            {
                name: json.results[0]["name"]["first"],
                gender: json.results[0]["gender"]
            }]);
           
       }

   React.useEffect(function effectFunction() {

            const interval = setInterval(() => {

                    fetchBooks();


                },5000);





            return () => clearInterval(interval);
   }, []);



   if(books) {

  console.log(books);
   return (

    <div className="container contain-t">
        <div className="row" id="blocker">
<button onClick={fetchBooks}>GEET!</button>
   <ul>
       {books.map((book,i) => (
        <li key={i}>{book.gender}</li>  
       ))};
   </ul>

   </div>
   </div>
   );

}
}

export default BooksList;