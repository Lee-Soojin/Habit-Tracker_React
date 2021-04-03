import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar--logo">
          <i className="fas fa-clipboard-list"></i>
          <div className="navbar--title">Habit Tracker</div>
          <div className="navbar--count">{this.props.totalCount}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
