import React, { PureComponent } from "react";
import Habit from "./habit";
import Input from "./input";

class Habits extends PureComponent {
  handleIncrement = (habit) => {
    this.props.handleIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.handleDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.handleDelete(habit);
  };

  handleAdd = (name) => {
    this.props.handleAdd(name);
  };

  render() {
    return (
      <>
        <Input onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="BtnReset" onClick={this.props.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
