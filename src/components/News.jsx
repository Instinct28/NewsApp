import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  static defaultProps = {
    country : "us",
    pageSize : 5,
    category : "general"  
  };

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  };

  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : true,
      page : 1,
      totalResults : 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async updateNews(){
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
    this.props.setProgress(100);
  };

  componentDidMount = async () => {
    this.updateNews();
  }

  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  fetchMoreData = async () => {
    this.setState({page : this.state.page + 1,
                  loading: true
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults,
      loading : false
    })
  };

  render() {
    return (
        <>
          <h1 className='text-center'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          { this.state.loading && <Spinner/> }
          <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.totalResults !== this.state.articles.length} loader={this.state.loading && <Spinner/>}>
          <div className='container'>
            <div className='row mt-4'>
              {this.state.articles.map((element, index)=>{
                return <div className='col-md-4' key={index}>
                  <NewsItem title={(element.title === null && element.title.length >= 45) ? element.title.slice(0, 45) : element.title} description={(element.title === null && element.description.length >= 88) ? element.description.slice(0, 88) : element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              })}         
            </div>
            </div>
          </InfiniteScroll>
        </>
    )
  }
}
