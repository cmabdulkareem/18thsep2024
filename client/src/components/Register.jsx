import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUSername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center">Register</h1>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputUsername" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUSername(e.target.value)}
                  className="form-control"
                  id="exampleInputUsername"
                />
              </div>
              <div className="mb-3">
                <label for="examplePassword" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(event)=>setPassword(event.target.value)}
                  className="form-control"
                  id="examplePassword"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
