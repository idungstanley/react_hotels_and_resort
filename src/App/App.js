import './App.css'
import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Search from '../Components/SearchBar/Searchbar'
import OptionBar from '../Components/OptionBar/OptionBar'
import DisplayHotels from '../Components/DisplayHotels/Displayhotels'
// import axios from 'axios'

function App() {
  const [data, setData] = React.useState({})
  React.useEffect(() => {
    fetch('job01/search/sgsg', { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => setData(data.outlets.availability.results))
      .catch((error) => {
        console.log(error)
      })
  }, [])
  // const availability = data
  console.log(data)
  let display;
  try {
    display = data.map((result,index) => {
      console.log(index)
      return <DisplayHotels result={result} key={index}/>
    })
  } catch (error) {
    console.log(error)
  }
  // console.log(display)
  // console.log(data.outlets.availability.results)
  return (
    <div className='App'>
      <Navbar />
      <Search />
      <OptionBar />
      {display}
      {/* <DisplayHotels result={data.outlets.availability.results key={}} /> */}
    </div>
  )
}

export default App
