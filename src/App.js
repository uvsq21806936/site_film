
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import FilmOrdonee from './components/FilmOrdonee';
import SearchBar from './components/SearchBar';
import Filmdetail from './components/Filmdetail';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/movie/populair" component={FilmOrdonee} />
      <Route exact path="/search/multi" component={SearchBar} />
      <Route exact path ="/Movie/:ID" component={Filmdetail}/>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
