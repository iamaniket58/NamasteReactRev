
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { name,cuisines, avgRatingString,costForTwo,sla,cloudinaryImageId} = props?.resData?.info;
    {console.log('RestaurantCard is getting rendered')}
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} width="200px" />
            <h3>{name }</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}
export default RestaurantCard;