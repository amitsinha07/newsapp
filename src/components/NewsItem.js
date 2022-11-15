import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url, author, date, source } = this.props;
    return (
      <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
              {source}
            </span>
        <img
          src={
            !imgUrl
              ? "https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
  
          </h5>
          <p className="card-text">{description}</p>
          <p>
            <span className="badge text-bg-primary"></span>
          </p>
          <p className="card-text">
            <small class="text-muted">
              By  {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
