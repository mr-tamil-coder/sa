import React from "react";
import { Card } from "react-bootstrap";
import Select from "./Select";
import Link from "./Link";
function ImageContent({ id, image, title, subtitle }) {
  return (
    <div>
      <Card style={{backgroundColor:"#2f2f2e"}} className="card-bg d-flex flex-row align-items-start">
        <div className="card-img card-img-sm">
          <Card.Img src={image}  className="f " />
        </div>
        <div className="w-50 d-flex flex-column justify-content-between space ">
          <div>
            <Card.Title  className="text-right title" style={{    color: "#ffffff"}}>{title}<span style={{color:"#FF4233"}}>3D</span></Card.Title>
            <Card.Text className="text-right  subtitle">{subtitle}</Card.Text>
          </div>
          <Select />
          <Link />
        </div>
      </Card>
    </div>
  );
}

export default ImageContent;
