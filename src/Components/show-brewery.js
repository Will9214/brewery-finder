import { Link, useLocation, matchPath } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesList } from "../Actions";

const ShowBrewery = () => {

  const breweries = useSelector((state) => state.breweries);
  const location = useLocation();
  const path = matchPath("/breweries/:id", location.pathname);
  const pathId = path.params.id;
  const brewery = breweries.find(obj => obj.id === pathId);
  const dispatch = useDispatch();
  
  const handleFavoriteClick = () => {
    dispatch(addToFavoritesList(brewery));
  }

  return (
    <div className='container col-md-6 offset-3 show-brewery'>
      <div className=''>
        <h4 className='text-center'>{brewery.name}</h4>
        <div className='row'>
          <div className='col-md-8'>Brewery Type: {brewery.brewery_type}</div>
          <button className='col-md-4 btn btn-outline-success' 
              onClick={handleFavoriteClick}>
                Add to Favorites
              </button>
        </div>
        <div className='row'>
            <div className='col-md-8'>
              <div className=''>{brewery.street}</div>
              <div>{brewery.city}, {brewery.state}</div>
              <div>{brewery.postal_code}</div>
              <div>{brewery.phone}</div>
              <div>{brewery.website_url}</div>
            </div>
            <div className='col-md-4'>
              <br></br>
              <div className='text-center'> MAP </div>
            </div>
        </div>  
        <div className="row">
          <Link to="/" className="btn btn-primary">Back</Link>
        </div>      
      </div>
    </div>
  )
}

export default ShowBrewery;