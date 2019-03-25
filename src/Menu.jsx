// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Menu extends React.Component {
  render() {
    return (
      <div>
        <a href="game.html"><h2>New Game</h2></a>
        <a href=""><h2>Load Game</h2></a>
        <a href=""><h2>Options</h2></a>
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>S a m p l e T e x t</h1>
      </div>
    );
  }
}

class MenuScreen extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <hr />
        <Menu />
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MenuScreen />, contentNode);
