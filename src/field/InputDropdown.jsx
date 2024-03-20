import React from "react";

function InputDropdown() {

  // constructor() {
  //     super();
  //     this.state = { gender: "male" };
  //     this.handleChange = this.handleChange.bind(this);
  //   }

  const handleChange = (e) => {
    this.setState({ gender: e.target.value });
    console.log(handleChange);
  }

  return (

    <>
      <select value={this.state.gender} onChange={this.handleChange}>
        <option name="male"> Male</option>
        <option name="female">Female</option>
      </select>
    </>
  )
}
export default InputDropdown;