/* eslint-disable jsx-a11y/alt-text */

import React  from "react";
import Image from './img/1.png'

class Timeline extends React.Component { 
    state = {
        isActive: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        isActive6: false,
        isActive7: false,
        isActive8: false,
        isActive9: false,
        isActive10: false,
        isActive11: false,
      };
      handleShow = () => {
        if (this.state.isActive===false) {
            this.setState({isActive: true});
           
            
        } else if(this.state.isActive===true ) {
            this.setState({isActive: false});
            
        }
       
      };
      handleShow2 = () => {
        if (this.state.isActive2===false) {
            this.setState({isActive2: true});
           
            
        } else if(this.state.isActive2===true ) {
            this.setState({isActive2: false});
            
        }
       
      };
      handleShow3 = () => {
        if (this.state.isActive3===false) {
            this.setState({isActive3: true});
           
            
        } else if(this.state.isActive3===true ) {
            this.setState({isActive3: false});
            
        }
       
      };
      handleShow4 = () => {
        if (this.state.isActive4===false) {
            this.setState({isActive4: true});
           
            
        } else if(this.state.isActive4===true ) {
            this.setState({isActive4: false});
            
        }
       
      };
      handleShow5 = () => {
        if (this.state.isActive5===false) {
            this.setState({isActive5: true});
           
            
        } else if(this.state.isActive5===true ) {
            this.setState({isActive5: false});
            
        }
       
      };
      handleShow6 = () => {
        if (this.state.isActive6===false) {
            this.setState({isActive6: true});
           
            
        } else if(this.state.isActive6===true ) {
            this.setState({isActive6: false});
            
        }
       
      };
      handleShow7 = () => {
        if (this.state.isActive7===false) {
            this.setState({isActive7: true});
           
            
        } else if(this.state.isActive7===true ) {
            this.setState({isActive7: false});
            
        }
       
      };
      handleShow8 = () => {
        if (this.state.isActive8===false) {
            this.setState({isActive8: true});
           
            
        } else if(this.state.isActive8===true ) {
            this.setState({isActive8: false});
            
        }
       
      };
      handleShow9 = () => {
        if (this.state.isActive9===false) {
            this.setState({isActive9: true});
           
            
        } else if(this.state.isActive9===true ) {
            this.setState({isActive9: false});
            
        }
       
      };
      handleShow10 = () => {
        if (this.state.isActive10===false) {
            this.setState({isActive10: true});
           
            
        } else if(this.state.isActive10===true ) {
            this.setState({isActive10: false});
            
        }
       
      };
      handleShow11 = () => {
        if (this.state.isActive11===false) {
            this.setState({isActive11: true});
           
            
        } else if(this.state.isActive11===true ) {
            this.setState({isActive11: false});
            
        }
       
      };

