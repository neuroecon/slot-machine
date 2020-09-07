"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: ticking noises
// TODO: write to a log file
// TODO: apply the css transition value in js so we can manipulate variables and keep in sync w timeout
// TODO: add directions plus screen buttons for up down arrows
// TODO: consider resetting the offset difference for sanity's sake
// TODO: randomize a few different cubic bezier curves + timings
// TODO: rotate the other way
// TODO: Questions scale 0-100 motivation & happiness -100-100
const spinsPerQuestion = 2;
const questions = ['How happy are you?', 'Do you want to play again?']; // const parameters

const iconHeight = 101;
const totalSymbols = 6;

function RepeatButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": "Play again.",
    id: "repeatButton",
    onClick: props.onClick,
    disabled: props.disabled
  }, "spin");
}

function WinningSound(props) {
  if (props.winner === null) return null;

  if (props.winner) {
    return /*#__PURE__*/React.createElement("audio", {
      autoPlay: "autoplay",
      className: "player",
      preload: "false"
    }, /*#__PURE__*/React.createElement("source", {
      src: "./cash_register2_cut.wav"
    }));
  }

  return /*#__PURE__*/React.createElement("audio", {
    autoPlay: "autoplay",
    className: "player",
    preload: "false"
  }, /*#__PURE__*/React.createElement("source", {
    src: "./klaxon_cut.wav"
  }));
}

function getSymbolFromPosition(position) {
  return position / iconHeight % totalSymbols;
}
/**
Possible modes:
selecting
spinning
win
lose
question
*/


class App extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleKeyPress", event => {
      // ignore key presses while the spinner is running
      if (this.state.mode !== 'selecting') return;

      switch (event.keyCode) {
        case 38:
          // up
          this.setState({
            firstPosition: this.state.firstPosition - iconHeight
          });
          break;

        case 40:
          // down
          this.setState({
            firstPosition: this.state.firstPosition + iconHeight
          });
          break;

        case 13:
          // Enter key spins the spinner
          this.handleClick();
          return;
      }
    });

    _defineProperty(this, "getDirectionsMessage", mode => {
      switch (mode) {
        case 'selecting':
          return 'Please choose an item';

        case true:
          return 'You win $5';

        case false:
          return 'No win';

        default:
          return '';
      }
    });

    this.state = {
      mode: 'selecting',
      numSpins: 0,
      firstPosition: Math.floor(Math.random() * totalSymbols) * iconHeight * -1
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.unblockSpinner = this.unblockSpinner.bind(this);
    this.writeToLogs = this.writeToLogs.bind(this);
    this.ss = null;
    this.logs = [];
    document.addEventListener('keydown', this.handleKeyPress);
  }

  writeToLogs(log) {
    alert('what??');
    window.console.log('writing to logs', log);
    window.parent.postMessage(log, "*");
    window.parent.postMessage('hello world', "*");
  }

  handleClick() {
    this.setState({
      mode: 'spinning',
      numSpins: this.state.numSpins + 1
    });

    this._child.reset();
  }

  finishHandler(value) {
    let results = getSymbolFromPosition(this.state.firstPosition) == getSymbolFromPosition(value);
    this.setState({
      mode: results
    }); // When the spinner finishes, wait a little while and reset the mode

    window.setTimeout(() => {
      let nextMode = 'selecting';

      if (this.state.numSpins % spinsPerQuestion == 0) {
        nextMode = 'question';
      }

      this.setState({
        mode: nextMode
      });
    }, 2000);
  }

  unblockSpinner() {
    window.console.log('unblock spinner');
    this.writeToLogs(["0", "1", "2"]); // TODO: handle ending the experiment.
    // alert('thank you for playing, that was all the data we needed');

    this.setState({
      mode: 'selecting'
    });
  }

  render() {
    const {
      mode,
      numSpins
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WinningSound, {
      mode: mode
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: mode == 'selecting' ? 'white' : 'gold'
      }
    }, this.getDirectionsMessage(mode), "\xA0"), /*#__PURE__*/React.createElement("div", {
      className: "spinner-resizer"
    }, /*#__PURE__*/React.createElement("div", {
      className: 'spinner-container ' + mode
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundPositionY: this.state.firstPosition + 'px'
      },
      className: "icons"
    }), /*#__PURE__*/React.createElement(Spinner, {
      onFinish: this.finishHandler,
      ref: child => {
        this._child = child;
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "gradient-fade"
    }))), /*#__PURE__*/React.createElement(RepeatButton, {
      onClick: this.handleClick,
      disabled: mode !== 'selecting'
    }), /*#__PURE__*/React.createElement(Question, {
      mode: mode,
      onFinish: this.unblockSpinner
    }));
  }

}

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.state = {
      position: this.setStartPosition()
    };
  }

  reset() {
    const totalDistance = Math.floor(Math.random() * (totalSymbols - 1) + 1);

    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      // Rotate 12 times plus a small random number
      position: this.state.position - (12 * totalSymbols + Math.floor(Math.random() * totalSymbols)) * iconHeight
    });
    this.timer = setTimeout(() => {
      this.props.onFinish(this.state.position);
    }, 5310);
    /* Note: This MUST match the value in the CSS transition */
  }

  setStartPosition() {
    return Math.floor(Math.random() * totalSymbols) * iconHeight * -1;
  }

  componentDidMount() {
    clearTimeout(this.timer);
  }

  render() {
    let {
      position
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundPositionY: position + 'px'
      },
      className: "icons spin-behavior"
    });
  }

}

class Question extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getInitialState", () => {
      return {
        value: 3
      };
    });

    _defineProperty(this, "handleChange", event => {
      window.console.log('change');
      this.setState({
        value: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      // TODO: write logs
      // Either ask the next question or decide we're done and return to the spinner
      if (this.state.index == questions.length - 1) {
        this.props.onFinish();
      } else {
        this.setState({
          index: this.state.index + 1
        });
      }
    });

    this.state = {
      index: 0,
      value: 3
    };
  }

  render() {
    let {
      index
    } = this.state;

    if (this.props.mode != 'question') {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "toast show"
    }, questions[index], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      id: "typeinp",
      type: "range",
      min: "0",
      max: "100",
      value: this.state.value,
      onChange: this.handleChange,
      step: "1"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit
    }, index < questions.length - 1 ? 'next' : 'submit'));
  }

}

function runApp() {
  let rootElement = document.getElementById('root');
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootElement);
}

runApp();