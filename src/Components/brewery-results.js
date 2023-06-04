import FavoritesList from "./favorites-list";
import { useSelector } from 'react-redux';

const BreweryResultsList = () => {

  const breweries = useSelector((state) => state.breweries);

  const renderBreweryList = () => {
    
    if (breweries) {
      return breweries.map((brewery) => {
        
        return (
          <div key={brewery.id} className="api-query-result">
            <div>{brewery.name}</div>
            <div>{brewery.street}</div>
            <div>{brewery.city}, {brewery.state}</div>
            <button className='col-md-4 btn btn-outline-success' 
              >
                Add to Favorites
              </button>
          </div>
        )
      })
    }
  }

  return (
    <div className="row">
      <div className="results-body col-sm-6 col-lg-8">
        {renderBreweryList()}
        {/* <div className="api-query-result">
          <div>Brewery Name</div>
          <div>Brewery Address</div>
          <div>Address Line 2</div>
        </div>
        <div className="api-query-result">Result Two</div>
        <div className="api-query-result">Result Three</div>
        <div className="api-query-result">Result Four</div>
        <div className="api-query-result">Result Five</div> */}
      </div>
      <div className="fav-list col-6 col-lg-4">
        <FavoritesList />
      </div>
    </div>
  )
};

export default BreweryResultsList;