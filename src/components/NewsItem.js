import React,{Component} from "react";

class NewsItem extends Component {


    render() { 
        let {title, description, imgUrl, url} = this.props;
        return (
          <div className="card" style={{width: "18rem"}}>
            <img src={!imgUrl?"https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png":imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title} ...</h5>
              <p className="card-text">
                {description}
              </p>
              <a href={url} rel='noreferrer' target='_blank' className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        );
    }
}
 
export default NewsItem;