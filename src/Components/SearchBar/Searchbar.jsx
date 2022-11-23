import './searchbar.css'
export default function Search() {
  return (
    <div className='search--container sticky'>
      <div class='search'>
        <img src='./SearchIcon.svg' class='icon' alt='An Error Occured' />
        <input
          type='text'
          name=''
          // autocomplete='off'
          id='search'
          placeholder='Singapore, singapore'
        />
        {/* <div class='autocomplete'>
          <ul class='autocomplete-result'>
            <li>
              <img src='location.svg' alt='' />
            </li>
          </ul>
        </div> */}
      </div>
      <div class='search hide'>
        <img  src='./DateIcon.svg' class='icon' alt='ERROR' />
        <input
          type='search'
          name=''
          id='date'
          placeholder='Jul 19  –  Jul 20        1 night'
        />
      </div>
      <div class='search hide'>
        <input
          type='search'
          name=''
          id='guest'
          placeholder='2 adults, 0 children, 1 room'
        />
      </div>
      <input type='button' value='Search' class='searchBtn hide' />
    </div>
  )
}
