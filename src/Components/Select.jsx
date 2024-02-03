import React from "react";

const Select = () => {
  return (
    <div className="">
      <select
      style={{  backgroundColor:" #282828",color:"#ffffff",  border: "3px solid #ff4233"

}}
        className="col-12  col-md-6 col-lg-4 form-control form width"
        required
      >
        <option style={{ backgroundColor: "black" }} value="">
          Select Screen
        </option>
      </select>
    </div>
  );
};

export default Select;
