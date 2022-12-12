import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { checkUserLoggedIn, loginUsers, logoutUser } from "../magic/magic";
import "./login.css";
import { useNavigate } from "react-router-dom";
export default function Login({ show, handleClose }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  

  const loginUser = (event) => {
    if (!email) {
      alert('Email is Invalid');
      return;
    }
    loginUsers(email);
    navigate('/pricing')
    // const {isLoggedIn} = checkUserLoggedIn(email);
    // if(isLoggedIn){
    // navigate('/pricing')
    // }else{
    //   navigate('/')
    // }
  };
  return (
    <Modal show={show} onHide={handleClose} centered className="login">
      <Modal.Header closeButton>
        <Modal.Title>Login to your account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email <span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span color="danger">{}</span>
          </Form.Group>
          <Form.Group>
            <Button type="button" className="logBtn" variant="danger" onClick={()=>loginUser()}>
              Continue -&gt;
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
