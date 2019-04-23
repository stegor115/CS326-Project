"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));

    _this.state = { game: 1 };
    return _this;
  }

  _createClass(MyComponent, [{
    key: "readCommand",
    value: function readCommand() {
      if (document.getElementById("command").value !== "") {
        var command = document.getElementById("command").value;
        command = command.toLowerCase();
        console.log('Command: ' + command);
        if (this.state.game === 1) {
          if (command === "study") {
            this.setState({ game: 2 });
            console.log("Game: " + this.state.game);
          } else if (command === "play") {
            this.setState({ game: 2 });
            console.log("Game: " + this.state.game);
          } else if (command === "play video games") {
            this.setState({ game: 2 });
            console.log("Game: " + this.state.game);
          } else {
            console.log("Unknown command");
          }
        } else if (this.state.game === 2) {
          if (command === "20" || command === "twenty") {
            this.setState({ game: 3 });
            console.log("Game: " + this.state.game);
          } else {
            console.log("Unknown command");
          }
        } else if (this.state.game === 3) {
          if (command === "right" || command === "pick right" || command == "pick right coin") {
            this.setState({ game: 4 });
            console.log("Game: " + this.state.game);
          } else {
            console.log("Unknown command");
          }
        }
        document.getElementById("command").value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.game === 1) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/1_study_hall.jpg", alt: "Sample image", width: "960", height: "400", id: "image" }),
          "You are a computer science student at UMass Amherst, about to face off against three of the toughest bosses in the department in an exam of skill and strength.",
          React.createElement("br", null),
          "Do you STUDY or PLAY VIDEO GAMES?",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else if (this.state.game === 2) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/2_Richards.jpg", alt: "Richards", width: "960", height: "400", id: "image" }),
          "The day of the exam has come. You step into the exam hall and face off against your first opponent. \u201CYou may only pass if you can answer my bee question,\u201D he says.",
          React.createElement("br", null),
          "What is the top speed that a bee can fly in mph?",
          React.createElement("br", null),
          "Enter the answer or EXAMINE for more information.",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else if (this.state.game === 3) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/3_Marius.jpg", alt: "Oooooookaaaaaay", width: "960", height: "400", id: "image" }),
          "The ground shakes as an Evil Mathematician appears before you. He waves his hand and summons a long line of coins.",
          React.createElement("br", null),
          "\"I have summoned a line of 2n coins. We will take turns picking coins and your goal is to maximize the amount of value you get. Which coin do you take first?\"",
          React.createElement("br", null),
          "Do you PICK LEFT COIN, PICK RIGHT COIN, or EXAMINE the line?",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else if (this.state.game === 4) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/4_Barrington.jpg", alt: "post success", width: "960", height: "400", id: "image" }),
          "Successfully added new command.",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else if (this.state.game === 5) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/5_banquet.jpg", alt: "post success", width: "960", height: "400", id: "image" }),
          "Successfully added new command.",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else if (this.state.game === 6) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/6_game_over.jpg", alt: "post success", width: "960", height: "400", id: "image" }),
          "Successfully added new command.",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else if (this.state.game === 7) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/7_cheat.png", alt: "post success", width: "960", height: "400", id: "image" }),
          "Successfully added new command.",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      } else {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/boom.jpg", alt: "Bang", width: "960", height: "400", id: "image" }),
          "You have defeated the mighty foe!",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.readCommand();
              } },
            "Enter Command"
          ),
          React.createElement(
            "a",
            { href: "end.html" },
            React.createElement(
              "button",
              { type: "button" },
              "Quit"
            )
          )
        );
      }
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);