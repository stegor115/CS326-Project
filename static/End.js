"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var EndScreen = function (_React$Component) {
  _inherits(EndScreen, _React$Component);

  function EndScreen() {
    _classCallCheck(this, EndScreen);

    return _possibleConstructorReturn(this, (EndScreen.__proto__ || Object.getPrototypeOf(EndScreen)).apply(this, arguments));
  }

  _createClass(EndScreen, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "E N D  C R E D I T S"
          ),
          React.createElement(
            "a",
            { href: "menu.html" },
            React.createElement(
              "h2",
              null,
              "Play again?"
            )
          ),
          React.createElement(
            "button",
            { onclick: "myFunction()" },
            "Show game statistics"
          ),
          React.createElement(
            "h1",
            { id: "stats" },
            "S T A T S"
          )
        )
      );
    }
  }]);

  return EndScreen;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(EndScreen, null), contentNode);