import React from "react";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isUsernameValid: false,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  validateUsername = () => {
    if (this.state.userName?.length) {
      console.log("here");
      this.setState({ isUsernameValid: true });
    }
  };

  loginForm = () => {
    if (!this.state.isUsernameValid)
      return (
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={this.handleUsernameChange}
            value={this.state.userName}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.validateUsername}
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
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      );
  };

  handleUsernameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="input-group">
            <form onSubmit={this.handleSubmit}>{this.loginForm()}</form>
          </div>
        </div>
      </div>
    );
  }
}
