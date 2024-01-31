import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./spinner";
export default function NewsC(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [Removed, setRemoved] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let pdata = await data.json();
    if (pdata.articles) {
      let filteredArticles = pdata.articles.filter(
        (article) => article.url !== "https://removed.com"
      );
      setLoading(false);
      setArticles(filteredArticles);
      setRemoved(pdata.articles.length - filteredArticles.length);
      setTotalResults(pdata.totalResults);
    }
  };
  useEffect(() => {
  window.scrollTo(0, 0);
   updateNews() ; 
  }, [])
  

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
   
    let data = await fetch(url);
    let pdata = await data.json();
    if (pdata.articles) {
      let filteredArticles = pdata.articles.filter(
        (article) => article.url !== "https://removed.com"
      );
      setArticles(articles.concat(filteredArticles));
      setRemoved(Removed + pdata.articles.length - filteredArticles.length);
      setTotalResults(pdata.totalResults);
    }
  };

  return (
    <div  style={{ position: "relative", top: "56px", background: "red" }}>
      { loading && (
        <div
          style={{
            background: "aqua",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <div style={{ position: "absolute", left: "50vw", top: "50vh" }}>
            <Spinner />
          </div>
        </div>
      )}
      <h1 className="text-center"> Top Headlines </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length + Removed !== totalResults}

        loader={
          articles.length + Removed <= totalResults ? (
            <Spinner />
          ) : (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          )
        }
        scrollableTarget="scrollableDiv"
      >
        <div
          style={{
            display: "flex",
            background: "red",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {articles &&
            articles.map((element) => {
              return (
                element.title !== undefined &&
                element.title !== null && (
                  <div
                    key={element.url}
                    className="mx-2 my-2"
                    style={{
                      display: "inline-block",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                    />
                  </div>
                )
              );
            })}
        </div>
      </InfiniteScroll>

      {/* /* /* //       <div className="container d-flex justify-content-between">
    // //       <button disabled={state.page<=1}type="button" className="btn btn-dark" onClick={ handlePrevClick}>&laquo;  Prev</button>
    // //       <button  disabled={state.page +1 >Math.ceil(state.totalResults/props.pagesize)} type="button" className="btn btn-dark" onClick={ handleNextClick}>Next &raquo;</button>
    // //       </div>
    // // </div> */}
    </div>
  );
}

NewsC.defaultProps = {
  country: "in",
  pagesize: 20,
};
NewsC.propTypes = {
  category: PropTypes.string,
  pagesize: PropTypes.number,
  apikey: PropTypes.string,
};
