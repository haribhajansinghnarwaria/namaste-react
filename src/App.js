import React from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

//---------------till episode 5
// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const parent = React.createElement("div",{id: "Parent"},[
//     React.createElement("div",{id: "Child1"},[
//         React.createElement("h1",{},"This is a namaste Reactn "),
//         React.createElement("h2",{},"I am an h2 tag")
//     ]
//     ),
//     React.createElement("div",{id: "Child2"},[
//         React.createElement("h1",{},"I am an h1 tag"),
//         React.createElement("h2",{},"I am an h2 tag")
//     ]
//     ),
// ]

// )
// const jsxHheading = (
//     <h1 className="head" tabIndex="5">
//         Namaste React Using JSX
//     </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHheading)
// console.log(jsxHheading);
// console.log(heading);
// Just tp check that both of above are same thing JS Object 
//To render nested elements and siblings we can use above method but its not the way we want it is making
//our code complex and hard to read and maintain. So we use JSX which is a syntax extension.


//Functional Componnet and component composition
// const Title = () => {
//     return <h1>This componet will go inside Container </h1>;
// };

// const HeadingComponent = () => {
   
//  return   <div id = "Container">
//  <Title/>
//  <h1 className=" Heading">Namaste React using Functional componet</h1>
//     </div>
// };


//____________________________________Actual FoodAppCode_______________________________________
/*
* Header
    Logo
    Nav Items
Body
    Search
    RestaurantContainer
        RestaurantCard
            img
            name of the rest,star rating,cusini,deliverey time 

Footer
    CopyRight
    Links
    Address
    Contact
*/ 
// const Header = () => {
//     return(
//         <div className = "header">
            
//             <div className="logo-container">
//                 <img className = "logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design-1-2048x1152.jpg" alt = "Logo"/>
//             </div>
//             <div className="nav-items">
//                 <ul className = "navitems">
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Cart</li>
//                     <li>Contact Us</li>    
//                 </ul>

//             </div>
//         </div>
//     )
// }

//Inline styling in JSX  , We will create a js object and then later call it in JSX
// const styleCard = {
//     backgroundColour : "#F0F0F0"
// }
// const RestaurantCard = () => {
//     return (
//         <div className="res-card" style = {styleCard}>
//             <img className = "res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
//             <h3>Meghana Foods</h3>
//             <h4>Briyani, North Indian, Asian</h4>
//             <h4>4.2 StarRating</h4>
//             <h4>38 mins Delivery time</h4>

//         </div>
//     )
// }
//Make Dynamic Restaurant card using Props

//Live Data from Swiggy API
// const resObj = {
//     "info": {
//       "id": "26724",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_26724.JPG",
//       "locality": "West Patel Nagar",
//       "areaName": "West Patel Nagar",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Rolls & Wraps",
//         "Fast Food"
//       ],
//       "avgRating": 4.2,
//       "parentId": "547",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 23,
//         "lastMileTravel": 0.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "0.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-27 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {

//           },
//           "textExtendedBadges": {

//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹179"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {

//           },
//           "video": {

//           }
//         }
//       },
//       "reviewsSummary": {

//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {

//       }
//     },
//     "analytics": {

