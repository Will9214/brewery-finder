const Header = (props) => {
  return (
    <div className="container text-center">
      <div className="container">
        <h1 className="display-1 text-center">Brewery Finder</h1>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
};

export default Header;