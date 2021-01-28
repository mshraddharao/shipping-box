import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
} from "mdbreact";

function NavBar(props) {
  return (
    <MDBNavbar color="orange" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Shipping Box</strong>
      </MDBNavbarBrand>
      <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink
              className="waves-effect waves-light"
              to={props.navLink.path}
            >
              {props.navLink.Lable}
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default NavBar;



// import React from 'react';
// import {
//  MDBNavbar,
//  MDBNavbarBrand,
//  MDBNavbarNav,
//  MDBNavItem,
//  MDBNavLink,
//  MDBCollapse,
// } from "mdbreact";
// function navbar() {
// return (
//   <div>
//      <MDBNavbar color="orange" dark expand="md">
//        <MDBNavbarBrand>
//          <strong className="white-text">Shipping Box</strong>
//        </MDBNavbarBrand>
//        <MDBCollapse id="navbarCollapse3" navbar>
//          <MDBNavbarNav right>
//            <MDBNavItem>
//              {/* <MDBNavLink
//                className="waves-effect waves-light"
//                to={props.navLink.path}
//              >
//                {props.navLink.Lable}
//              </MDBNavLink> */}
//            </MDBNavItem>
//          </MDBNavbarNav>
//        </MDBCollapse>
//      </MDBNavbar>
//      </div>
//    );
// }

// export default navbar;