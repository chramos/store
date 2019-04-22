import React, { Component } from 'react';
import { Carousel } from 'antd';

const images = [
    require('../../assets/carousel/1.jpg'),
    require('../../assets/carousel/2.jpg'),
    require('../../assets/carousel/3.jpg'),
]

class Home extends Component {
    render() {
        return (
            <div className="page">
                <Carousel autoplay>
                    <div><img src={ images[0] } alt="" className="img-responsive"/></div>
                    <div><img src={ images[1] } alt="" className="img-responsive"/></div>
                    <div><img src={ images[2] } alt="" className="img-responsive"/></div>
                </Carousel>
            </div>
        );
    }
}

export default Home;