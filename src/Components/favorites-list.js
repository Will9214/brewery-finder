import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
  
const FavoritesList = () => {
  const navigate = useNavigate();
  

  const handleRowClick = (e) => {
    const favoritesId = e.currentTarget.id;
    navigate(`/favorites/${favoritesId}`);
  }
  
  // const handleRowClick = (event, favorite) => {
  //   const favoritesId = event.currentTarget.id;
  //   // navigate(`/favorites/${favoritesId}`);
  //   debugger;
  //   navigate(
  //     `/favorites/${favoritesId}`,
  //     {
  //       state: {
  //         favorite: favorite[favoritesId].info
  //       }
  //     }
  //   );
  //   console.log(favoritesId);
  //   console.log(favorite[favoritesId].info);
  // }

  const favorites = useSelector(state => state.favorites);
  
  const renderFavoritesList = () => {

    if (favorites) {

      // let favList = Object.entries(favorites).map((e) => ({[e[0]]: e[1]}));
      // return favList.map((favorite) => {
      //   for (let prop in favorite) {
      //     return (
      //       <div className="fav-list col-6 col-lg-12 list-item" 
      //         key={favorite[prop].info.id} 
      //         id={favorite[prop].info.id} 
      //         onClick={(event) => handleRowClick(event, favorite)}>
      //         {favorite[prop].info.name}
      //       </div>
      //     )
      //   }
      // })
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