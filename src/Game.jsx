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
          this.setState({ game: 3 });
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
          <img src="img/1_study_hall.jpg" alt="Sample image" width="960" height="400" id="image"></img>
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
          <img src="img/2_Richards.png" alt="get success" width="960" height="400" id="image"></img>
            Successfully got data: check console.
            <br></br>
            <input type="text" id="command"></input>
            <br></br>
            <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
            <a href="end.html"><button type="button">Quit</button></a>
        </div>
      );
    }else if(this.state.game === 3){
      return (
      <div>
          <img src="img/3_Marius.jpg" alt="post success" width="960" height="400" id="image"></img>
            Successfully added new command.
            <br></br>
            <input type="text" id="command"></input>
            <br></br>
            <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
            <a href="end.html"><button type="button">Quit</button></a>
        </div>
      );
     }else if(this.state.game === 4){
        return (
        <div>
            <img src="img/4_Barrington.jpg" alt="post success" width="960" height="400" id="image"></img>
              Successfully added new command.
              <br></br>
              <input type="text" id="command"></input>
              <br></br>
              <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
              <a href="end.html"><button type="button">Quit</button></a>
          </div>
        );
     }else if(this.state.game === 5){
        return (
        <div>
            <img src="img/5_Banquet.jpg" alt="post success" width="960" height="400" id="image"></img>
              Successfully added new command.
              <br></br>
              <input type="text" id="command"></input>
              <br></br>
              <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
              <a href="end.html"><button type="button">Quit</button></a>
          </div>
        );
     }else if(this.state.game === 6){
        return (
        <div>
            <img src="img/6_game_over.jpg" alt="post success" width="960" height="400" id="image"></img>
              Successfully added new command.
              <br></br>
              <input type="text" id="command"></input>
              <br></br>
              <button type="button" onClick ={ () => this.readCommand()}>Enter Command</button>
              <a href="end.html"><button type="button">Quit</button></a>
          </div>
        );
     }else if(this.state.game === 7){
        return (
        <div>
            <img src="img/7_cheat.png" alt="post success" width="960" height="400" id="image"></img>
              Successfully added new command.
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
