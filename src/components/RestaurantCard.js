import { LOGO_URL } from "../utils/constant";

const RestaurnatCard = (props) => {
  const { resData } = props;
  const Data = resData?.info;
  // console.log(Data);
  return (
    <div
      data-testid="resCard"
      className="res-card w-[250px] m-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-200 flex flex-col"
    >
      <div>
        <img
          className="rounded-lg h-28 w-full"
          src={LOGO_URL + Data.cloudinaryImageId}
        ></img>
      </div>
      <div className="h-44">
        <h3 className="font-bold text-md">{Data.name}</h3>
        <p className="text-sm">{Data.cuisines.join(", ")}</p>
        <h4>{Data.avgRating} ⭐</h4>
        <h4>{Data.costForTwo}</h4>
        <h4>There In {Data.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

// Higher Order Component

// input - restaurantCard => restaurantCardOpen

export const withPromotedLabel = (RestaurnatCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
           Promoted
        </label>
        <RestaurnatCard {...props} />
      </div>
    );
  };
};

export default RestaurnatCard;
