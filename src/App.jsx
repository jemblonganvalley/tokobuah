import { useContext, useState } from "react";
import "./App.css";
import { DataBuahContext } from "./context/DataBuahContext";
import axios from "axios";
import { tambahBuah } from "./api/tambahBuah";
import { editBuah } from "./api/editBuah";

function App() {
  const [dataBuah] = useContext(DataBuahContext);
  const [editModal, showEditModal] = useState(false);
  const [defaultValue, setDefaultValue] = useState();

  const handleEdit = (x) => {
    showEditModal(true);
    setDefaultValue(x);
  };

  return (
    <div className="App">
      {editModal && (
        <div
          className="edit_modal"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.9)",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "whitesmoke",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
            onClick={() => {
              showEditModal(!editModal);
            }}
          >
            close
          </button>
          <form
            style={{
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            onSubmit={(e) => {
              e.preventDefault();

              editBuah(e.target.key.value, {
                name: e.target.name.value,
                price: e.target.price.value,
                weight: e.target.weight.value,
              });
            }}
          >
            <label htmlFor="name">nama buah</label>
            <input
              type="text"
              id="name"
              value={defaultValue.name}
              onChange={(e) => {
                setDefaultValue({
                  ...defaultValue,
                  name: e.target.value,
                });
              }}
            />

            <label htmlFor="price">harga</label>
            <input type="number" id="price" value={defaultValue.price} />
            <input type="hidden" id="key" value={defaultValue.id} />

            <label htmlFor="weight">weight</label>
            <input type="number" id="weight" value={defaultValue.weight} />

            <button type="submit">submit</button>
          </form>
        </div>
      )}

      <header className="App-header">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nama</th>
              <th>harga</th>
              <th>weight</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {dataBuah.length > 0 &&
              dataBuah.map((e) => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>{e.weight}</td>
                  <td>
                    <button
                      className="material-icons"
                      onClick={() => {
                        handleEdit(e);
                      }}
                    >
                      edit
                    </button>
                    <button className="material-icons">delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <h3>hello</h3>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={(e) => {
            e.preventDefault();

            tambahBuah({
              name: e.target.name.value,
              price: e.target.price.value,
              weight: e.target.weight.value,
            });
          }}
        >
          <label htmlFor="name">nama buah</label>
          <input type="text" id="name" />

          <label htmlFor="price">harga</label>
          <input type="number" id="price" />

          <label htmlFor="weight">weight</label>
          <input type="number" id="weight" />

          <button type="submit">submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
