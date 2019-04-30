"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var studied = false;
var examine_text = "";

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
            examine_text = "";
            studied = true;
            console.log(studied);
            this.setState({ game: 2 });
            console.log("Game: " + this.state.game);
          } else if (command === "play" || command === "play video games") {
            examine_text = "";
            studied = false;
            console.log(studied);
            this.setState({ game: 2 });
            console.log("Game: " + this.state.game);
          } else if (command === "examine") {
            examine_text = "Studying looks like it will be a lot of work, but it might pay off in the long run.";
            this.setState({ game: 1 });
          } else {
            examine_text = "Unknown command";
            this.setState({ game: 1 });
            console.log("Unknown command");
          }
        } else if (this.state.game === 2) {
          if (command === "20" || command === "twenty") {
            examine_text = "";
            this.setState({ game: 3 });
            console.log("Game: " + this.state.game);
          } else if (command === "cheat") {
            examine_text = "";
            this.setState({ game: 7 });
            console.log("Game: " + this.state.game);
          } else if (command === "examine") {
            if (studied) {
              examine_text = "Looking back to your study session, you remember pouring hours of time into various bee articles. The answer comes to you: 20.";
            } else {
              examine_text = "You should have studied. To your left, you see a student writing the answer but it would probably be a bad idea to CHEAT.";
            }
            this.setState({ game: 2 });
          } else if (command === "examine richards") {
            examine_text = "Man in a beekeeper’s hat and a green fleece vest.";
            this.setState({ game: 2 });
          } else {
            this.setState({ game: 6 });
            console.log("Game: " + this.state.game);
          }
        }

        //STATE 3 - MARIUS
        else if (this.state.game === 3) {
            if (command === "right" || command === "pick right" || command == "pick right coin") {
              examine_text = "";
              this.setState({ game: 4 });
              console.log("Game: " + this.state.game);
            } else if (command === "left" || command === "pick left" || command == "pick left coin") {
              examine_text = "";
              this.setState({ game: 6 });
              console.log("Game: " + this.state.game);
            } else if (command === "cheat" || command === "look at other student") {
              examine_text = "";
              this.setState({ game: 7 });
              console.log("Game: " + this.state.game);
            } else if (command === "examine") {
              if (studied) {
                examine_text = "You work through the algorithm in your head. The answer is the right coin.";
              } else {
                examine_text = "You look up and down the line of coins but can’t remember how to solve the puzzle. Behind you is another student doing the same puzzle but if you LOOK AT OTHER STUDENT you would CHEAT.";
              }
              this.setState({ game: 3 });
            } else if (command === "examine marius" || command === "examine mathematician" || command === "examine evil mathematician") {
              examine_text = "A sense of foreboding comes over you. Your head is filled with terrifying images of graphs and memoization tables.";
              this.setState({ game: 3 });
            } else {
              examine_text = "Unknown command";
              this.setState({ game: 3 });
              console.log("Unknown command");
            }
          }

          //STATE 4 - BARRINGTON
          else if (this.state.game === 4 || this.state.game === 8) {
              if (command === "Statement II tells us Duncan feels most cold of all dogs, and Nina is the most resilient to cold. Cardie did not wear a coat on Monday, but Pushkin did. So by increasing critical temperature, the dogs are Nina, Cardie, Pushkin, Duncan. The two dogs not wearing coats on Friday must be Nina and Cardie. Thursday was warmer, so Cardie did not wear a coat.".toLowerCase()) {
                examine_text = "";
                this.setState({ game: 5 });
                console.log("Game: " + this.state.game);
              } else if (command === "cheat") {
                examine_text = "";
                this.setState({ game: 7 });
                console.log("Game: " + this.state.game);
              } else if (command === "examine") {
                if (studied) {
                  examine_text = 'There is a moment of clarity and the answer comes to you: "Statement II tells us Duncan feels most cold of all dogs, and Nina is the most resilient to cold. Cardie did not wear a coat on Monday, but Pushkin did. So by increasing critical temperature, the dogs are Nina, Cardie, Pushkin, Duncan. The two dogs not wearing coats on Friday must be Nina and Cardie. Thursday was warmer, so Cardie did not wear a coat."';
                } else {
                  examine_text = "This is a really tough one. To be honest, you probably wouldn’t have gotten this even if you studied. Attempt to CHEAT?";
                }
                if (this.state.game === 4) {
                  this.setState({ game: 4 });
                } else if (this.state.game === 8) {
                  this.setState({ game: 8 });
                }
              } else if (command === "sing" || command === "red wine") {
                this.setState({ game: 8 });
              } else if (command === "examine barrington") {
                examine_text = "A dog lover obssessed with non-deterministic finite automata.";
                if (this.state.game === 4) {
                  this.setState({ game: 4 });
                } else if (this.state.game === 8) {
                  this.setState({ game: 8 });
                }
              } else if (command === "examine dogs") {
                examine_test = "Cardie and Duncan!";
                if (this.state.game === 4) {
                  this.setState({ game: 4 });
                } else if (this.state.game === 8) {
                  this.setState({ game: 8 });
                }
              } else {
                this.setState({ game: 6 });
                console.log("Game: " + this.state.game);
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
          React.createElement(
            "p",
            null,
            "You are a computer science student at UMass Amherst, about to face off against three of the toughest bosses in the department in an exam of skill and strength."
          ),
          React.createElement(
            "p",
            null,
            "Do you STUDY or PLAY VIDEO GAMES?"
          ),
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
          ),
          React.createElement(
            "p",
            null,
            examine_text
          )
        );
      } else if (this.state.game === 2) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/2_Richards.jpg", alt: "Richards", width: "960", height: "400", id: "image" }),
          React.createElement(
            "p",
            null,
            "The day of the exam has come. You step into the exam hall and face off against your first opponent. \u201CYou may only pass if you can answer my bee question,\u201D he says."
          ),
          React.createElement(
            "p",
            null,
            "What is the top speed that a bee can fly in mph?"
          ),
          React.createElement(
            "p",
            null,
            "Enter the answer or EXAMINE for more information."
          ),
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
          ),
          React.createElement("br", null),
          React.createElement(
            "p",
            null,
            examine_text
          )
        );
      } else if (this.state.game === 3) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/3_Marius.jpg", alt: "Oooooookaaaaaay", width: "960", height: "400", id: "image" }),
          React.createElement(
            "p",
            null,
            "The ground shakes as an Evil Mathematician appears before you. He waves his hand and summons a long line of coins."
          ),
          React.createElement(
            "p",
            null,
            "\"I have summoned a line of 2n coins. We will take turns picking coins and your goal is to maximize the amount of value you get. Which coin do you take first?\""
          ),
          React.createElement(
            "p",
            null,
            "Do you PICK LEFT COIN, PICK RIGHT COIN, or EXAMINE the line?"
          ),
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
          ),
          React.createElement(
            "p",
            null,
            examine_text
          )
        );
      } else if (this.state.game === 4) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/4_Barrington.jpg", alt: "post success", width: "960", height: "400", id: "image" }),
          React.createElement(
            "p",
            null,
            "The evil mathematician nods. \u201CYou have passed my coin question. However, there is one final challenge you must face.\u201D"
          ),
          React.createElement(
            "p",
            null,
            "A light shines in through the ceiling and a godly, bearded figure descends from the heavens, arms folded over his chest and a grave look upon his face. Lightning bolts zap from his eyes and he summons two dogs."
          ),
          React.createElement(
            "p",
            null,
            "\u201CDuring one cold week in December, each dog in the set S = c, d, n, p = Cardie, Duncan, Nina, Pushkin went for a walk on each day in the set Y = Mon, Tue, Wed, Thu, Fri. On each day, each dog chose whether to wear a coat, based on the temperature that morning."
          ),
          React.createElement(
            "p",
            null,
            "Let Z be the set of integers ..., -3, -2, -1, 0, 1, 2, 3,... Let f be the function from S to Z defined so that f(x) is the \"critical temperature\" (in Celsius) for dog x: the meaning of this will come from Statement I below. Let t be the function from Y to Z defined so that t(y) is the outdoor temperature, in Celsius, on the morning of day y. Let W be the predicate defined so that W(x, y) means \"dog x wore a coat on day y\""
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "Statement I: \"Any given dog, on any given day, wore a coat if and only if the outdoor temperature on that day was less than or equal to the critical temperature for that dog."
            ),
            React.createElement(
              "li",
              null,
              "Statement II: Duncan was the one and only dog to wear a coat on Tuesday, and Nina was the one and only dog to not wear a coat on Wednesday."
            ),
            React.createElement(
              "li",
              null,
              "Statement III: It is not the case that if Pushkin wore a coat on Monday and the temperature on Thursday was -16, then the temperature on Thursday was -16 and Cardie wore a coat on Monday."
            ),
            React.createElement(
              "li",
              null,
              "Statement IV: On Friday, the temperature was -17 and exactly two of the dogs wore coats (on Friday)."
            )
          ),
          React.createElement(
            "p",
            null,
            "Using Statements I, II, III, and IV, determine whether Cardie wore a coat on Thursday, and prove your answer. (You many use the alternate form of Statement III give in part (b) of this problem.) You may use English, symbols, or a combination, but make your use of quantifier proof rules clear. (Hint: There are nine total temperatures given by values of f(x) for dogs x and t(y) for days y. Use the statements to derive inequality relations among these.)\u201D"
          ),
          React.createElement(
            "p",
            null,
            "Type in the proof or EXAMINE."
          ),
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
          ),
          React.createElement(
            "p",
            null,
            examine_text
          )
        );
      } else if (this.state.game === 5) {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: "img/5_banquet.jpg", alt: "post success", width: "960", height: "400", id: "image" }),
          React.createElement(
            "p",
            null,
            "It was a long, arduous journey but you have overcome the trials of UMass CICS. Revel in your victory and enjoy the feast."
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
          React.createElement(
            "p",
            null,
            "You have failed. Your degree burns to ashes."
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
          React.createElement(
            "p",
            null,
            "The ground opens under you and you fall down an endless chasm into literal hell. The three proctors look down at you from above. They shoot lasers from their hands, eviscerating you until you are a pile of dust. A cold wind blows across the plains of hell and scatters your remains into the dark. But worst of all, you\u2019ve been reported to the Academic Dishonesty board. Such is the price to pay for your sins."
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
      //Easter Egg Mode
      else if (this.state.game === 8) {
          return React.createElement(
            "div",
            null,
            React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/EX2fjMBLL8U?autoplay=1", frameborder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: true }),
            React.createElement(
              "p",
              null,
              "The evil mathematician nods. \u201CYou have passed my coin question. However, there is one final challenge you must face.\u201D"
            ),
            React.createElement(
              "p",
              null,
              "A light shines in through the ceiling and a godly, bearded figure descends from the heavens, arms folded over his chest and a grave look upon his face. Lightning bolts zap from his eyes and he summons two dogs."
            ),
            React.createElement(
              "p",
              null,
              "\u201CDuring one cold week in December, each dog in the set S = c, d, n, p = Cardie, Duncan, Nina, Pushkin went for a walk on each day in the set Y = Mon, Tue, Wed, Thu, Fri. On each day, each dog chose whether to wear a coat, based on the temperature that morning."
            ),
            React.createElement(
              "p",
              null,
              "Let Z be the set of integers ..., -3, -2, -1, 0, 1, 2, 3,... Let f be the function from S to Z defined so that f(x) is the \"critical temperature\" (in Celsius) for dog x: the meaning of this will come from Statement I below. Let t be the function from Y to Z defined so that t(y) is the outdoor temperature, in Celsius, on the morning of day y. Let W be the predicate defined so that W(x, y) means \"dog x wore a coat on day y\""
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Statement I: \"Any given dog, on any given day, wore a coat if and only if the outdoor temperature on that day was less than or equal to the critical temperature for that dog."
              ),
              React.createElement(
                "li",
                null,
                "Statement II: Duncan was the one and only dog to wear a coat on Tuesday, and Nina was the one and only dog to not wear a coat on Wednesday."
              ),
              React.createElement(
                "li",
                null,
                "Statement III: It is not the case that if Pushkin wore a coat on Monday and the temperature on Thursday was -16, then the temperature on Thursday was -16 and Cardie wore a coat on Monday."
              ),
              React.createElement(
                "li",
                null,
                "Statement IV: On Friday, the temperature was -17 and exactly two of the dogs wore coats (on Friday)."
              )
            ),
            React.createElement(
              "p",
              null,
              "Using Statements I, II, III, and IV, determine whether Cardie wore a coat on Thursday, and prove your answer. (You many use the alternate form of Statement III give in part (b) of this problem.) You may use English, symbols, or a combination, but make your use of quantifier proof rules clear. (Hint: There are nine total temperatures given by values of f(x) for dogs x and t(y) for days y. Use the statements to derive inequality relations among these.)\u201D"
            ),
            React.createElement(
              "p",
              null,
              "Type in the proof or EXAMINE."
            ),
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
            ),
            React.createElement(
              "p",
              null,
              examine_text
            )
          );
        } else {
          return React.createElement(
            "div",
            null,
            React.createElement("img", { src: "img/boom.jpg", alt: "Bang", width: "960", height: "400", id: "image" }),
            React.createElement(
              "p",
              null,
              "ERROR: WE AIN'T WHERE THE SUN SHINING NO MORE!!!"
            ),
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