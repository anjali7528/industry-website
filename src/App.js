import About from "./Components/about/About";
import Jumbotrone from "./Components/Jumbotrone/Jumbotrone";
import Topbar from "./Components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
     <Topbar/>
     <Jumbotrone/>
     <About/>
    </div>
  );
}

export default App;
