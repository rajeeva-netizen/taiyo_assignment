import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard';
import CovidCases from './component/covidmaps';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard/>
        {/* <CovidCases/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
