const Header = (props) => {
  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <h1 className="col-lg-9 display-1 text-center">Brewery Finder</h1>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
};

export default Header;