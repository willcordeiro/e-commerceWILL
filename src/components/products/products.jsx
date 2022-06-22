import React from "react";
import "./products.css";
import img1 from "../assets/E-slider-images/1.jpg";
import img2 from "../assets/E-slider-images/2.jpg";
import img3 from "../assets/E-slider-images/3.jpg";
import img4 from "../assets/E-slider-images/4.jpg";
const Products = () => {
  return (
    <>
      <div className="boxbox">
        <div className="item-a col">
          <div className="box">
            <div className="slide-img">
              <img src={img1} className="img1" />
              <div className="overlay">
                <a href="" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="" className="price">
                  Rabbed Cardigan
                </a>
                <span> Noe Arrival</span>
              </div>
              <a href="" className="price">
                $23
              </a>
            </div>
          </div>
        </div>

        <div className="item-a col">
          <div className="box">
            <div className="slide-img">
              <img src={img2} className="img1" />
              <div className="overlay">
                <a href="" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="" className="price">
                  Rabbet summer
                </a>
                <span> Noe Arrival</span>
              </div>
              <a href="" className="price">
                $78
              </a>
            </div>
          </div>
        </div>
        <div className="item-a col">
          <div className="box">
            <div className="slide-img">
              <img src={img3} className="img1" />
              <div className="overlay">
                <a href="" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="" className="price">
                  Rabbet dragon
                </a>
                <span> Noe Arrival</span>
              </div>
              <a href="" className="price">
                $36
              </a>
            </div>
          </div>
        </div>
        <div className="item-a col">
          <div className="box">
            <div className="slide-img">
              <img src={img4} className="img1" />
              <div className="overlay">
                <a href="" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="" className="price">
                  Rabbet top
                </a>
                <span> Noe Arrival</span>
              </div>
              <a href="" className="price">
                $50
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Products;
