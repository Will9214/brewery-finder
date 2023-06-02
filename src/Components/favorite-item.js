const FavoriteItem = () => {
  return (
    <div className='container col-md-8 offset-2'>
      <div className='show-brewery'>
        <h4 className='text-center'>Brewery Name</h4>
        <div className='row'>
          <div className='col-md-8'>Brewery Type: Type</div>
          <button className='col-md-4 btn btn-outline-success'>Remove from Favorites</button>
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

      <form>
        <div className='input-group mb-3'>
          <label className='input-group-text' htmlFor='inputBeerName'>Beer Name</label>
          <input type='text' className='form-control' id='inputBeerName'></input> 
        </div>
        <div className='mb-3'>
          <label htmlFor='beerRatingRange' className='form-label'>Rate your Beer!</label>
          <input type='range' className='form-range' min='0' max='10' step='0.5' id='beerRatingRange' list='steplist'></input>
          <datalist id='steplist'>
            <option value='0'>0</option>
            <option>0.5</option>
            <option>1.0</option>
            <option>1.5</option>
            <option>2.0</option>
            <option>2.5</option>
            <option>3.0</option>
            <option>3.5</option>
            <option>4.0</option>
            <option>4.5</option>
            <option>5.0</option>
            <option>5.5</option>
            <option>6.0</option>
            <option>6.5</option>
            <option>7.0</option>
            <option>7.5</option>
            <option>8.0</option>
            <option>8.5</option>
            <option>9.0</option>
            <option>9.5</option>
            <option>10</option>
          </datalist>

        </div>
        
      </form>
    </div>
  )
}

export default FavoriteItem;