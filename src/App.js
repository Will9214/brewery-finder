import SearchBar from './Components/search-bar';
import './App.css';
import Header from './Components/header';
import BreweryResultsList from './Components/brewery-results';
import ShowBrewery from './Components/show-brewery';
import FavoriteItem from './Components/favorite-item';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <BreweryResultsList />
    </div>
  )
}

export default App;
