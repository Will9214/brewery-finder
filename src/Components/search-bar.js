const SearchBar = () => {
  return (
    <div>
      <div className='text-center'>
        <div className='container'>
          <h1>Find A Brewery</h1>
        </div>
      </div>
      <div className='container'>


        <form className='container row'>
          <div className='form-group'>
            <label className='form-label'>Search for Specific Brewery or a City and Find a Brewery</label>
          </div>
          <div className='mb-3'>
            <div className='input-group'>
              <input className='form-control' type='text' placeholder='Type a Brewery Name or a City' name='search'></input>
              <button className='btn btn-primary' type='submit'>Search</button>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='radio' name='search-brewery' id='flexRadioDefault1'></input>
              <label className='form-check-label' htmlFor='flexRadioDefault1'>Brewery</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='radio' name='search-city' id='flexRadioDefault2'></input>
              <label className='form-check-label' htmlFor='flexRadioDefault2'>City</label>
            </div>
          </div>
        <hr />
      </form>


      </div>
    </div>
    
  )
}

export default SearchBar;