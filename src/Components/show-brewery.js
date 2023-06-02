const ShowBrewery = () => {
  return (
    <div className='container col-md-6 offset-3 show-brewery'>
      <div className=''>
        <h4 className='text-center'>Brewery Name</h4>
        <div className='row'>
          <div className='col-md-8'>Brewery Type: Type</div>
          <button className='col-md-4 btn btn-outline-success'>Add to Favorites</button>
        </div>
        <div className='row'>
            <div className='col-md-8'>
              <div className=''>Address</div>
              <div>City, State ZIP</div>
              <div>Phone Number</div>
              <div>Website</div>
            </div>
            <div className='col-md-4'>
              <br></br>
              <div className='text-center'> MAP </div>
            </div>
        </div>        
      </div>
    </div>
  )
}

export default ShowBrewery;