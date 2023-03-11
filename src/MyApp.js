import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Navbar';
import Feed from './Feed';
import Ppq from './ppq';
import Ajaxs from './Ajaxs';
import To2 from './To2';
import Header from './Header';

function MyApp() {
	 return (
    <BrowserRouter basename={"/sc"}>
  <Header/>


      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/feed" element={<Feed />} />

        <Route path="/ajaxs" element={<Ajaxs />} />

        <Route path="/xb" element={<To2 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default MyApp;