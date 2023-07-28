import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "cb1f6d56c1774d9faa34cbdfdc5956b0";
const apiUrl = "https://newsapi.org/v2/everything";

export default function NewsApp() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            apiKey,
            q: "AI",
            sortBy: "popularity",
            pageSize: 9,
          },
        });

        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div>
      <ul className="articles">
        {newsData.map((article, index) => (
          <li articleskey={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              <h2>{article.title}</h2>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}