"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var EndScreen = function (_React$Component) {
  _inherits(EndScreen, _React$Component);

  function EndScreen(props) {
    _classCallCheck(this, EndScreen);

    var _this = _possibleConstructorReturn(this, (EndScreen.__proto__ || Object.getPrototypeOf(EndScreen)).call(this, props));

    _this.state = {
      shown: false
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(EndScreen, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      this.setState(function (state) {
        var newShown = !state.shown;
        console.log(newShown);
        return {
          shown: newShown
        };
      });
    }
  }, {
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
            { href: "index.html" },
            React.createElement(
              "h2",
              null,
              "Play again?"
            )
          ),
          React.createElement(StatsWindow, { shown: this.state.shown })
        )
      );
    }
  }]);

  return EndScreen;
}(React.Component);

var StatsWindow = function (_React$Component2) {
  _inherits(StatsWindow, _React$Component2);

  function StatsWindow(props) {
    _classCallCheck(this, StatsWindow);

    return _possibleConstructorReturn(this, (StatsWindow.__proto__ || Object.getPrototypeOf(StatsWindow)).call(this, props));
  }

  _createClass(StatsWindow, [{
    key: "render",
    value: function render() {
      if (!this.props.shown) {
        return null;
      }
      return (
        // this.props.shown &&
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            null,
            " Enemies defeated:  "
          ),
          React.createElement(
            "h2",
            null,
            " Floors cleared: "
          ),
          React.createElement(
            "h2",
            null,
            " Time: "
          )
        )
      );
    }
  }]);

  return StatsWindow;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(EndScreen, null), contentNode);