import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Secone from "./Components/Premium";
import Fttr from "./Components/Fttr";
import Tabb from "./Components/Tabb";
import Sectwo from "./Components/Locker";
import Secthree from "./Components/Related";
import Load from "./Components/Load";
import Topnav from "./Components/Topnav";

function App() {
  return (
    <div className="App">
      <Header />
      <Topnav />
      <Secone />
      <Sectwo />
      <Tabb />
      <Secthree />
      <Fttr />
      <Load />
    </div>
  );
}

export default App;
