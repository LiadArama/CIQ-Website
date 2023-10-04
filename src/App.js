import './components/pageComponents/Homepage'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../src/components/pageComponents/NavBar';
import AppRoutes from './components/pageComponents/AppRoutes';
function App() {
  return (
    <div>
        <h1>Travel Diaries</h1>
        <Router>
            <header className="App-header">
              <NavBar/>
              <AppRoutes/>
            </header>
        </Router>
    </div>
  );
}

export default App;
