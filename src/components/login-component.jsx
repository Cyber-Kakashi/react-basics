import React, { useState } from "react";

function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUser, setIsValidUser] = useState(false);

  let handleSubmit = () => {
    console.log('submitted: ', password);
    fetch("https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119", {
      method: "post",
      body: JSON.stringify({
        Email: userName,
        Password: password
      })
    })
    .then( response => response.json() )
    .then((response) => {
      if (response.loginResult === 'SUCCESS') {
        window.location.href = "https://nexotto.com";
      }
    });
  }

  let resetForm = () => {
    setIsValidUser(false);
  }

  let validateUsername = () => {
    if (userName.length) {
      fetch('https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2')
        .then(response => response.json())
        .then(data => {
          if (data.user.email === userName) {
            console.log(userName, password);
            setIsValidUser(true);
          } else {
            alert('Incorrect Email');
          }
        });
    }
  };

  let loginForm = () => {
    if (!isValidUser)
      return (
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e)=>setUserName(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={validateUsername}
          >
            Next
          </button>
        </div>
      );
    else
      return (
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
          />
          <input type="button" onClick={resetForm} value="Back" className="btn btn-warning mr-5"></input>
          <input type="button" onClick={handleSubmit} className="btn btn-primary ml-5" value="Submit" />
        </div>
      );
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="input-group">
          <form>{loginForm()}</form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;