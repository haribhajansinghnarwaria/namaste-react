import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
    return(
        <div className = "body">
            <div className = "filter">
                <button className="filter-btn" 
                onClick = {()=> {
                    const filteredList = ListOfRestaurant.filter(
               (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }
            }
                >Top Rated Restaurant</button>
            </div>
            <div className = "res-container">
                {/* <RestaurantCard resdata = {resList[0]} />
                <RestaurantCard resdata = {resList[2]} /> */}
                {ListOfRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resdata = {restaurant} />//unique key to avoid warning :each child in a list hould have a unique "key" prop 
                ))}
            </div>
        </div>
    )
}

export default Body;