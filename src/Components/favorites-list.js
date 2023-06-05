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
      let favList = Object.entries(favorites).map((e) => ({[e[0]]: e[1]}));
      return favList.map((favorite) => {
        for (let prop in favorite) {
          return (
            <div className="fav-list col-6 col-lg-12 list-item" 
              key={favorite[prop].info.id} 
              id={favorite[prop].info.id} 
              onClick={handleRowClick}>
              {favorite[prop].info.name}
            </div>
          )
        }
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