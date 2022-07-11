import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/restaurants/:id' element={<RestaurantDetails/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
