import axios from "axios";
import React, { useEffect, useState } from "react";
import { Posts } from "./Posts";
import { Pagenum } from "./Pagenum";// import { Posts } from "./Posts";

const Page = () => {
  const [number, setNumber] = useState("");
  const [viewData, setViewData] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage]=useState(1);
  const [postsPerPage]=useState(5);
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
  const indexOfLastPost =currentPage *postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = viewData.slice(indexOfFirstPosts,indexOfLastPost);

  const paginate =(pageNumber) => setCurrentPage(pageNumber)
  // console.log(re);
  return (
    <div>
      <label>Enter the number</label>
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          name="number"
        />  
      <input type="submit" onClick={getData} value="Load" />
      <Posts viewData={currentPosts} loading={loading}/>
      <Pagenum postsPerPage={postsPerPage} totalPosts={viewData.length} paginate={paginate}/>
          </div>
  );
};

export default Page;
