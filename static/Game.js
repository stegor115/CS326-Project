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
      var _this2 = this;

      if (document.getElementById("command").value !== "") {
        var command = document.getElementById("command").value;
        console.log('Command: ' + command);

        if (command === "test get") {
          fetch('/api').then(function (response) {
            return response.json();
          }).then(function (data) {
            _this2.setState({ game: 2 });
            console.log(data.help);
          }).catch(function (err) {
            console.log(err);
          });
        } else {
          fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              send: command
            })
          }).then(function (response) {
            return response.json();
          }).then(function (text) {
            console.log(text);
          }).catch(function (err) {
            alert("Error in sending data to server: " + err.message);
          });
        }

        if (command === "attack") {
          this.setState({ game: 0 });
          console.log("Game: " + this.state.game);
        }

        document.getElementById("command").value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.game === 1) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/sample.jpg", alt: "Sample image", width: "960", height: "400", id: "image" }),
          "You are faced with a mighty foe in a suit! What do you do?",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this3.readCommand();
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
          React.createElement("img", { src: "img/get_success.png", alt: "get success", width: "960", height: "400", id: "image" }),
          "You have defeated the mighty foe!",
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "command" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this3.readCommand();
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
                return _this3.readCommand();
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