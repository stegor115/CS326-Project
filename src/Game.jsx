// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { game: 1 };
  }

  readCommand(){
    if(document.getElementById("command").value !== ""){
      var command = document.getElementById("command").value;
      console.log('Command: ' + command);
      
      if(command === "test get"){
        fetch('/api').then(response =>
          response.json()
        ).then(data => {
          this.setState({ game: 2 });
          console.log(data.help);
        }).catch(err => {
          console.log(err);
        });
      }else{
        fetch('/api', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({keyword: command})
        }).then(commandResponse => {
          console.log(commandResponse.test);
        }).catch(err => {
          alert("Error in sending data to server: " + err.message);
        });
      }

      if(command === "attack"){
        this.setState({ game: 0 });
        console.log("Game: " + this.state.game);
      }
      
      document.getElementById("command").value = "";
    }
  }

  render() {
    if(this.state.game === 1){
      return (
        <div>
          <img src="img/sample.jpg" alt="Sample image" width="960" height="400" id="image"></img>
            You are faced with a mighty foe in a suit! What do you do?
            <br></br>
            <input type="text" id="command"></input>
            <br></br>
            <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
            <a href="end.html"><button type="button">Quit</button></a>
        </div>
      );
    }else if(this.state.game === 2){
      return (
      <div>
          <img src="img/get_success.png" alt="get success" width="960" height="400" id="image"></img>
            You have defeated the mighty foe!
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
          <img src="img/boom.jpg" alt="Bang" width="960" height="400" id="image"></img>
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
