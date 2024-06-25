import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
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
const Header = () => {
    return(
        <div className = "header">
            
            <div className="logo-container">
                <img className = "logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design-1-2048x1152.jpg" alt = "Logo"/>
            </div>
            <div className="nav-items">
                <ul className = "navitems">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>    
                </ul>

            </div>
        </div>
    )
}

//Inline styling in JSX  , We will create a js object and then later call it in JSX
const styleCard = {
    backgroundColour : "#F0F0F0"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style = {styleCard}>
            <img className = "res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
            <h3>Meghana Foods</h3>
            <h4>Briyani, North Indian, Asian</h4>
            <h4>4.2 StarRating</h4>
            <h4>38 mins Delivery time</h4>

        </div>
    )
}
const Body = () => {
    return(
        <div className = "body">
            <div className = "search">search</div>
            <div className = "res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />


            </div>
        </div>
    )
}
const AppLayout = () => {

    return (
        <div className="app">
            <Header/>
            <Body/>
            //Footer
        </div>
    )
}


root.render(<AppLayout/>)