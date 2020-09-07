import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import "./App.css";

// since we need state we have to change this from
// a pure component to class
class App extends React.Component {
  // creating state

  constructor() {
    super();
    this.state = {
      // At this point we don't need the robots in state
      // but we will later on
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("when refreshing page this gets called");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
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
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
