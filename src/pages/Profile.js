import React, { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { singleUsergetfunc } from '../services/Apis';
import moment from "moment"

const Profile = () => {

  const [userprofile, setUserProfile] = useState({});
  const [showspin, setShowSpin] = useState(true);

  const { id } = useParams();
  // console.log(id);

  const userProfileGet = async () => {
    const response = await singleUsergetfunc(id);

    if (response.status === 200) {
      setUserProfile(response.data)
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    userProfileGet();
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [id])

  return (
    <>
      {
        showspin ? <Spiner /> :
          <div className="container">
            <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
              <Card.Body>


                <div className="text-center">
                  <h3>{userprofile.fname + userprofile.lname}</h3>
                  <h4><i class="fa-solid fa-envelope email" style={{ color: "rgb(238,101,122)" }}></i>&nbsp;:- <span>{userprofile.email}</span></h4>
                  <h5><i class="fa-solid fa-mobile"></i>&nbsp;:- <span>{userprofile.mobile}</span> </h5>
                  <h4><i class="fa-solid fa-martini-glass-citrus"></i>&nbsp;:- <span>{userprofile.category}</span></h4>
                  <h4><i class="fa-solid fa-location-pin location location" style={{ color: "rgb(82, 82, 250)" }}></i>&nbsp;:- <span>{userprofile.location}</span> </h4>
                  <h4>Type&nbsp;:- <span>{userprofile.choice}</span> </h4>
                  <h5>Created: <i class="fa-solid fa-calendar-days calendar calendar" style={{ color: "rebeccapurple" }}></i>&nbsp;&nbsp;:- <span>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span></h5>
                  <h5>Updated: <i class="fa-solid fa-calendar-days calendar calendar" style={{ color: "rebeccapurple" }}></i>&nbsp;&nbsp;:- <span>{moment(userprofile.dateUpdated).format("DD-MM-YYYY")}</span></h5>
                </div>

              </Card.Body>
            </Card>
          </div>
      }

    </>
  )
}
export default Profile
