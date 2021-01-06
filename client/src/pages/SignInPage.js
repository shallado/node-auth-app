import React, { Component } from 'react';

class SignInPage extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <form>
        <input type="text" value={this.state.email} />
        <input type="text" value={this.state.password} />
        <button>Sign In</button>
      </form>
    );
  }
}

export default SignInPage;
