import FavoritesList from "./favorites-list";

const BreweryResultsList = () => {
  return (
    <div className="row">
      <div className="results-body col-sm-6 col-lg-8">
        <div className="api-query-result">Result One</div>
        <div className="api-query-result">Result Two</div>
        <div className="api-query-result">Result Three</div>
        <div className="api-query-result">Result Four</div>
        <div className="api-query-result">Result Five</div>
      </div>
      <div className="fav-list col-6 col-lg-4">
        <FavoritesList />
      </div>
    </div>
  )
};

export default BreweryResultsList;