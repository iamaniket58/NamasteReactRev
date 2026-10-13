import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    let [restroList,setRestroList]=useState(restaurantsList);
    return (

        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    let restroList1=restroList.filter(res => +(res.info.avgRating) > 4.2)
                    setRestroList(restroList1)
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
                {restroList.map((restro) => <RestaurantCard key={restro.info.id} resData={restro} />)}


            </div>
        </div>
    )
}
export default Body;