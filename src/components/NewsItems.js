import React from "react";

const NewsItems = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
      <div className="my-3">
        <div className="card">
          <div style={{display : 'flex', justifyContent : 'flex-end', position : 'absolute', right : '0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1750021038.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"UnKnown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel= "noopener noreferrer" className="btn btn-sm btn-primary">Read now</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;