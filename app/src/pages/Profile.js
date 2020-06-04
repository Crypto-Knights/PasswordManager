import React from "react"
import Navbar from "../components/Navbar";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: { length: 15, data: "" }
    }
  }

  componentDidMount() {
    this.buildPassword();
  }

  setLength = ({ value }) => {
    this.setState(({ progress, password }) => ({
      password: { ...password, length: value }
    }), () => this.buildPassword());
  }

  buildPassword = () => {
    let a = "",
        b = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(),.?ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        c = this.state.password.length;
    for(let ma = 0; ma < c; ma++) {
      a += b[Math.floor(Math.random() * b.length)];
    }
    this.setState(state => ({
      password: { ...state.password, data: a }
    }));
  }

  render() {
    return (
        <div className="generator">
          <h1 className="generator-pass">{ this.state.password.data }</h1>
          <div className="generator-strong">
            <label>
              <input
                  type="range"
                  min="6"
                  max="16"
                  defaultValue={ this.state.password.length }
                  onChange={ e => this.setLength(e.target) }
              />
              { this.state.password.length }
            </label>
          </div>
        </div>
    );
  }
}


export default Profile