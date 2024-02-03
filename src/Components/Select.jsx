import React from "react";

const Select = () => {
  return (
    <div className="">
      <select
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
