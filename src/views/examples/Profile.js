/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

import { useEffect, useState, useMemo } from "react";


const Profile = () => {
  const [userData,setuserData]=useState([])
  const [userDataHit, setuserDataHit]=useState(false)

  const [password,setpassword]=useState("");
  const [password2,setpassword2]=useState("0");
  const [passwordcheck,setpasswordcheck]=useState(false)

  useEffect(()=>{
    console.log("패스워드변환중",password," + ",password2)
    
    if(password===password2)
      setpasswordcheck(true);
    else{
      setpasswordcheck(false);
    }
  },[password,password2])

const test = [{
  "name":"이모씨",
  "myex":"Profile 안에서 보여지는 자기소개 구역",
  "profilepic":"ab.jpg",
  "profileback":"bc.jpg",
  "id":"ahwjs1022",
  "password":"asdasd",
  "phone":"01015151515",
  "age":"28",
  "friend":["accont","bvbbdd","토토로"],
  "write":["나는가끔눈물을흘린다","오늘 저녁은 짜파게티야"],
  "status message":"i.....want......coffee...",
  "like":"120",
}]

  useEffect(()=>{
    console.log(test[0].name)
    console.log(`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${test[0].profilepic}`)

    console.log(test[0].id)
    console.log(test[0].password)
    console.log(test[0].phone)
    console.log(test[0].age)
    console.log(test[0].friend)
   
   // console.log(test[0].)
  },[])

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${test[0].profilepic}`}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    follow
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    follow
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">{test[0].friend.length}</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">{test[0].write.length}</span>
                        <span className="description">Post</span>
                      </div>
                      <div>
                        <span className="heading">{test[0].like}</span>
                        <span className="description">좋아요</span>
                      </div>
                   
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {test[0].name}
                    <span className="font-weight-light">, {test[0].age}</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin " />
                    {test[0]["status message"]}
                  </div>
                
               
                  <hr className="my-4" />
                  <p>
                    {test[0].myex}
                  </p>
               
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={`${test[0].name}`}
                            id="input-username"
                            placeholder={`${test[0].name}`}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            비밀번호
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="비밀번호"
                            type="password"
                            onChange={(e)=>{setpassword(e.target.value)}}

                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            비밀번호 확인
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="비밀번호 확인"
                            type="password"
                            onChange={(e)=>{setpassword2(e.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        {passwordcheck ? <span style={{color:"green"}}>비밀번호가 일치합니다.</span>:<span style={{color:"red"}}>비밀번호가 일치하지 않습니다.</span>}
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