//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/kfc-west-patel-nagar-delhi-26724",
//       "type": "WEBLINK"
//     }
//   }
// const resList =    [
//     {
//       "info": {
//         "id": "53774",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Tagore Market",
//         "areaName": "Kirti Nagar",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 4.2,
//         "parentId": "721",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 37,
//           "lastMileTravel": 3.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "3.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 01:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/pizza-hut-tagore-market-kirti-nagar-delhi-53774",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "655882",
//         "name": "Chinese Wok",
//         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//         "locality": "PATEL NAGAR",
//         "areaName": "Kirti Nagar Metro",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Chinese",
//           "Asian",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 4,
//         "parentId": "61955",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "500+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 2.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "2.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹149"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chinese-wok-patel-nagar-kirti-nagar-metro-delhi-655882",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "24897",
//         "name": "Havmor Havfunn Ice Cream",
//         "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
//         "locality": "Main shankar road",
//         "areaName": "Rajinder Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Ice Cream Cakes",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.6,
//         "parentId": "94570",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 2.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "2.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:59:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹100 OFF",
//           "subHeader": "ABOVE ₹299",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-main-shankar-road-rajinder-nagar-delhi-24897",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "24194",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//         "locality": "Karol Bagh",
//         "areaName": "East Patel Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Pastas",
//           "Desserts"
//         ],
//         "avgRating": 4.3,
//         "parentId": "2456",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 2.2,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "2.2 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 02:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹150 OFF",
//           "subHeader": "ABOVE ₹299",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/dominos-pizza-karol-bagh-east-patel-nagar-delhi-24194",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "129211",
//         "name": "Burger King",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/5ade7aab-4263-4ea8-b04c-299e523d1ad8_129211.jpg",
//         "locality": "Patel Rd",
//         "areaName": "Shadipur",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.2,
//         "parentId": "166",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 1.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 03:45:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/burger-king-patel-rd-shadipur-delhi-129211",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "26724",
//         "name": "KFC",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_26724.JPG",
//         "locality": "West Patel Nagar",
//         "areaName": "West Patel Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Rolls & Wraps",
//           "Fast Food"
//         ],
//         "avgRating": 4.2,
//         "parentId": "547",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 0.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "0.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹179"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kfc-west-patel-nagar-delhi-26724",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "253714",
//         "name": "McDonald's",
//         "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
//         "locality": "West Ajmal Khan",
//         "areaName": "Karol Bagh",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "American"
//         ],
//         "avgRating": 4.4,
//         "parentId": "630",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 39,
//           "lastMileTravel": 3.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "3.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 22:50:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-west-ajmal-khan-karol-bagh-delhi-253714",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "523200",
//         "name": "La Pino'z Pizza",
//         "cloudinaryImageId": "js7g8baosslodwoq7nk5",
//         "locality": "West Patel Nagar",
//         "areaName": "West Patel Nagar",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas",
//           "Pastas",
//           "Italian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 3.9,
//         "parentId": "4961",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 20,
//           "lastMileTravel": 0.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "0.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 04:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹199"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-west-patel-nagar-delhi-523200",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "20055",
//         "name": "Subway",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/fb30ceca-7684-4007-8300-b6c128c06d13_20055.JPG",
//         "locality": "Karol Bagh",
//         "areaName": "Patel Nagar, Connaught Place",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "parentId": "2",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 31,
//           "lastMileTravel": 1.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "1.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-07-04 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/subway-karol-bagh-patel-nagar-connaught-place-delhi-20055",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "305961",
//         "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/4bfad26d-f21e-44ff-b549-f123e30fcff1_305961.JPG",
//         "locality": "West Patel Nagar",
//         "areaName": "Near Shubash Jawalers",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Desserts",
//           "Ice Cream",
//           "Ice Cream Cakes"
//         ],
//         "avgRating": 4.6,
//         "veg": true,
//         "parentId": "582",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 16,
//           "lastMileTravel": 0.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "15-20 mins",
//           "lastMileTravelString": "0.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-west-patel-nagar-near-shubash-jawalers-delhi-305961",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "422811",
//         "name": "Dashi - Dimsum & Sushi Bar",
//         "cloudinaryImageId": "r2gipozznjw0ghzxf7xd",
//         "locality": "Rajinder Nagar",
//         "areaName": "Rajinder Nagar",
//         "costForTwo": "₹1000 for two",
//         "cuisines": [
//           "Japanese"
//         ],
//         "avgRating": 4.5,
//         "parentId": "262021",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 35,
//           "lastMileTravel": 2.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/dashi-dimsum-and-sushi-bar-rajinder-nagar-delhi-422811",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "492325",
//         "name": "Caterspoint",
//         "cloudinaryImageId": "aq9ujdegkrwzbtlhfurg",
//         "locality": "West Patel Nagar",
//         "areaName": "West Patel Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Italian",
//           "Salads",
//           "Beverages",
//           "Desserts"
//         ],
//         "avgRating": 4.2,
//         "parentId": "11011",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 22,
//           "lastMileTravel": 0.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "0.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/caterspoint-west-patel-nagar-delhi-492325",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "343711",
//         "name": "Chaayos Chai+Snacks=Relax",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_343711.JPG",
//         "locality": "Karol Bagh",
//         "areaName": "East Patel Nagar",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Bakery",
//           "Beverages",
//           "Chaat",
//           "Desserts",
//           "Home Food",
//           "Italian",
//           "Maharashtrian",
//           "Snacks",
//           "Street Food",
//           "Sweets"
//         ],
//         "avgRating": 4.4,
//         "parentId": "281782",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 1.1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "1.1 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 02:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
//               "description": "Delivery!"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-karol-bagh-east-patel-nagar-delhi-343711",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "51710",
//         "name": "Theobroma",
//         "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
//         "locality": "Karol Bagh",
//         "areaName": "East Patel Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Bakery",
//           "Desserts"
//         ],
//         "avgRating": 4.5,
//         "parentId": "1040",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 19,
//           "lastMileTravel": 1.1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "15-20 mins",
//           "lastMileTravelString": "1.1 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Desserts.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Desserts.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "15% OFF",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/theobroma-karol-bagh-east-patel-nagar-delhi-51710",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "508441",
//         "name": "Wow! Momo",
//         "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
//         "locality": "Patel Nagar Metro Station",
//         "areaName": "South Patel Nagar",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Tibetan",
//           "Healthy Food",
//           "Asian",
//           "Chinese",
//           "Snacks",
//           "Continental",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "parentId": "1776",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 1.1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "1.1 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Chinese.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Momos.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Momos.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹99"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/wow-momo-patel-nagar-metro-station-south-patel-nagar-delhi-508441",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "424197",
//         "name": "Juicy Lucy Burgers",
//         "cloudinaryImageId": "o6dxv5aqg0yndsncubwl",
//         "locality": "Kirti Nagar",
//         "areaName": "Kirti Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "American",
//           "Fast Food",
//           "Continental",
//           "Italian",
//           "Pizzas",
//           "Desserts"
//         ],
//         "avgRating": 4.3,
//         "parentId": "289269",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 34,
//           "lastMileTravel": 2.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "2.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 05:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹150 OFF",
//           "subHeader": "ABOVE ₹249",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/juicy-lucy-burgers-kirti-nagar-delhi-424197",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "22702",
//         "name": "Berco's -If You Love Chinese",
//         "cloudinaryImageId": "3344b8e498281fdcd461dc1b5f3b44d5",
//         "locality": "East Patel Nagar",
//         "areaName": "East Patel Nagar",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Chinese",
//           "Thai",
//           "Asian"
//         ],
//         "avgRating": 4.2,
//         "parentId": "471817",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 24,
//           "lastMileTravel": 1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Chinese.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-east-patel-nagar-delhi-22702",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "336330",
//         "name": "House of Chow",
//         "cloudinaryImageId": "6e97ac8f5c89213610309ef1940afa05",
//         "locality": "East Patel Nagar",
//         "areaName": "Karol Bagh",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Pan-Asian",
//           "Chinese",
//           "Thai",
//           "Oriental"
//         ],
//         "avgRating": 4,
//         "parentId": "9064",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "1.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-28 04:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹249",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/house-of-chow-east-patel-nagar-karol-bagh-delhi-336330",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "492326",
//         "name": "Saladspoint",
//         "cloudinaryImageId": "6116a2736e177c4a872d11a9d077584a",
//         "locality": "West Patel Nagar",
//         "areaName": "West Patel Nagar",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Salads",
//           "Healthy Food",
//           "Juices"
//         ],
//         "avgRating": 4.3,
//         "parentId": "8786",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 21,
//           "lastMileTravel": 0.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "0.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {

