import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Task from './Components/Task';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Login/> 
      <Register/>
      <Task/> */}
      <Dashboard/>
    </div>
  );  
}

export default App;
