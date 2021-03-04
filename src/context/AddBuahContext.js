import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AddBuahContext = createContext();

const AddBuahContextProvider = ({ children }) => {
  const [addBuah, setAddBuah] = useState({
    name: "",
    price: "",
    weight: null,
  });

  const tambahBuah = (data) => {
    axios
      .post("http://backendexample.sanbercloud.com/api/fruits", {
        data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AddBuahContext.Provider value={[addBuah, setAddBuah, tambahBuah]}>
      {children}
    </AddBuahContext.Provider>
  );
};

export default AddBuahContextProvider;
