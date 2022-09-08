/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Navbar from "./Navbar";
import Footer from "./Footer";
import Timeline from "./Timeline";
import Material from "./Material";
import Countdown from "./Countdown";
import Image3 from './img/3.png'
import { BsChevronRight } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home" class=" container one">
        <div class="row" >
          <div class=" text1container">
            <h4 class="title1"> <span class="dot"></span> Webinar 04 November, 10:00 - 14:30 CET</h4>
            <h2 class="text1">
              EXPERT WORKSHOP: AI <br/>
              BASED WORKER<br/> 
              MANAGEMENT AND OSH
            </h2>
          </div>
        </div>
      </div>
      <Countdown></Countdown>
      <div class="container-fluid">
        <div class="row info">
          <div class="col-lg-3 col-md-2 col-1"></div>
          <div class="col-lg-6 col-md-8 col-10">
            <p class="text-info">
              The aim of this workshop is to present, discuss, validate and consolidate the
              main findings of WP1 Tasks 1 and 2 with selected experts on the topic. The
              workshop will also help fine-tune the preparation and implementation of
              work package 2 of this project.
            </p>
          </div>
          <div class="col-lg-3 col-md-2 col-1"></div>
        </div>
      </div>
      <Timeline></Timeline>
      <Material></Material>
      <img class="image3" src={Image3}/>
      <div class="container-fluid">
          <div class="row">
              <div class="col-2"></div>
              <div class="col-8  elenco">
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-title">For information and lorem ipsum dolor sit amet</li>
                <li class="list-group-item item-hover"><a href="#">Lorem ipsum dolor sit amet <BsChevronRight></BsChevronRight></a></li>
                <li class="list-group-item item-hover"><a href="#">Sed ut perspiciatis unde omnis iste <BsChevronRight></BsChevronRight></a></li>
                <li class="list-group-item item-hover"><a href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <BsChevronRight></BsChevronRight></a></li>
                <li class="list-group-item item-hover"><a href="#">Lorem ipsum dolor sit amet, consetetur <BsChevronRight></BsChevronRight></a></li>
                <li class="list-group-item item-hover pdb"><a href="#">Sed ut perspiciatis unde omnis iste natus error sit <BsChevronRight></BsChevronRight></a></li>
            </ul>
              </div>
              <div class="col-2"></div>
          </div>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
