import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://ts4.mm.bing.net/th?id=OIP.pmrlCtbaRdQCnwX_E4NHuQHaHa&pid=15.1" alt="logo" width="100px" />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard = (props) => {
    // console.log(props);

    const { info } = props.resData;
    // console.log(info);
    return (
        <div className="res-card">
            {console.log(info.cloudinaryImageId)}
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId} alt={info.name} width="200px" />
            <h3>{info?.name ?? "Restaurant name"}</h3>
            {/* <h4> {props.cuisine ?? "jjj"}</h4> */}
            <h4>{info.cuisines.join(",")}</h4>
            <h4>{info.avgRatingString}</h4>
            <h4>{info.costForTwo}</h4>
            <h4>{info.sla.slaString}</h4>
        </div>
    )
}
// const css={
//     backgroundColor:"blue"
// }
let resObject = {
    "info": {
        "id": "375041",
        "name": "Andhra Gunpowder",
        "cloudinaryImageId": "byilgyrcfz690ryoasww",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Andhra",
            "Biryani",
            "South Indian"
        ],
        "avgRating": 4.3,
        "parentId": "10496",
        "avgRatingString": "4.3",
        "totalRatingsString": "7.1K+",
        "sla": {
            "deliveryTime": 14,
            "lastMileTravel": 0.3,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "0.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2026-10-12 01:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                },
                {
                    "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                    "description": "Top-rated for Andhra Food, based on user votes."
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "bolt!",
                                "imageId": "android/static-assets/icons/big_rx.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Top-rated for Andhra Food, based on user votes.",
                                "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                                "theme": ""
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {}
    },
    "analytics": {
        "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041",
        "type": "WEBLINK"
    }
}
let restaurantsList = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "23678",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/51a609f3-8277-441c-9dbe-545edab886c9_23678.JPG",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "67K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 02:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "873313",
            "name": "The Bihari Kitchen",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/f55abb38-1546-46c4-b83d-057ba9571906_873313.jpg",
            "locality": "B.B.M.P South",
            "areaName": "BTM 2nd Stage",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bihari",
                "Snacks",
                "Home Food"
            ],
            "avgRating": 4.2,
            "parentId": "492522",
            "avgRatingString": "4.2",
            "totalRatingsString": "3.2K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-40 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-18 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/the-bihari-kitchen-b-b-m-p-south-btm-2nd-stage-rest873313",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1143060",
            "name": "Al Daaz",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/22/1266236b-9ac2-488e-b146-b20d997b48d9_1143060.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Mughlai",
                "Barbecue",
                "Seafood",
                "Fast Food",
                "Biryani",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "21640",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.8K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/al-daaz-koramangala-rest1143060",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "537139",
            "name": "Narmada Chain of Restaurant",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/29/753d7fd4-a3f2-46d0-b803-4e1682b33109_537139.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian"
            ],
            "avgRating": 4.4,
            "parentId": "411277",
            "avgRatingString": "4.4",
            "totalRatingsString": "13K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "3.2K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/narmada-chain-of-restaurant-koramangala-rest537139",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "37744",
            "name": "Punjabi Swag",
            "cloudinaryImageId": "lpwnh9owiqabzd4khrl7",
            "locality": "BTM Layout",
            "areaName": "BTM Layout",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Fast Food",
                "Tandoor",
                "Biryani",
                "Chinese",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 4,
            "parentId": "13496",
            "avgRatingString": "4.0",
            "totalRatingsString": "19K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "7.8K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/punjabi-swag-btm-layout-rest37744",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "375041",
            "name": "Andhra Gunpowder",
            "cloudinaryImageId": "byilgyrcfz690ryoasww",
            "locality": "6th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
            ],
            "avgRating": 4.3,
            "parentId": "10496",
            "avgRatingString": "4.3",
            "totalRatingsString": "7.1K+",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 0.3,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "0.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                        "description": "Top-rated for Andhra Food, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Andhra Food, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "300642",
            "name": "Al-Bek",
            "cloudinaryImageId": "wyt8ymz3qwspvgvsthxr",
            "locality": "3rd phase",
            "areaName": "Jayanagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Indian",
                "Chinese"
            ],
            "avgRating": 4.2,
            "parentId": "9911",
            "avgRatingString": "4.2",
            "totalRatingsString": "18K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/al-bek-3rd-phase-jayanagar-rest300642",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "728444",
            "name": "Narmada Chain of Restaurant",
            "cloudinaryImageId": "3bf711cdef6072ae50c099c7e353497e",
            "locality": "2nd stage",
            "areaName": "BTM Bangalore",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian"
            ],
            "avgRating": 4.3,
            "parentId": "410569",
            "avgRatingString": "4.3",
            "totalRatingsString": "6.5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-10-12 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-6f2d9d5c-9b87-4ef2-955b-48832b32a7e6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/narmada-chain-of-restaurant-2nd-stage-btm-bangalore-rest728444",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={restaurantsList[0]} />
                <RestaurantCard resData={restaurantsList[1]} />
                <RestaurantCard resData={restaurantsList[2]} />
                <RestaurantCard resData={restaurantsList[3]} />
                <RestaurantCard resData={restaurantsList[4]} />

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)