import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

// since we need state we have to change this from
// a pure component to class
class App extends React.Component {
  // creating state

  constructor() {
    super();
    this.state = {
      // At this point we don't need the robots in state
      // but we will later on
      robots: robots,
      searchField: "",
    };
  }

  //   make sure to use arrow functions when creating your own
  // functions or you will have scoping issues
  onSearchChange = (event) => {
    //   Lets set the state of the search field:

    this.setState({ searchField: event.target.value });
  };

  render() {
    //   This uses the search field to filter the robots and we pass the filtered
    // list to the Card List component
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
