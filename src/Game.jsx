// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { game: true };
  }

  readCommand(bool){
    console.log(document.getElementById("command").value);
    if(document.getElementById("command").value === "attack"){
      this.setState({ game: false });
      document.getElementById("command").value = ""
      console.log("Game: " + this.state.game);
    }
  }

  render() {
    if(this.state.game === true){
      return (
        <div>
          <img src="img/sample.jpg" alt="Sample image" width="960" height="400"></img>
            You are faced with a mighty foe in a suit! What do you do?
            <br></br>
            <input type="text" id="command"></input>
            <br></br>
            <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
            <a href="end.html"><button type="button">Quit</button></a>
        </div>
      );
    }else{
      return (
      <div>
          <img src="img/boom.jpg" alt="Bang" width="960" height="400"></img>
            You have defeated the mighty foe!
            <br></br>
            <input type="text" id="command"></input>
            <br></br>
            <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
            <a href="end.html"><button type="button">Quit</button></a>
        </div>
      );
    }
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
