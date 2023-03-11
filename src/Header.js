import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faHeart);


function NavbarLoad() {

return(
	<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Maidkit  <FontAwesomeIcon icon={['fas','heart']}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href=".">หน้าแรก</a>
        </li>
        {/*<li class="nav-item">
          <a class="nav-link" href="feed">ค้นหาแม่บ้าน</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
       
        </li>*/}
        <li class="nav-item">
            <Link to="/feed" className="nav-link">Feed</Link>
        </li>
       
      </ul>
        {/*    <a class="nav-link" href="feed">
        <button class="btn btn-success" type="button">ลงทะเบียน</button>
        </a>*/}
     
    </div>
  </div>
</nav>
	);
}

export default NavbarLoad;