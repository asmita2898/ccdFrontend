import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tables from "../components/Tables";
import Spiner from '../components/Spiner';
import "./home.css"
import { addData, dltdata, updateData } from '../components/ContextProvider';
import Alert from 'react-bootstrap/Alert';
import { deletfunc, usergetfunc } from '../services/Apis';
import { toast } from 'react-toastify';

const Home = () => {

  const [userdata, setUserData] = useState([]);
  const [showspin, setShowSpin] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { useradd, setUseradd } = useContext(addData);
  const { update, setUpdate } = useContext(updateData);
  const { deletedata, setDLtdata } = useContext(dltdata);

  //get user
  const userGet = async () => {
    const response = await usergetfunc(search, category);

    if (response.status === 200) {
      setUserData(response.data)
    } else {
      console.log("error for get user data")
    }
  }

  //user delete
  const deleteUser = async (id) => {

    const response = await deletfunc(id);
    if (response.status === 200) {
      userGet();
      setDLtdata(response.data);
    } else {
      toast.error("error")
    }
  }

  useEffect(() => {
    userGet();
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [search, category])

  return (
    <>

      {
        useradd ? <Alert variant="success" onClose={() => setUseradd("")} dismissible>
          {useradd.fname.toUpperCase()}  Added Successfully</Alert> : ""
      }

      {
        update ? <Alert variant="primary" onClose={() => setUpdate("")} dismissible>
          {update.fname.toUpperCase()}  Updated Successfully</Alert> : ""
      }

      {
        deletedata ? <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>
          {deletedata.fname.toUpperCase()} Deleted Successfully</Alert> : ""
      }

      <div className="container">
        <div className="main_div">
          {/* search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">

                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />

                <Button variant="success" className='search_btn'>Search</Button>
              </Form>
            </div>

            {/*category*/}

            <div className="filter_category">
              <div className="filter">
                <h3>Filter By Category</h3>
                <div className="category d-flex justify-content-between">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="category"
                    value={"All"}
                    onChange={(e) => setCategory(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Coffee`}
                    name="category"
                    value={"Coffee"}
                    onChange={(e) => setCategory(e.target.value)}

                  />
                  <Form.Check
                    type={"radio"}
                    label={`Brownie`}
                    name="category"
                    value={"Brownie"}
                    onChange={(e) => setCategory(e.target.value)}

                  />
                  <Form.Check
                    type={"radio"}
                    label={`Custard`}
                    name="category"
                    value={"Custard"}
                    onChange={(e) => setCategory(e.target.value)}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          showspin ? <Spiner /> : <Tables
            userdata={userdata}
            deleteUser={deleteUser}
            userGet={userGet}
          />
        }

      </div>

    </>
  )
}

export default Home
