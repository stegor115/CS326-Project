// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src="img/sample.jpg" alt="Sample image2" width="960" height="400"></img>
        <div class="solid">
          Terminal
          <br></br>
          <input type="text"></input>
        </div>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
