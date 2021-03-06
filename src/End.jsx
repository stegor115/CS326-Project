
// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class EndScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        shown: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.setState((state) => {
      const newShown = !state.shown;
      console.log(newShown);
      return{
        shown: newShown
      }
    })
  }

  render() {
    return (
      <div>
        
        <div>
        <h1>E N D  C R E D I T S</h1>
        <div>
        <p>A game made by three of the most adventurous computer science students of all time:</p>
        <marquee>
        <b>
        <p>Stephen Gordon     Austin Trivett       Eric Tang</p>
        </b>
        </marquee>
        </div>

        <a href="index.html"><h2>Play again?</h2></a>
        <StatsWindow shown={this.state.shown}/>
        </div>
        
      </div>
    );
  }
}

class StatsWindow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(!this.props.shown){
      return null;
    }
    return(
      // this.props.shown &&
      <div>
            <h2> Enemies defeated:  </h2>
            <h2> Floors cleared: </h2>
            <h2> Time: </h2>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<EndScreen />, contentNode);
