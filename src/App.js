import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header';
import BreweryResultsList from './Components/brewery-results';
import ShowBrewery from './Components/show-brewery';
import FavoriteItem from './Components/favorite-item';
import FavoritesList from './Components/favorites-list';

function BreweryRoutes() {
  return(
    <Routes>
      <Route path="/" element={<BreweryResultsList />} />
      <Route path="/breweries/:number" element={<ShowBrewery />} />
      <Route path="/favorites" element={<FavoritesList />} />
      <Route path="/favorites/:number" element={<FavoriteItem />} />
    </Routes>
  )
}

function App() {
  return (
    <div>
      <Header />
      <BreweryRoutes />
    </div>
  )
}

export default App;
