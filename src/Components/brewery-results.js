import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import FavoritesList from "./favorites-list";
import SearchBar from "./search-bar";


const BreweryResultsList = () => {

  const breweries = useSelector((state) => state.breweries);
  const navigate = useNavigate();
  
  const handleRowClick = (e) => {
    const breweryId = e.currentTarget.id;
    navigate(`/breweries/${breweryId}`);
  }

  const renderBreweryList = () => {
    if (breweries) {
      return breweries.map((brewery) => {
        
        return (
          <div key={brewery.id} id={brewery.id} className="api-query-result list-item" onClick={handleRowClick}>
            <div>{brewery.name}</div>
            <div>{brewery.street}</div>
            <div>{brewery.city}, {brewery.state}</div>
          </div>
        )
      })
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="results-body col-sm-6 col-lg-8">
          {renderBreweryList()}
        </div>
        <div className="fav-list col-6 col-lg-4">
          <FavoritesList />
        </div>
      </div>
    </div>
    
  )
};

export default BreweryResultsList;