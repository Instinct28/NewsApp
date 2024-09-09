import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
          <div style={{display : "flex", justifyContent : "flex-end", position : "absolute", right : "0"}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageURL?"https://cdn.vox-cdn.com/thumbor/oI2pxbSFckh3A-gnFCC6bnexdok=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/25602421/Instagram_Story_Comments_4.png":imageURL} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
