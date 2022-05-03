import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Content from './components/Content'
import Searched from './components/Searched'
import Loading from './components/Loading'
function App() {
  const [loading, setLoading] = useState(true) //as the name suggests a state when the page is loading or not. Initial value is true as datat is yet to be fetched.
  const [sorted, setSort] = useState("rating") // state for sorting with default value as rating
  const [searchField, setSearchField] = useState(null); //state to keep track fo what is being searched.
  const [data, setData] = useState({
    dior: [],
    clinique: [],
    nyx: []
}) // data to be fetched.

const handleChange = e => {
  if(e.target.value==""){
    setSearchField(null) // so that we dont go into the searched component and start processing on empty searched field.
  }else{
    setSearchField(e.target.value.toLowerCase()); // to update the searchfield state every time we type sumething
  }
  
};

  function handleClick(e) {
    setSort(e.target.id) // set the sort to the id of what we have clicked I could have used value in this case too.
  }
  useEffect(() => {
    try {

        const fetchData = async () => {

            const url = {
                method: 'GET',
                url: 'http://localhost:8080/cors',
            }
    
            axios.request(url).then((response) => {
                
                setData({dior: response.data.dior, clinique: response.data.cli, nyx: response.data.nyx}) // updating data state
                setLoading(false) // stoping the loader as datais fetched
    
            }).catch((error) => {
                console.error(error)
            })
        }
        fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])
  return (
    <>
      <div className='topBar'>
        <div className="search">
          <h4>Search:&nbsp;&nbsp;</h4>
        <input size="13" type = "search" onChange = {handleChange} placeholder="Search product" />
        </div>
        <div className="sort">
          <div>Sort By: </div>
          <div className="dropdown">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {sorted}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li className="dropdown-item" id="rating" onClick={handleClick}>rating</li>
              <li className="dropdown-item" id="price" onClick={handleClick}>price</li>
            </ul>
          </div>
        </div>
      </div>
      {searchField&&!loading&&<Searched data={data} searched={searchField}/> /*if someting is searched and data is fetched i.e loading has stopped then only we use searched component*/}
      {loading&&<Loading/> /*if loding is true we show a spinner */ }
      {!searchField&&!loading&&<Content data={data} sort={sorted} /> /*if nothing is searched and data is fetched i.e loading has stopped then only we use content component*/}
    </>
  )
}

export default App