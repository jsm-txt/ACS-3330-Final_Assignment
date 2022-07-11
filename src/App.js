import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Weather from './weather'
import Title from './Title';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route exact path="/" component={Weather}/>
        <Route path="/about" component={About} />
        <Footer/>
      </div>

    </Router>
    
  );
}

export default App;
