import React,{Component} from "react";

class NewsItem extends Component {


    render() { 
        let {title, description, imgUrl, url} = this.props;
        return (
          <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0,45)} ...</h5>
              <p className="card-text">
                {description.slice(0, 100)}
              </p>
              <a href={url} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">
                Read More
              </a>
            </div>
          </div>
        );
    }
}
 
export default NewsItem;