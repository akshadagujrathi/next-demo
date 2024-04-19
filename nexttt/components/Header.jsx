import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import mainlogo from '../images/mainlogo.png'
const Header = () => {
    return (

<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className='container'>
  <a className="navbar-brand" href="#"><Image src={mainlogo} className="img-fluid" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav col-8 justify-content-lg-center">
       <li className="nav-item active">
         <Link className="nav-link" href="/">Home</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link" href="/about">About</Link>
      </li>
       <li className="nav-item">
         <Link className="nav-link" href="/discover">Discover</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" href="/contact">Contact</Link>
       </li>
     </ul>
     <ul className="navbar-nav col-3 d-flex gap-3 justify-content-lg-end">
      <Link  href="#">Login</Link>
      <button >Sign Up</button>
     </ul>
  </div>
  </div>
  
</nav>

</div>

    );
}

export default Header;
