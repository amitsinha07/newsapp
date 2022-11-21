import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTatalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apikey=${props.apiKey}&page=${page}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTatalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apikey=${props.apiKey}&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTatalResults(parsedData.totalResults);
  };
  return (
    <>
      <h1 style={{ margin: '35px 0px', marginTop: '90px' }} className="text-center">
        NewsMonkey - Top {capitalize(props.category)} Headlines
      </h1>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        key="infinitScrollBar"
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => {
              return (
                <div className="col-md-4 my-2" key={article.url}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    imgUrl={article.urlToImage}
                    url={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
