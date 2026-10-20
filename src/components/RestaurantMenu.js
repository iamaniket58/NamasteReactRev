import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restauranrMenuList } from "../utils/RestaurantMenuMockData"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resid}=useParams();
    const resInfo=useRestaurantMenu(resid)

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
