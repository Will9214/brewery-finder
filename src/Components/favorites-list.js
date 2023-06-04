import { useState } from "react";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  function handleClick() {
    setFavorites()
  }

  return (
    <div>
      <h3>Favorite Brewery List</h3>
      <div className="fav-list col-6 col-lg-12">
        <div></div>
      </div>
    </div>
  )
};

export default FavoritesList;