import React, { Component } from "react";
import Slider from "react-slick";
import './MainSlider.scss'

class MainSlider extends Component {

  constructor() {
    super()
    this.state = {
      mainSliderImages: []
    }
  }

  componentDidMount = () => {
    fetch('/data/productInfos.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          mainSliderImages: data.mainSliderImages
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { mainSliderImages } = this.state
    const SETTING = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      draggable: true,
    }
    
    return (
    <div className="MainSlider">
        <Slider {...SETTING}>
          {mainSliderImages &&
            mainSliderImages.map(image => {
              return (
                <div key={image.id}>
                  <img src={image.url} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}

export default MainSlider