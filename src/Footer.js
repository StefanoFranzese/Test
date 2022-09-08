/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter, FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const Navbar = () => {
 
    return (
        <div class="container-fluid footerbg ">
        <div class="row justify-content-center mx-auto">
            <div class="col-12 px-xs-0 col-md-11">
                <div class="card">
                    <div class="row">
                    
                        <div class=" col-sm-12 col-md-12 col-lg-7 col-xl-7  d-flex justify-content-center mb-3">
                            
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Site map</h6></a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Contact us</h6></a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Accessibility</h6></a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Protection</h6> </a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Privacy notice</h6> </a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Cookies  </h6></a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">Legal notice </h6> </a> </div>
                            <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#"><h6 class="footer-link">RSS  </h6></a> </div>
                        </div>
                        
                        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 justify-content-center d-flex"> <a href="#">
                                <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                
                                </div>
                            </a> <a href="#">
                                <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <FaFacebook className="iconf" />
                                </div>
                            </a> <a href="#">
                                <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <FaTwitter className="iconf" />,
                                </div>
                            </a> <a href="#">
                                <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                    <FaLinkedinIn className="iconf"/>
                                </div>
                            </a> <a href="#">
                                <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <FaYoutube className="iconf"/>
                                </div>
                            </a> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default Navbar;
  