
import { useState } from "react";
  
import { useNavigate } from "react-router-dom";
  
const FavoritesList = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  function handleClick() {
    setFavorites()
  }
  
  const handleRowClick = (e) => {
    navigate('/favorites/1');
    // const favoritesId = e.currentTarget.id;
    // navigate(`/favorites/${favoritesId}`);

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