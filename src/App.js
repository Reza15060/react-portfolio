import './App.css';
import {Route , BrowserRouter, Router} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer';
import Contact from './pages/Contact'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:450
});

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Route path = '/' exact component={Home} />
      <Route path = '/projects' exact component={Projects}/>
      <Route path='/contact' exact component={Contact}/>
  
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
