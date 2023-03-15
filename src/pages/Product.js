import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "./product.css";

const Product = () => {

  const navigate = useNavigate();
  const adduser = () => {
    navigate("/register");
  }

  return (
    <>

      <div className='d-flex product_div'>
        <Carousel>
          <Carousel.Item>
            <a href="/menus" className='text-decoration-none'>
              <img
                className="d-block w-100 carousel"
                src="https://content3.jdmagicbox.com/comp/def_content/coffee_shops/default-coffee-shops-7.jpg"
                alt="First slide"
              /></a>

            <Carousel.Caption>
              <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href="/menus" className='text-decoration-none'>
              <img
                className="d-block w-100 carousel"
                src="https://i.pinimg.com/736x/6a/e8/cb/6ae8cbf77d95f34c64e2c3d4d509d8ed--cafe-coffee-day-cappuccino.jpg"
                alt="Second slide"
              /></a>
            <Carousel.Caption>
              <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href="/menus" className='text-decoration-none'>
              <img
                className="d-block w-100 carousel"
                src="https://static.toiimg.com/thumb/54661662.cms?imgsize=210122&width=800&height=800"
                alt="Third slide"
              /></a>


            <Carousel.Caption>
              <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <div>
          <Carousel>
            <Carousel.Item>
              <a href="/menus" className='text-decoration-none'>
                <img
                  className="d-block w-100 carousel"
                  src="https://images-gmi-pmc.edge-generalmills.com/3e3280e6-9867-4921-a9f8-7b26eb334b0b.jpg"
                  alt="First slide"
                />
              </a>

              <Carousel.Caption>
                <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/menus" className='text-decoration-none'>
                <img
                  className="d-block w-100 carousel"
                  src="https://i0.wp.com/www.darrycakes.com/wp-content/uploads/2017/01/1-1.jpg?fit=3072%2C4608&ssl=1"
                  alt="Second slide"
                />
              </a>


              <Carousel.Caption>
                <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/menus" className='text-decoration-none'>
                <img
                  className="d-block w-100 carousel"
                  src="https://www.norinesnest.com/wp-content/uploads/2018/01/Raspberry-Brownie-Sundae-2018-18-1-e1585257683269.jpg.webp"
                  alt="Third slide"
                />
              </a>


              <Carousel.Caption>
                <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel>
            <Carousel.Item>
              <a href="/menus" className='text-decoration-none'>
                <img
                  className="d-block w-100 carousel"
                  src="https://vismaifood.com/storage/app/uploads/public/68a/a41/095/thumb__700_0_0_0_auto.jpg"
                  alt="First slide"
                />
              </a>

              <Carousel.Caption>
                <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/menus" className='text-decoration-none'>
                <img
                  className="d-block w-100 carousel"
                  src="https://img.delicious.com.au/eiZPjfLW/del/2015/10/strawberry-rhubarb-and-custard-trifle-14836-2.jpg"
                  alt="Second slide"
                />
              </a>


              <Carousel.Caption>
                <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/menus" className='text-decoration-none'>
                <img
                  className="d-block w-100 carousel"
                  src="https://vegehomecooking.com/wp-content/uploads/2022/05/MangoCustardFeaturedImage.jpg"
                  alt="Third slide"
                />
              </a>


              <Carousel.Caption>
                <Button variant="primary" size="lg" onClick={adduser}>Order Now</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Product
