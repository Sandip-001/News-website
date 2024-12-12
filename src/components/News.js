import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 10;

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  } // ai function tar jonno news ar oopore ja heading asche sei heading ta category wise asbe

  // Function to fetch and update the news based on the current page
  const updateNews = async () => {
    try {
      const apiKey = "d52cd120ee6c462292ce931fb9bd37e8"; // Use your actual API key
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      props.setProgress(30); // Start the loading bar
      setLoading(true);

      let data = await fetch(url);
      let parsedData = await data.json();

      props.setProgress(60); // Continue loading progress

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

      props.setProgress(100); // Complete loading bar
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Fetch news when the component mounts
  useEffect(() => {
    updateNews();
  }, []);

  // Function to fetch more data for infinite scroll
  const fetchMoreData = async () => {
    const apiKey = "d52cd120ee6c462292ce931fb9bd37e8"; // Use your actual API key
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setPage(nextPage);
  };

  return (
    <>
      <h1 className="text-center" style={{margin : '80px 0px 35px 0px'}}>NewsRaja - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
