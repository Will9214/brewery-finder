const Header = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="">Brewery Finder</h1>
        </div>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
};

export default Header;