import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import { removeFromFavoritesList } from "../Actions";

const FavoriteItem = () => {

  
  const { state } = useLocation();
  

  const favorites = useSelector((state) => state.favorites);
  const location = useLocation();
  const path = matchPath("/favorites/:id", location.pathname);
  const pathId = path.params.id;
  const favorite = favorites.find(obj => obj.id === pathId);

  const dispatch = useDispatch();
  
  const handleRemoveFromFavoriteClick = () => {

    dispatch(removeFromFavoritesList(state.favorite.id));

    console.log(favorite)
    // dispatch(removeFromFavoritesList());

  }

  return (
    <div className='container col-md-8 offset-2'>
      <div className='show-brewery'>

        <h4 className='text-center'>{state.favorite.name}</h4>
        <div className='row'>
          <div className='col-md-8'>Brewery Type: {state.favorite.brewery_type}</div>
          <button className='col-md-4 btn btn-outline-success' 
            onClick={handleRemoveFromFavoriteClick}>

              
        <h4 className='text-center'>{favorite.name}</h4>
        <div className='row'>
          <div className='col-md-8'>Brewery Type: {favorite.brewery_type}</div>
          <button className='col-md-4 btn btn-outline-success' onClick={handleRemoveFromFavoriteClick}>

            
              Remove from Favorites
            </button>
        </div>
        <div className='row'>
          <div className='col-md-8'>

            
            <div className=''>{state.favorite.street}</div>
            <div>{state.favorite.city}, {state.favorite.state} {state.favorite.postal_code}</div>
            <div>{state.favorite.phone}</div>
            <div>{state.favorite.website_url}</div>


            <div className=''>{favorite.street}</div>
            <div>{favorite.city}, {favorite.state} {favorite.postal_code}</div>
            <div>{favorite.phone}</div>
            <div>{favorite.website_url}</div>


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
  
      <form>
        <div className='input-group mb-3'>
          <label className='input-group-text' htmlFor='inputBeerName'>Beer Name</label>
          <input type='text' className='form-control' id='inputBeerName'></input> 
        </div>
        <div className='mb-3'>
          <label htmlFor='beerRatingRange' className='form-label'>Rate your Beer!</label>
          <input type='range' className='form-range' min='0' max='10' step='0.5' id='beerRatingRange' list='steplist'></input>
          <datalist id='steplist'>
            <option value='0'>0</option>
            <option>0.5</option>
            <option>1.0</option>
            <option>1.5</option>
            <option>2.0</option>
            <option>2.5</option>
            <option>3.0</option>
            <option>3.5</option>
            <option>4.0</option>
            <option>4.5</option>
            <option>5.0</option>
            <option>5.5</option>
            <option>6.0</option>
            <option>6.5</option>
            <option>7.0</option>
            <option>7.5</option>
            <option>8.0</option>
            <option>8.5</option>
            <option>9.0</option>
            <option>9.5</option>
            <option>10</option>
          </datalist>
  
        </div>
        
      </form>
    </div>
  )
}

export default FavoriteItem;