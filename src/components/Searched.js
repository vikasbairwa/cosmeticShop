import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import './Searched.css'
function Searched(props) {
    const { data, searched } = props 
    const [filteredData, setFilteredData] = useState([]) //filtered data with only the products having name matching with what we search
    const [searchParam, setSearchParam] = useState(['name']) // the parameter based on which we filter we can add more.
    useEffect(() => {
        // filtering each of the brand data seperately at first.
        const filteredDataDior =  data.dior.filter((product) => {
            return searchParam.every((param) => {
                return (
                    product[param]
                        .toLowerCase()
                        .includes(searched)
                );
            });
        });
        const filteredDataCli =  data.clinique.filter((product) => {
            return searchParam.every((param) => {
                return (
                    product[param]
                        .toLowerCase()
                        .includes(searched)
                );
            });
        });
        const filteredDataNyx =  data.nyx.filter((product) => {
            return searchParam.every((param) => {
                return (
                    product[param]
                        .toLowerCase()
                        .includes(searched)
                );
            });
        });
        
        setFilteredData([...filteredDataCli, ...filteredDataDior, ...filteredDataNyx]) //merging all of the brand data in a single array using spread operator.
        return () => {
            setFilteredData({}) // cleaning up.
          }
    },[searched]) // every time we channge the search data is filtered accordingly


// if nothing matches the search we display no result
    if(filteredData.length===0){
        return (
            <div className="noresult">
                <div className="noresultimg"/>

            </div>
        )
    }else{ // else we display the filtered data.
        return (
            <div className="parent">
            {filteredData.map((ele) => {
                return (
                    <CardItem key={ele.id} brand={ele.brand} price={ele.price} image_link={ele.image_link} product_link={ele.product_link} description={ele.description} rating={ele.rating === null ? 0 : ele.rating} name={ele.name} />
    
                )
            })}
        </div>
        )
    }
}

export default Searched