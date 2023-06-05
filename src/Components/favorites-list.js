import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
  
const FavoritesList = () => {
  const navigate = useNavigate();
  
  const handleRowClick = (e) => {
    navigate('/favorites/1');
    // const favoritesId = e.currentTarget.id;
    // navigate(`/favorites/${favoritesId}`);
  }

  const favorites = useSelector(state => state.favorites);

  const renderFavoritesList = () => {
    if (favorites) {
      return favorites.map((brewery) => {
        
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
      <h3>Favorite Brewery List</h3>

      <div className="fav-list col-6 col-lg-12 list-item" onClick={handleRowClick}>
        Favorite Brewery List Sidebar, will useState() implement localStorage in React Hooks. 
      </div>
      <div className="fav-list col-6 col-lg-12 list-item" onClick={handleRowClick}>
        Favorite Brewery List Sidebar, will useState() implement localStorage in React Hooks. 

      </div>
    </div>
  )
};

export default FavoritesList;