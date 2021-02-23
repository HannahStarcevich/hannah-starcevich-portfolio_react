import React from "react";
import "./style.css";

function ContactForm() {
  return (
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Your Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Message</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Reach Out to Me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}

export default ContactForm;