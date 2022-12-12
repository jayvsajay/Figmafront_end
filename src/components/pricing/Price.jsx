import React, { useState } from "react";
import "./price.css";
import { Card, Row, Col, Container, Button, Modal } from "react-bootstrap";
import { MdDone, MdClear } from "react-icons/md";
import StripeCheckout from "react-stripe-checkout";
export default function Price() {
  const [product,setProduct] = useState({
    name:"Purchasing product",
    price:10,
    productBy:"facebook"
  })
 
  const makepayment = token =>{
    const body ={
      token,
      product
    }
    const headers = {
      "Content-Type":"application/json"
    }
    return fetch(`http://localhost:8081/payment`,{
      method:"POST",
      headers,
      body:JSON.stringify(body)
    }).then(response=>{
      console.log("RESPONSE",response)
      const {status}=response;
      console.log("status",status)
    })
    .catch(err=>console.log(err))
  }
  return (
    <Container fluid>
      
      <div className="priceTop">
        <h1 className="priceTopTitle">
          Find <span className="textOrange">Your Voice</span> across the world
          of audio
        </h1>
        <p className="priceTopDesc">Choose a plan that's right for you</p>
      </div>
      <Row>
        <Col md={4}>
          <Card className="pricingSlot" onClick={() => console.log("1")}>
            <h1 className="priceSlotTitle">Freebie</h1>
            <p className="priceDesc">
              Ideal for individuals who need quick access to basic features.
            </p>
            <div className="pricePerMonth">
              <h1 className="pricePerMonthTitle">$0</h1>/month
            </div>
            <StripeCheckout
          stripeKey="pk_test_51KWgHaSFtA7TiCtRFJeTPlFXOYDs0StwStpoVeIh40UCM8g7BXqaTdi9uttSoayNsua5FWH6XwoTyvQX1khjloq300nu0ZS3JD"
          token={makepayment}>
            <Button className="priceSlotBtn" variant="outline-danger">
              Get Started Now
            </Button>
          </StripeCheckout>

            <div className="rules">
              <p>
                {" "}
                <span className="mdicons">
                  <MdDone color="red" />
                </span>
                20,000+ of PNG & SVG graphics
              </p>

              <p>
                {" "}
                <span className="mdicons">
                  <MdDone color="red" />
                </span>
                Access to 100 million stock images
              </p>

              <p>
                {" "}
                <span className="mdicons">
                  <MdClear size={20} color="red" />
                </span>
                Upload custom icons and fonts
              </p>

              <p>
                <span className="mdicons">
                  <MdClear size={20} color="red" />
                </span>
                Unlimited Sharing
              </p>

              <p>
                <span className="mdicons">
                  <MdClear size={20} color="red" />
                </span>
                Create teams to collaborate on desgins
              </p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="pricingSlot" onClick={() => console.log("2")}>
            <h1 className="priceSlotTitle">Professonal</h1>
            <p className="priceDesc">
              Ideal for individuals who need advance features and tools.
            </p>
            <div className="pricePerMonth">
              <h1 className="pricePerMonthTitle">$5</h1>/month
            </div>
            <StripeCheckout
          stripeKey="pk_test_51KWgHaSFtA7TiCtRFJeTPlFXOYDs0StwStpoVeIh40UCM8g7BXqaTdi9uttSoayNsua5FWH6XwoTyvQX1khjloq300nu0ZS3JD"
          token={makepayment}>
            <Button className="priceSlotBtn" variant="outline-danger">
              Get Started Now
            </Button>
          </StripeCheckout>
            <div className="rules">
              <p>
                {" "}
                <span className="mdicons">
                  <MdDone color="red" />
                </span>
                20,000+ of PNG & SVG graphics
              </p>

              <p>
                {" "}
                <span className="mdicons">
                  <MdDone color="red" />
                </span>
                Access to 100 million stock images
              </p>

              <p>
                {" "}
                <span className="mdicons">
                  <MdDone size={20} color="red" />
                </span>
                Upload custom icons and fonts
              </p>

              <p>
                <span className="mdicons">
                  <MdDone size={20} color="red" />
                </span>
                Unlimited Sharing
              </p>

              <p>
                <span className="mdicons">
                  <MdClear size={20} color="red" />
                </span>
                Create teams to collaborate on desgins
              </p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="pricingSlot" onClick={() => console.log("3")}>
            <h1 className="priceSlotTitle">Enterprise</h1>
            <p className="priceDesc">
              Ideal for buisnessess who need personalized services.
            </p>
            <div className="pricePerMonth">
              <h1 className="pricePerMonthTitle">$100</h1>/month
            </div>
            <StripeCheckout
          stripeKey="pk_test_51KWgHaSFtA7TiCtRFJeTPlFXOYDs0StwStpoVeIh40UCM8g7BXqaTdi9uttSoayNsua5FWH6XwoTyvQX1khjloq300nu0ZS3JD"
          token={makepayment}>
            <Button className="priceSlotBtn" variant="outline-danger">
              Get Started Now
            </Button>
            </StripeCheckout>
            <div className="rules">
              <p>
                {" "}
                <span className="mdicons">
                  <MdDone color="red" />
                </span>
                20,000+ of PNG & SVG graphics
              </p>

              <p>
                {" "}
                <span className="mdicons">
                  <MdDone color="red" />
                </span>
                Access to 100 million stock images
              </p>

              <p>
                {" "}
                <span className="mdicons">
                  <MdDone size={20} color="red" />
                </span>
                Upload custom icons and fonts
              </p>

              <p>
                <span className="mdicons">
                  <MdDone size={20} color="red" />
                </span>
                Unlimited Sharing
              </p>

              <p>
                <span className="mdicons">
                  <MdDone size={20} color="red" />
                </span>
                Create teams to collaborate on desgins
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    
    </Container>
  );
}
