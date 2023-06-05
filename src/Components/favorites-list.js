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
    for (const prop in favorites) {
      if (favorites.hasOwnProperty(prop)) {
        return (
          <div className="fav-list col-6 col-lg-12 list-item" onClick={handleRowClick}>
            {prop.info.name}
          </div>
        )
      } 
    }
  }
  return (
    <div>
      <h3>Favorite Brewery List</h3>
        {renderFavoritesList()}
    </div>
  )
};

export default FavoritesList;