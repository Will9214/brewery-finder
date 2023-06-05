import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
  
const FavoritesList = () => {
  const navigate = useNavigate();
  
  const handleRowClick = (e) => {
    const favoritesId = e.currentTarget.id;
    navigate(`/favorites/${favoritesId}`);
  }

  const favorites = useSelector(state => state.favorites);
  
  const renderFavoritesList = () => {

    if (favorites) {
      return favorites.map((favorite) => {
        return (
          <div className="fav-list col-6 col-lg-12 list-item" 
            key={favorite.id} 
            id={favorite.id} 
            onClick={handleRowClick}>
            {favorite.name}
          </div>
        )
      })
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