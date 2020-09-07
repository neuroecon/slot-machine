// TODO: ticking noises
// TODO: write to a log file
// TODO: apply the css transition value in js so we can manipulate variables and keep in sync w timeout
// TODO: add directions plus screen buttons for up down arrows
// TODO: consider resetting the offset difference for sanity's sake
// TODO: randomize a few different cubic bezier curves + timings
// TODO: rotate the other way
// TODO: Questions scale 0-100 motivation & happiness -100-100


const spinsPerQuestion = 2;
const spinsToWriteLogs = 10;
const questions = [
    'How happy are you?',
    'Do you want to play again?'
  ];


// const parameters
const iconHeight = 101;
const totalSymbols = 6;

  
function RepeatButton(props) {
  return (
    <button 
      aria-label='Play again.' 
      id='repeatButton' 
      onClick={props.onClick}
      disabled={props.disabled}>spin
    </button>
  );
}

function WinningSound(props) {
    if (props.winner === null) return null;
    if (props.winner) {
      return (
      <audio autoPlay="autoplay" className="player" preload="false">
        <source src="./cash_register2_cut.wav" />
      </audio>
      );
    }
  return (
  <audio autoPlay="autoplay" className="player" preload="false">
    <source src="./klaxon_cut.wav" />
  </audio>
  );
}

function getSymbolFromPosition(position) {
  return position/iconHeight%totalSymbols;
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
    this.state = {
      mode: 'selecting',
      numSpins: 0,
      firstPosition: ((Math.floor((Math.random()*totalSymbols)))*iconHeight)*-1
    }
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.unblockSpinner = this.unblockSpinner.bind(this)
    
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
    this.setState({ mode: 'spinning', numSpins: this.state.numSpins+1 });
    this._child.reset();
  }

  finishHandler(value) {
    let results = getSymbolFromPosition(this.state.firstPosition) == getSymbolFromPosition(value);
    this.setState({ mode: results });
    // When the spinner finishes, wait a little while and reset the mode
    window.setTimeout(() => {
      let nextMode = 'selecting'
      if (this.state.numSpins % spinsPerQuestion == 0) {
          nextMode = 'question'
      }
      this.setState({mode: nextMode});
    }, 2000);
  }

  unblockSpinner() {
    window.console.log('unblock spinner');
    this.writeToLogs(["0", "1", "2"]);
    // TODO: handle end condition
    // alert('thank you for playing, that was all the data we needed');
    this.setState({mode: 'selecting'});
  }

  handleKeyPress = (event) => {
    // ignore key presses while the spinner is running
    if (this.state.mode !== 'selecting') return;
    switch(event.keyCode) {
        case 38:  // up
            this.setState({firstPosition: this.state.firstPosition - iconHeight});
            break;
        case 40:  // down
            this.setState({firstPosition: this.state.firstPosition + iconHeight});
            break;
        case 13:  // Enter key spins the spinner
            this.handleClick();
            return;
    }
  }

getDirectionsMessage = (mode) => {
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
}

render() {
  const { mode, numSpins } = this.state;
  return (
    <React.Fragment>
      <WinningSound mode={mode}/>
      <h1 style={{color: (mode == 'selecting'? 'white' : 'gold')}}>
          {this.getDirectionsMessage(mode)}&nbsp;</h1>
      <div className="spinner-resizer">
      <div className={'spinner-container ' + mode}>
          <div style={{backgroundPositionY: this.state.firstPosition + 'px'}}
              className="icons" />
        <Spinner onFinish={this.finishHandler} ref={(child) => { this._child = child; }} />
        <div className="gradient-fade"></div>
      </div>
      </div>
      <RepeatButton onClick={this.handleClick} disabled={mode !== 'selecting'}/>
      <Question mode={mode} onFinish={this.unblockSpinner}/>
    </React.Fragment>
  );
}
}  

class Spinner extends React.Component {
constructor(props){
super(props);
this.reset = this.reset.bind(this);
this.state = {
  position: this.setStartPosition()
}
};

reset() {

  const totalDistance = Math.floor(Math.random()*(totalSymbols-1)+1);
  if (this.timer) {
    clearInterval(this.timer);
  }


  this.setState({
    position: this.state.position - ((12*totalSymbols + Math.floor((Math.random()*totalSymbols))) * iconHeight)
  })
  this.timer = setInterval(() => {
    this.tick()
  }, 5310); /* Note: This MUST match the value in the CSS transition */
}

// slow speed
speed = iconHeight;


setStartPosition() {
return ((Math.floor((Math.random()*totalSymbols))) * iconHeight)*-1;
}

tick() {
    clearInterval(this.timer);
    this.props.onFinish(this.state.position);
}

componentDidMount() {
  clearInterval(this.timer);
}

render() {
  let { position } = this.state;
  return (
    <div style={{backgroundPositionY: position + 'px'}}
         className="icons spin-behavior" />
  )
}
}

class Question extends React.Component {
constructor(props){
  super(props);
  this.state = {
      index: 0,
      value: 3
  }
};

getInitialState = () => {
  return {value: 3};
};

handleChange =  (event) => {
  window.console.log('change');
  this.setState({value: event.target.value});
};
handleSubmit =  (event) => {
  // TODO: write logs
  
  // Either ask the next question or decide we're done and return to the spinner
  if (this.state.index == questions.length-1) {
      this.props.onFinish();
  } else {
      this.setState({index: this.state.index+1});
  }
};

render() {
  let { index } = this.state;
  if (this.props.mode != 'question') {
    return null;
  }
  return (
    <div className="toast show">

      {questions[index]}<br/><br/>
      <input
        id="typeinp"
        type="range"
        min="0" max="100"
        value={this.state.value}
        onChange={this.handleChange}
        step="1"/>
        <br/>
      <button onClick={this.handleSubmit}>{(index < questions.length - 1) ? 'next' : 'submit'}</button>
    </div>
  )
}
}

function runApp() {
let rootElement = document.getElementById('root');
ReactDOM.render(
  <App />,
  rootElement
)
}

runApp();