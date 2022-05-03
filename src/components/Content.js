import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import './Content.css'
function Content(props) {
    const { sort, data } = props // destructuring the props
    const [sorting, setSorting] = useState("rating")
    const [choice, setChoice] = useState(0) //choice to choose among three brands i.e. dior, nyx and clinique
    useEffect(() => {
        setSorting(sort); // update the state used just for rendering the component
        data.clinique.sort(
            function (a, b) {
                if (sort === "rating") {
                    if (parseFloat(a.rating) > parseFloat(b.rating)) { //rating and price was in string and boolean comparision between the was failing therefore had to use parsefloat.
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    if (parseFloat(a.price) > parseFloat(b.price)) {
                        return 1
                    } else {
                        return -1
                    }
                }
            })
        data.dior.sort(
            function (a, b) {
                if (sort === "rating") {
                    if (parseFloat(a.rating) > parseFloat(b.rating)) {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    if (parseFloat(a.price) > parseFloat(b.price)) {
                        return 1
                    } else {
                        return -1
                    }
                }
            })
        data.nyx.sort(
            function (a, b) {
                if (sort === "rating") {
                    if (parseFloat(a.rating) > parseFloat(b.rating)) {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    if (parseFloat(a.price) > parseFloat(b.price)) {
                        return 1
                    } else {
                        return -1
                    }
                }
            })
    }, [sort, data]) //if prop changes we update the data.

    const handleOnclick = (e) => {
        if (e.target.id === "nyx") {
            setChoice(0) // setting choice of which data to be displayed.
            const ele = document.querySelectorAll(".header") //to change the font weight of all the headlines to normal we select all of them.
            ele.forEach(box => {
                box.classList.remove('bold'); //remove bold from them.
              });
            e.target.classList.add('bold') // add bold to just the one we have clicked on


        } else if (e.target.id === "cli") {
            setChoice(1)
            const ele = document.querySelectorAll(".header")
            ele.forEach(box => {
                box.classList.remove('bold');
              });
            e.target.classList.add('bold')
        } else if (e.target.id === "dior") {
            setChoice(2)
            const ele = document.querySelectorAll(".header")
            ele.forEach(box => {
                box.classList.remove('bold');
              });
            e.target.classList.add('bold')
        }
    }




    return (
        <div className='parentContainer'>
            <div className='headers'>
                <span className='header' onClick={handleOnclick} id="nyx">Nyx ({data.nyx.length})</span>
                <span className='header' onClick={handleOnclick} id="cli">Clinique ({data.clinique.length})</span>
                <span className='header' onClick={handleOnclick} id="dior">Dior ({data.dior.length})</span>
            </div>
            {choice === 2 &&
                <div className="parent">
                    {data.dior.map((ele) => {
                        return (
                            <CardItem key={ele.id} brand={ele.brand} price={ele.price} image_link={ele.image_link} product_link={ele.product_link} description={ele.description} rating={ele.rating === null ? 0 : ele.rating} name={ele.name} />

                        )
                    })}
                </div>
            }
            {choice === 0 &&
                <div className="parent">
                    {data.nyx.map((ele) => {
                        return (
                            <CardItem key={ele.id} brand={ele.brand} price={ele.price} image_link={ele.image_link} product_link={ele.product_link} description={ele.description} rating={ele.rating === null ? 0 : ele.rating} name={ele.name} />

                        )
                    })}
                </div>
            }
            {choice === 1 &&
                <div className="parent">
                    {data.clinique.map((ele) => {
                        return (

                            <CardItem key={ele.id} brand={ele.brand} price={ele.price} image_link={ele.image_link} product_link={ele.product_link} description={ele.description} rating={ele.rating === null ? 0 : ele.rating} name={ele.name} />
                        )
                    })}
                </div>
            }

        </div>
    )
}

export default Content