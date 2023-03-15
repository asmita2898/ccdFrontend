import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./menu.css";

const Menu = () => {
  return (
    <>
      <Row xs={1} md={3} className="g-4">

        <Col>
          <Card>
            <Card.Body>
              <img src="https://www.incimages.com/uploaded_files/image/1024x576/getty_500740897_200013331653767347294_333325.jpg" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Cappuccino</p>
                <p className='price'>Rs.250</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>

            <Card.Body>
              <img src="https://i.pinimg.com/736x/6a/e8/cb/6ae8cbf77d95f34c64e2c3d4d509d8ed--cafe-coffee-day-cappuccino.jpg" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Hot Velvet Coffee</p>
                <p className='price'>Rs.380</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>

            <Card.Body>
              <img src="https://static.toiimg.com/thumb/54661662.cms?imgsize=210122&width=800&height=800" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Hazelnut Hot Chocolate</p>
                <p className='price'>Rs.270</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      </Row>

      <Row xs={1} md={3} className="g-4">

        <Col>
          <Card>
            <Card.Body>
              <img src="https://images-gmi-pmc.edge-generalmills.com/3e3280e6-9867-4921-a9f8-7b26eb334b0b.jpg" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Maple Cream Brownie Dessert</p>
                <p className='price'>Rs.410</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>

            <Card.Body>
              <img src="https://i0.wp.com/www.darrycakes.com/wp-content/uploads/2017/01/1-1.jpg?fit=3072%2C4608&ssl=1" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Fudge Brownie Ice Cream</p>
                <p className='price'>Rs.350</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>

            <Card.Body>
              <img src="https://www.norinesnest.com/wp-content/uploads/2018/01/Raspberry-Brownie-Sundae-2018-18-1-e1585257683269.jpg.webp" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Raspberry Brownie Sundae </p>
                <p className='price'>Rs.440</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      </Row>

      <Row xs={1} md={3} className="g-4">

        <Col>
          <Card>
            <Card.Body>
              <img src="https://vismaifood.com/storage/app/uploads/public/68a/a41/095/thumb__700_0_0_0_auto.jpg" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Mix Custard</p>
                <p className='price'>Rs.269</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>

            <Card.Body>
              <img src="https://img.delicious.com.au/eiZPjfLW/del/2015/10/strawberry-rhubarb-and-custard-trifle-14836-2.jpg" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Strawberry custard trifle</p>
                <p className='price'>Rs.355</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>

            <Card.Body>
              <img src="https://vegehomecooking.com/wp-content/uploads/2022/05/MangoCustardFeaturedImage.jpg" alt=""
                height="300px" width="100%" />
              <Card.Text>
                <p className='menu_name'>Mango Custard</p>
                <p className='price'>Rs.328</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      </Row>
    </>
  )
}

export default Menu
