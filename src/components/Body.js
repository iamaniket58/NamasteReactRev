import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
const Body = () => {
    return (
       
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard resData={restaurantsList[0]} />
                <RestaurantCard resData={restaurantsList[1]} />
                <RestaurantCard resData={restaurantsList[2]} />
                <RestaurantCard resData={restaurantsList[3]} />
                <RestaurantCard resData={restaurantsList[4]} /> */}
                {restaurantsList.map((restro)=><RestaurantCard key={restro.info.id} resData={restro} />)}

            </div>
        </div>
    )
}
export default Body;