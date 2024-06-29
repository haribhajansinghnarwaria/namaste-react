import { CDN_URL } from "../Utils/constants";

const styleCard = {
    backgroundColour : "#F0F0F0"
}
const RestaurantCard = (props) => {
    const {resdata} = props; //we will destructure this array
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resdata?.info;
    return (
      <div className="res-card" style = {styleCard}>
          <img className = "res-logo" src = { CDN_URL+ resdata.info.cloudinaryImageId}/>
          <h3>{resdata.info.name}</h3>
          <h4>{resdata.info.cuisines.join(", ")}</h4>
          <h4>{resdata.info.avgRating}</h4>
          <h4>{resdata.info.costForTwo}</h4>
          <h4>{resdata.info.sla.deliveryTime}</h4>

      </div>  )
}

export default RestaurantCard;