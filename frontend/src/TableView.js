import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TableView() {
  const [number, setNumber] = useState("");
  const [viewData, setViewData] = useState("");
  const getData = async () => {
    await axios
      .get("http://localhost:8080/getRandomData/" + number)
      .then((res) => {
        setViewData(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        setViewData(err);
      });
  };
  return (
    <div>
        <Link to="/cardview" >Card View</Link>
        <br/>
        <Link to="/pagination" >Pagination View</Link>

        <br/>
      <label>
        Enter the Number:
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          name="number"
        />
      </label>
      <br/>
      <input type="submit" onClick={getData} value="Load" />
      {viewData && (
        <table id="tablecss" >
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {viewData.map((data, i) => (
              <tr key={i}>
                <td>{data.date}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableView;
