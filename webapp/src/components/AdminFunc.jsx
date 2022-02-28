import React, { Component } from "react";

class AdminFunc extends Component {
  state = {};

  render() {
    return (
      <div id="AdminFunc">
        <h1> Admin Functions</h1>
        <ul>
          <li>
            <a href="/AddUniversity">Add University </a>
          </li>
          <li>
            <a href="/DeleteUniversity"> Delete University</a>
          </li>
          <li>
            <a href="">Update University Details</a>
          </li>
          <li>Remove User</li>
          <li>Event Scheduling</li>
          <li>Manage Banners</li>
          <li>Delete Content from Forum</li>
        </ul>
      </div>
    );
  }
}

export default AdminFunc;
