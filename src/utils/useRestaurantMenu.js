import { useEffect, useState } from "react";
import { restauranrMenuList } from "./RestaurantMenuMockData";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    })
    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678&catalog_qa=undefined&submitAction=ENTER");
        let json;
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
            json = await (response.status == 200 ? response?.json() : restauranrMenuList.data);

            console.log("Response length:", text.length);
            console.log("Response preview:", text.slice(0, 500));
        } catch (error) {
            console.error("Fetch request failed:", error);
        }
        setResInfo(json);
    }
    return resInfo;
}
export default useRestaurantMenu;