    render() {
      return (<div id="agenda" class="container-fluid">
         <div>
           </div>
        <div class="row rowtime">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-6 col-10">
                <h1 class=" rowtime-h1">Agenda</h1>
                <h3 class=" rowtime-h3">04 November 2021 | 10:00 - 14:30 CET </h3>
            </div>
            <div class=" col-xl-3 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 10:00-10:10</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
            
                <h4 class="timetext"> Welcome and Introduction</h4>
               
                <button class="showcard" onClick={this.handleShow}><h6  class="h6card"> + Ioannis Anyfantis, Consortium</h6></button>
                {this.state.isActive ? 
                <div class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Ioannis Anyfantis</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
                
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 10:10-10:20</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
            
                <h4 class="timetext"> Introduction and aims of the workshop</h4>
               
                <button className="2" id="2" class="showcard" onClick={this.handleShow2}><h6 class="h6card"> + Name Last Name, EU-OSHA</h6></button>
                {this.state.isActive2 ? 
                <div class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Name</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 10:20-10:40</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
            
                <h4 class="timetext"> Key note speeches</h4>
               
                <button  id="2" class="showcard" onClick={this.handleShow3}><h6 class="h6card"> + Name Last Name, EU-OSHA</h6></button>
                {this.state.isActive3 ? 
                <div class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Name</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 10:40-11:10</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
            <p>Plenary session 1</p>
                <h4 class="timetext"> The key findings from WP1 Task1 discussion, andvoting sessions</h4>
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 11:30-11:45</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <h4 class="timetext"> Short break</h4>
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 11:45-12:15</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <p>Breakout room 1</p>
                <h4 class="timetext"> Assessment of the OSH challenges and opportunities
                    associated with AI-based systems for the automation of tasks.
                </h4>
                <button class="showcard" onClick={this.handleShow4}><h6  class="h6card padd">+ Prof. Dr. Phoebe Moore, University of Leicester (UL), UKUniversity of Leicester (UL), UK</h6></button>
                {this.state.isActive4 ? 
                <div  class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Prof.Dr.Phoebe Moore</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }<br />
                <button   class="showcard" onClick={this.handleShow5}><h6  class="h6card padd"> + Prof. Dr. Robert Donoghue, University of Leicester (UL), UKUniversity of Leicester</h6></button>
                {this.state.isActive5 ? 
                <div  class="cardinfo ">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Prof.Dr.Robert Donoghue</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 12:15-12:45</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <h4 class="timetext"> Q&A - Discussion</h4>
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 11:45-12:15</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <p>Breakout room 2</p>
                <h4 class="timetext"> Assessment of the OSH challenges and opportunities
associated with the state of knowledge on advanced
robotics
                </h4>
                <button class="showcard" onClick={this.handleShow6}><h6  class="h6card padd">+ Patricia Rosen, (BAuA)</h6></button>
                {this.state.isActive6 ? 
                <div  class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Patricia Rosen</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }<br />
                <button   class="showcard" onClick={this.handleShow7}><h6  class="h6card padd"> + Eva Heinold, (BAuA)</h6></button>
                {this.state.isActive7 ? 
                <div  class="cardinfo ">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Eva Heinold</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }<br />
                <button   class="showcard" onClick={this.handleShow8}><h6  class="h6card padd"> + Dr. Sascha Wischniewski, (BAuA)</h6></button>
                {this.state.isActive8 ? 
                <div  class="cardinfo ">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Dr.Sascha Wischniewski</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 12:15-12:45</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <h4 class="timetext"> Q&A - Discussion</h4>
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 12:45-13:45</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <h4 class="timetext">Lunch break</h4>
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 13:45-14:00</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <p>Panel</p>
                <h4 class="timetext"> Presentation of discussion results from breakout room 1</h4>
               
                <button className="1"  class="showcard" onClick={this.handleShow9}><h6  class="h6card"> + Prof. Dr. Phoebe Moore, (UL)</h6></button>
                {this.state.isActive9 ? 
                <div class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Prof.Dr.Phoebe Moore</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
                
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 14:00-14:15</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
            
                <h4 class="timetext"> Presentation of discussion results from breakout room 2</h4>
               
                <button className="1"  class="showcard" onClick={this.handleShow10}><h6  class="h6card"> + Patricia Rosen, (BAuA)</h6></button>
                {this.state.isActive10 ? 
                <div class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Patricia Rosen</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
                
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 14:15-14:45</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
            
                <h4 class="timetext"> Joint discussion of all results (round table)</h4>
               
                <button className="1"  class="showcard" onClick={this.handleShow11}><h6  class="h6card"> + Dr. Sascha Wischn, (BAuA)</h6></button>
                {this.state.isActive11 ? 
                <div class="cardinfo">
                    <div class="row">
                        <div class="col-4"><img class="image1" src={Image}/></div>
                        <div class="col-8">
                                        <h3 class="cardtitle1">Dr.Sascha Wischn</h3>
                                        <h5 class="cardsubtitle1">EU-OSHA</h5>
                                        <p class="cardpar1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed.</p>
                        </div>
                    </div>
                </div> : null }
                
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row ">
            <div class=" col-xl-3 col-1"></div>
            <div class=" col-xl-2 col-3">
                <h4 class="time"> 14:45-15:00</h4>
            </div>
            <div class=" col-xl-6 col-7 linea">
                <h4 class="timetext"> Summary and outlook</h4>
                <h6  class="h6card">&nbsp;EU-OSHA</h6>
            </div>
            <div class=" col-xl-1 col-1"></div>
        </div>
        <div class="row rowdwpdf">
            <div class=" col-xl-4 col-3"></div>
            <div class=" col-xl-4 col-6 text-center">
            <a href="template.pdf" download ><button class="btn btn-secondary dwpdf" >DOWNLOAD PDF</button></a>
            </div>
            <div class=" col-xl-4 col-3"></div>
        </div>
        
</div>)
    }
    
  }
  export default Timeline;