import React, { Component } from "react";
import Slider from "react-slick";
import './ReviewAutoPlay.scss'

class ReviewAutoPlay extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
    }
  }

  componentDidMount = () => {
    fetch('/data/productInfos.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.reviews)
        this.setState({
          reviews: data.reviews,
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { reviews } = this.state
    const rateStar = <i class="fas fa-star" />
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      speed: 4000,
      autoplaySpeed: 2000,
      draggable: true,
      cssEase: "linear"
    };

    return (
      <div className="ReviewAutoPlay">
        <h3>생생한 리뷰</h3>
        <Slider {...settings}>
        {reviews &&
          reviews.map((review, index) => {
            return(
              <li key={index}>
                <img alt="product image" src={review.imgUrl} />
                <span className="productName">{review.productName}</span>
                <div className="reviewRate">
                  {rateStar}
                  {rateStar}
                  {rateStar}
                  {rateStar}
                  {rateStar}
                  <span>{review.rate}</span>
                </div>
                <div className="reviewContents">
                  <p>{review.text}</p>
                  <img alt="Review photo" src="/images/Main/main-slider-04.jpg"/>
                </div>
                <div className="idAndCreatedAt">
                  <span>{review.userId}</span>
                  <span>{review.createdAt}</span>
                </div>
              </li>
            )
          })
        }
        </Slider>
      </div>
    );
  }
}

export default ReviewAutoPlay