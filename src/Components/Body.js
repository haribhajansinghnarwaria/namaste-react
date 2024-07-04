import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [listOffileterdRestaurant,setlistOffileterdRestaurant] = useState([]);
    const [ apiData , setApiData] = useState({});
    useEffect (() => { 
        fetchData();
    }, []);
    const[searchText,setsearchText] = useState();
    const fetchData = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json(); 
        // just to check data is coming and what is the format of the data 
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOffileterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
        //Optional Chaining
       
    }
    // if(
    //     ListOfRestaurant.length === 0
    // ){ return (
      
    //       <Shimmer/>
      
    // )};
    return ListOfRestaurant.length === 0 ?   <Shimmer/> :(
        <div className = "body">
            <div className = "filter">
                <div className = "search">
                    <input type = "text" placeholder = "Search" value =  {searchText} onChange= {
                        (e) => setsearchText(e.target.value)
                    }/>
                    <button className="search-btn" onClick = {() => {
                    const filteredList = ListOfRestaurant.filter((restaurant) => 
                    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setlistOffileterdRestaurant(filteredList);}
                    // console.log("search")
                    } >Search</button>
                </div>
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
                {listOffileterdRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resdata = {restaurant} />//unique key to avoid warning :each child in a list hould have a unique "key" prop 
                ))}
            </div>
        </div>
    )
}

export default Body;