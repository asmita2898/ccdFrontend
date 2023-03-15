import React, { useContext, useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import "./register.css"
import Spiner from '../components/Spiner';
import { registerfunc } from '../services/Apis';
import 'react-toastify/dist/ReactToastify.css';
import { addData } from '../components/ContextProvider';



const Register = () => {

    const [inputdata, setInputData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        category: "",
        location: ""
    });

    const [choice, setChoice] = useState("Cold"); //by default value will be cold

    const [showspin, setShowSpin] = useState(true);
    const navigate = useNavigate();

    const { useradd, setUseradd } = useContext(addData);

    //status options
    const options = [
        { value: 'Cold', label: 'Cold' },
        { value: 'Hot', label: 'Hot' },

    ];

    //setInput value
    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value })

    }

    //choice set
    const setChoiceValue = (e) => {
        setChoice(e.value);
    }

    //submit user data
    const submitUserData = async (e) => {
        e.preventDefault();

        const { fname, lname, email, mobile, category, location } = inputdata;

        if (fname === "") {
            toast.error("Please Enter Your First Name!")
        }
        else if (lname === "") {
            toast.error("Please Enter Your Last Name!")
        }
        else if (email === "") {
            toast.error("Please Enter Your Email!")
        }
        else if (!email.includes("@")) {
            toast.error("Please Enter Valid Email!")
        }
        else if (mobile === "") {
            toast.error("Please Enter Your Mobile Number!")
        }
        else if (mobile.length > 10) {
            toast.error("Please Enter Valid Mobile Number!")
        }
        else if (category === "") {
            toast.error("Please Select Category!")
        }
        else if (choice === "") {
            toast.error("Please Select Drink Type!")
        }
        else if (location === "") {
            toast.error("Please Select Your Location!")
        }
        else {
            const data = new FormData();
            data.append("fname", fname)
            data.append("lname", lname)
            data.append("email", email)
            data.append("mobile", mobile)
            data.append("category", category)
            data.append("choice", choice)
            data.append("location", location)

            const config = {
                "Content-Type": "application/json"
            }

            const response = await registerfunc(data, config);
            if (response.status === 200) {
                setInputData({
                    ...inputdata,
                    fname: "",
                    lname: "",
                    email: "",
                    mobile: "",
                    category: "",
                    location: ""
                });

                setChoice("");
                setUseradd(response.data);
                navigate("/");
            } else {
                toast.error("Error!")
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowSpin(false)
        }, 1200)
    }, [])

    return (
        <>
            {

                showspin ? <Spiner /> :
                    <div className='container'>
                        <h2 className='text-center mt-1 text-black'>Register Your Details</h2>
                        <Card className='shadow mt-3 p-3'>


                            <Form>

                                <Row>
                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder="Last Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder="Enter mobile" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Select Category</Form.Label>
                                        <Form.Check
                                            type={"radio"}
                                            label={`Coffee`}
                                            name="category"
                                            value={"Coffee"}
                                            onChange={setInputValue}
                                        />

                                        <Form.Check
                                            type={"radio"}
                                            label={`Brownie`}
                                            name="category"
                                            value={"Brownie"}
                                            onChange={setInputValue}
                                        />

                                        <Form.Check
                                            type={"radio"}
                                            label={`Custard`}
                                            name="category"
                                            value={"Custard"}
                                            onChange={setInputValue}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Select Your Choice</Form.Label>
                                        <Select onChange={setChoiceValue}
                                            options={options}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Enter your location</Form.Label>
                                        <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder="Enter location" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={submitUserData}>Submit</Button>

                                </Row>
                            </Form>

                        </Card>
                        <ToastContainer position="top-center" />

                    </div>

            }

        </>
    )
}

export default Register;
