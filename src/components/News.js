import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=760341af72fd4544a6a240193ee15ce9";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760341af72fd4544a6a240193ee15ce9&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles,
      page: this.state.page -1 
    });
  }

  handleNextClick = async () =>{
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760341af72fd4544a6a240193ee15ce9&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        page: this.state.page + 1,
        articles: parsedData.articles
       })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4 my-2" key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imgUrl={article.urlToImage}
                  url={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
      </div>
    );
  }
}

export default News;