//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/saladspoint-west-patel-nagar-delhi-492326",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "800007",
//         "name": "Vital Bowls - Salads & more",
//         "cloudinaryImageId": "6d30adc4403bb25931e9c37fb43a35ee",
//         "locality": "DDA Market",
//         "areaName": "Rajendra Place",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Salads",
//           "Beverages",
//           "Keto"
//         ],
//         "avgRating": 3.7,
//         "parentId": "478149",
//         "avgRatingString": "3.7",
//         "totalRatingsString": "10+",
//         "sla": {
//           "deliveryTime": 35,
//           "lastMileTravel": 2,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-06-27 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹149"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/vital-bowls-salads-and-more-dda-market-rajendra-place-delhi-800007",
//         "type": "WEBLINK"
//       }
//     }
//   ]
// const RestaurantCard = (props) => {
//       return (
//         <div className="res-card" style = {styleCard}>
//             <img className = "res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>4.2 StarRating</h4>
//             <h4>38 mins Delivery time</h4>

//         </div>  )
// } 
// const RestaurantCard = (props) => {
//     const {resdata} = props; //we will destructure this array
//     const {
//         name,
//         cuisines,
//         avgRating,
//         costForTwo,
//         deliveryTime
//     } = resdata?.info;
//     return (
//       <div className="res-card" style = {styleCard}>
//           <img className = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}/>
//           <h3>{resdata.info.name}</h3>
//           <h4>{resdata.info.cuisines.join(", ")}</h4>
//           <h4>{resdata.info.avgRating}</h4>
//           <h4>{resdata.info.costForTwo}</h4>
//           <h4>{resdata.info.sla.deliveryTime}</h4>

//       </div>  )
// } 
// const Body = () => {
//     return(
//         <div className = "body">
//             <div className = "search">search</div>
//             <div className = "res-container">
//                 {/* <RestaurantCard resdata = {resList[0]} />
//                 <RestaurantCard resdata = {resList[2]} /> */}
//                 {resList.map((restaurant) => (
//                     <RestaurantCard key = {restaurant.info.id} resdata = {restaurant} />//unique key to avoid warning :each child in a list hould have a unique "key" prop 
//                 ))}
//             </div>
//         </div>
//     )
// }
//
//

//
// till here episode 5 part 1 now we clean our code this commemted code is for learning purpose
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {

    return (
        <div className="app">
            <Header/>
            <Body/>
            //Footer
        </div>
    )
}

const appRourter = createBrowserRouter ([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>// To diplay cutomize compomnent on error 
    },
    {
        path : "/about",
        element : <About/>  
    },
    {
        path : "/contact",
        element : <Contact/>  
    }

])


root.render(<RouterProvider router = {appRourter}/>);