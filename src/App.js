import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather/>
    
      <footer>
        This project is created by <a href="https://www.linkedin.com/in/mariana-sandovala/" target= "_blank"> @Masandovva </a>and it is an {""}
      <a href = "https://github.com/masandovva/weatherapp-react" target= "_blank">
     open-sourced on Github
      </a>
      
      </footer>
      </div>
    </div>
  );
}

