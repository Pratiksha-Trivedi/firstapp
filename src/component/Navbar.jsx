import React from "react";

const Navbar=()=>{
    return(
        <div>
  <nav className="navbar navbar-inverse" style={{ backgroundColor: '#333', borderColor: '#080808' }}>
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#" style={{ color: '#fff' }}>CrudApplication</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#" style={{ color: '#fff' }}>Home</a></li>
   
      </ul>
    </div>
  </nav>
</div>

    );
}
export default Navbar;