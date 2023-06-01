const ShowBrewery = () => {
  return (
    <div className='container'>
      <div className=''>
        <h1 className='text-center'>Brewery Name</h1>
        <div className='row'>
          <div className='col-md-8'>Brewery Address</div>
          <button className='col-md-4 btn btn-outline-success'>Add to Favorites</button>
        </div>
        <img src='https://chicagoparent.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2022/08/family-friendly-breweries-chicago-photo-credit-old-irving-brewing-co.jpg' alt='' className='img-fluid'></img>
      </div>
      


    </div>
  )
}

export default ShowBrewery;