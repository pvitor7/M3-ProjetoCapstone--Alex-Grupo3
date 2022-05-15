/* eslint-disable */
import axios from "axios";
import personalPlants from "./actions";

function getPrivatePlants(dispatch) {
  
  const id = JSON.parse(localStorage.getItem("myPlantId"));
  const token = JSON.parse(localStorage.getItem("myPlantToken"));
  
  axios
    .get(`https://my-plants-app.herokuapp.com/users/${id}?_embed=plants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data.plants)
      dispatch(personalPlants(res.data.plants));
    })
    .catch((error) => console.log(error));
}

export default getPrivatePlants;
