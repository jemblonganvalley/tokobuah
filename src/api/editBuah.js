import axios from "axios";

export const editBuah = (id, data) => {
  axios
    .put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
