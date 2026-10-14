import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
const Body = () => {
    let arr = useState([]);
    console.log('Arr', arr);
    let [restroList, setRestroList] = arr;
    useEffect(() => {
        let data = fetchData();
        // console.log(data);
    }, [])

    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json= await data.json();
        let restaurantData=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestroList(restaurantData);
    }

    return restroList.length==0?<Shimmer/>:(

        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    let restroList1 = restroList.filter(res => +(res.info.avgRating) > 4.2)
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
                {console.log('Body is getting rendered')}
                {restroList.map((restro) => <RestaurantCard key={restro.info.id} resData={restro} />)}


            </div>
        </div>
    )
}
export default Body;