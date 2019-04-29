// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Menu extends React.Component {
  constructor(){
    super();
    this.state = { menu: true };
  }

  setMenu(bool){
    this.setState({ menu: bool });
    console.log("Menu: " + this.state.menu);
  }

  render() {
    if(this.state.menu === true){
      return (
        <div>
          <a href="game.html"><h2>Start Game</h2></a>
          <p>Welcome to the CICS adventure battle arena. To play this game, you must enter a command at each game stage to advance to the next one. Can you beat the CICS marathon of pain? Prove it. Glory awaits. Be careful however, a wrong answer could end very poorly for you and your degree! </p>
          {/* <a href="#"><h2>Load Game</h2></a> */}
          {/* <a href="#" onClick={ () => this.setMenu(false) }><h2>Options</h2></a> */}
        </div>
      );
    }else{
      return (
        <div>
          <h2>Options</h2>
          <p>Set your options or whatever.</p>
          <br />
          {/* <a href="#" onClick={ () => this.setMenu(true) }>Back to Menu</a> */}
        </div>
      );
    }
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>UMass CICS: Ultimate Text Adventure</h1>
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
