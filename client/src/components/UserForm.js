import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    role: '',
  };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" id="username" value={this.state.username} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id="email" value={this.state.email} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" id="password" value={this.state.password} />
        </div>
        <div>
          <label htmlFor="role">role</label>
          <select id="role" value={this.state.role}>
            <option>select</option>
            <option>admin</option>
            <option>moderator</option>
          </select>
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default UserForm;
