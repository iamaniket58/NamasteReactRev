import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { SWIGGY_FETCH_RESTRO_KORAMANGALA } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"
const Body = () => {
    let [restroList, setRestroList] = useState([]);
    let [filteredRestroList, setFilteredRestroList] = useState([]);

    let [searchText, setSearchText] = useState("");
    useEffect(() => {
        let data = fetchData();
        // console.log(data);
    }, [searchText])

    const fetchData = async function () {
        console.log("API is getting called")
        const data = await fetch(SWIGGY_FETCH_RESTRO_KORAMANGALA);
        let json = await data.json();
        let restaurantData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestroList(restaurantData);
        setFilteredRestroList(restaurantData);
    }

    return restroList.length == 0 ? <Shimmer /> : (

        <div className="body">


            <div className="filter">
                <div className="search-filter">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                    <button onClick={() => {
                        setFilteredRestroList(restroList.filter(res => { return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) }))

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {

                    let restroList1 = restroList.filter(res => +(res.info.avgRating) > 4.2)
                    setFilteredRestroList(restroList1)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={restaurantsList[0]} />
                <RestaurantCard resData={restaurantsList[1]} />
                <RestaurantCard resData={restaurantsList[2]} />
                <RestaurantCard resData={restaurantsList[3]} />
                <RestaurantCard resData={restaurantsList[4]} /> */}
                {console.log('Body is getting rendered')}
                {filteredRestroList.map((restro) =>
                    <Link to={"/restaurants/" + restro.info.id} key={restro.info.id}>  <RestaurantCard resData={restro} /></Link>
                )}


            </div>
        </div>
    )
}
export default Body;