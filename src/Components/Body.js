import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";
const Body = () => {
    return(
        <div className = "body">
            <div className = "search">search</div>
            <div className = "res-container">
                {/* <RestaurantCard resdata = {resList[0]} />
                <RestaurantCard resdata = {resList[2]} /> */}
                {resList.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resdata = {restaurant} />//unique key to avoid warning :each child in a list hould have a unique "key" prop 
                ))}
            </div>
        </div>
    )
}

export default Body;