import { useState } from "react";

const SearchBar = () => {

  const [result, setResult] = useState('brewery');

  const handleSelectChange = e => {
    setResult(e.currentTarget.value);
  }

  return (
    <div>
      <div className='container'>
        
        <form className='container row'>
          <div className=''>
            <label className='form-label'>Search for Specific Brewery or a City and Find a Brewery</label>
          </div>
          <div className='mb-3'>
            <div className='input-group'>
              <input className='form-control' type='text' placeholder={result === 'brewery' ? 'Type a Brewery' : 'Type a City'} name='search'></input>
              <button className='btn btn-primary' type='submit'>Search</button>
            </div>
            <div className='col-md-2'>
              <select defaultValue='brewery' className='form-select' onChange={handleSelectChange}>
                <option value='brewery'>Brewery</option>
                <option value='city'>City</option>
              </select>
            </div>
            
            {/* <div className='form-check form-check-inline'>
              <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1'></input>
              <label className='form-check-label' for='flexRadioDefault1'>Brewery</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2'></input>
              <label className='form-check-label' for='flexRadioDefault2'>City</label>
            </div> */}
          </div>
        <hr />
      </form>


      </div>
    </div>
    
  )
}

export default SearchBar;