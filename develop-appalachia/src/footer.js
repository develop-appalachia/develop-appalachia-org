import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Develop Appalachia</h5>
            <p>Columbus, Ohio</p>
          </MDBCol>
            <MDBCol md="2">
              <a href="#!">Privacy</a>
            </MDBCol>
            <MDBCol md="2">
              <a href="#!">Terms & Conditions</a>
            </MDBCol>
            <MDBCol md="2">
              <a href="#!">Contact Us</a>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <p>Develop Appalachia</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
