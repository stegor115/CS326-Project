// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class EndScreen extends React.Component {
  render() {
    return (
      <div>
        <div>
        <h1>E N D  C R E D I T S</h1>
        <a href="menu.html"><h2>Play again?</h2></a>
        <button onclick="myFunction()">Show game statistics</button>
        <h1 id = "stats">S T A T S</h1> 
        </div>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<EndScreen />, contentNode);
