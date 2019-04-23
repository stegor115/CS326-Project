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
      command = command.toLowerCase();
      if(this.game.state === 4){
        if(command === "examine"){

        }
        else if(command === "cheat"){

        }
        else if(command === "sing"){
          
        }
        else if (command === "examine barrington"){

        }
        else if(command === "examine cardie"){

        }
        else if (command === "examine duncan"){

        }
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
            The evil mathematician nods. “You have passed my coin question. However, there is one final challenge you must face.” 
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
            <img src="img/5_banquet.jpg" alt="post success" width="960" height="400" id="image"></img>
            It was a long, arduous journey but you have overcome the trials of UMass CICS. Revel in your victory and enjoy the feast. 
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
            You have failed. Your degree burns to ashes.

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
