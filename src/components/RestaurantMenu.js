import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restauranrMenuList } from "../utils/RestaurantMenuMockData"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resid}=useParams();
    console.log("ResID",resid)
    useEffect(() => {
        // fetchMenu();
        console.log(restauranrMenuList)
        setResInfo(restauranrMenuList.data);
        // console.log("ResInfo", resInfo)
    }, []);

    const fetchMenu = async () => {
        // let data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678&catalog_qa=undefined&submitAction=ENTER");
        // let json = await data.json();
        // console.log(json);
        try {
            const url =
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678&catalog_qa=undefined&submitAction=ENTER";

            const response = await fetch(url);
            // let js=await response.json();
            // console.log(js)
            console.log("Status:", response.status);
            console.log("Final URL:", response.url);
            console.log("Redirected:", response.redirected);
            console.log("Headers:", [...response.headers.entries()]);

            const text = await response.text();

            console.log("Response length:", text.length);
            console.log("Response preview:", text.slice(0, 500));
        } catch (error) {
            console.error("Fetch request failed:", error);
        }
    }
    if (!resInfo) {
        return <Shimmer />;
    }
    // console.log("D",resInfo)
    let { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    let { itemCards } = resInfo.cards[3].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
    console.log('it',itemCards)
    return (

        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
               { itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}- {item.card.info.price}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
