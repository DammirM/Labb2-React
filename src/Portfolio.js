import React, { useState, useEffect } from "react";
import axios from "axios";
import STAR from "./Images/STAR.jfif";

function Portfolio() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios("https://api.github.com/users/DammirM/repos");

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="load">Loading ...</div>
      ) : (
        <section className="sect">
          <h1>My Portfolio</h1>
          {data.map((item) => (
            <li key={item.id}>
              <h2>
                {item.name} - {item.stargazers_count}{" "}
                <img className="star" src={STAR}></img>
              </h2>
              <img src={item.owner.avatar_url}></img>
              <a href={item.html_url} target="_blank" title="Link to the repo">
                Github Link
              </a>
            </li>
          ))}
        </section>
      )}
    </>
  );
}

export default Portfolio;
