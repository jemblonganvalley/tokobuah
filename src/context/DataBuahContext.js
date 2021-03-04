import React, { createContext, useState } from "react";
import axios from "axios";

export const DataBuahContext = createContext();

const DataBuahProvider = ({ children }) => {
  let [dataBuah, setDataBuah] = useState([]);

  axios
    .get("http://backendexample.sanbercloud.com/api/fruits")
    .then((res) => {
      setDataBuah(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <DataBuahContext.Provider value={[dataBuah]}>
      {children}
    </DataBuahContext.Provider>
  );
};

export default DataBuahProvider;
