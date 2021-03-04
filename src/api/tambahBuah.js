import axios from "axios";

export const tambahBuah = (data) => {
  axios
    .post("http://backendexample.sanbercloud.com/api/fruits", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
