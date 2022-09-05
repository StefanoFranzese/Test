import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class=" container one">
        <div class="row" >
          <div class=" text1container">
            <h2 class="text1">
              EXPERT WORKSHOP: AI <br/>
              BASED WORKER<br/> 
              MANAGEMENT AND OSH
            </h2>
          </div>
        </div>
      </div>
      <div class=" container-fluid">
        <div class="row timer">
          <div class="col-3"></div>
          <div class="col-6">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">15</th>
                  <th scope="col">12</th>
                  <th scope="col">45</th>
                  <th scope="col">16</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Day</td>
                  <td>Hours</td>
                  <td>Minutes</td>
                  <td>Second</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
