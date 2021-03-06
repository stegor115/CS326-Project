"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

    _this.state = { menu: true };
    return _this;
  }

  _createClass(Menu, [{
    key: "setMenu",
    value: function setMenu(bool) {
      this.setState({ menu: bool });
      console.log("Menu: " + this.state.menu);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.menu === true) {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "Welcome to the CICS adventure battle arena. To play this game, you must enter a command at each game stage to advance to the next one. Can you beat the CICS marathon of pain? Prove it. Glory awaits. Be careful however, a wrong answer could end very poorly for you and your degree! "
          ),
          React.createElement(
            "a",
            { href: "game.html" },
            React.createElement(
              "h2",
              null,
              "Start Game"
            )
          )
        );
      } else {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            null,
            "Options"
          ),
          React.createElement(
            "p",
            null,
            "Set your options or whatever."
          ),
          React.createElement("br", null)
        );
      }
    }
  }]);

  return Menu;
}(React.Component);

var Title = function (_React$Component2) {
  _inherits(Title, _React$Component2);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "UMass CICS: Ultimate Text Adventure"
        )
      );
    }
  }]);

  return Title;
}(React.Component);

var MenuScreen = function (_React$Component3) {
  _inherits(MenuScreen, _React$Component3);

  function MenuScreen() {
    _classCallCheck(this, MenuScreen);

    return _possibleConstructorReturn(this, (MenuScreen.__proto__ || Object.getPrototypeOf(MenuScreen)).apply(this, arguments));
  }

  _createClass(MenuScreen, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Title, null),
        React.createElement("hr", null),
        React.createElement(Menu, null),
        React.createElement("hr", null)
      );
    }
  }]);

  return MenuScreen;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MenuScreen, null), contentNode);