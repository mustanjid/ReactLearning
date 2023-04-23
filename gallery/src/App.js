import Gallery from "./components/Gallery";
import StateObject from "./components/StateObject"
import StateForm from "./components/StateForm"
import StatFormWithImmer from './components/StateFormWithImmer'

function App() {
  return (
    <div className="App">
     <Gallery />
     <br />
     <StateForm />
     <br />
     <StatFormWithImmer />
    </div>
  );
}

export default App;
