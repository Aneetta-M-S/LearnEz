import React from "react";
import "./Login.css";

function LoginPage() {
  return (
    <div>
      <nav class="navbar  head">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">LearnEz</span>
        </div>
      </nav>
      <div className="loginform">
        <form>
          <div className="mb-3">
            <div className="radio">
            <span><input type="radio" id="Student" name="user" value="STUDENT" />
            <label for="html">Student</label></span>
            <span><input type="radio" id="Teacher" name="user" value="TEACHER" />
            <label for="css">Teacher</label></span>
            </div>
            <br />
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
