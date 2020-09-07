// TODO: ticking noises
// TODO: write to a log file
// TODO: apply the css transition value in js so we can manipulate variables and keep in sync w timeout
// TODO: add directions plus screen buttons for up down arrows
// TODO: consider resetting the offset difference for sanity's sake
// TODO: randomize a few different cubic bezier curves + timings
// TODO: rotate the other way
// TODO: Questions scale 0-100 motivation & happiness -100-100
// TODO: hammer.js drag listener for changing the start value

/** Note: compiled from babel to js via https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=PTAEBUHkBFILlAFwJYGMDWyB2BzUWB7ZAZwFNiAoECGeUAdwCdlFSkDQBDUAGwLwBmyHqSpgosBJwAO0ngE8kACzapixJI05ZiLZASygAbpx4BXNtlAArDcQ71V20AFttyaWZ6dWxzs04AIxENbQATUHRSUmlQK2J5LFQGJGQXUgIzRDEaSS4wiLDkRlJUFAMNOTM7VBLSQ0CsxArQAQJGUDNYsIJ6Q39GXspqCTpUCuQw0g6SskQUXGU2AgEBOdAi1en61DY2juJ3RHkAcjtOKJzRhC0sHpdkAC82bgFSeg3kLZKsRFBUMyBNCgQKkR7Iab_MyMIzkUAAalSD1ww3EtBuBEQPjYiBUoExKg69E48iu6NAAEULMRyjpQMRUKY2AAGAC0AEZmczXJjkCZaaAAGSgJQyaTYcgaDlc6XMijy8Y6P7EcU6AAK0yp5AFAF5QAAmADcFEVNNAAEdqbSNHqANoUUCO0AnAASvRFYsU_jY8kyAH4TgAaB1Ok7QDi-swMbR_ZqgOQkrg4TjYAMhgC6xvl1FNf2k_k46VYjEoubiipdpGQOCUfz1nPZxrLzSxPAAyvIXIECDwbaAAGxZx0UARmJICgBKMVIPgAQk0DAAKaSDaTEACUoAA3iGSohoYZFyHHQAeRrzAygY9O_zITis7ygng6k5q7xe5PYAB0JyvTqdkwviU0gzog84Xlgv7Xo6BgAMI8Gg6A6luK4EGuX5wQhGAAL7QZ8hzBKQYTIah6FFARIhhNhAB8KrYNeJ7AOezRYNRIbrsauEjmOZT6IYADq2BYNgOBtpkdzLquG7bteXygJJaHEF-9BCZCOrqfgXg8Jue4HppPA8Ma_5yQp6EqVgWDTJuO7_o6umMIeeEnpwZhFBwLnNG-JI6gARB5aHvj5_zeOoAByhakL5CbyNMQUrqQfCcMRPkCKYZA-WxtlOie9jQrs9KMKgvlfsAjLEEoAD6JQ4CQxb6hVAKIMpnBGEFwCZbZjEuW5HX_hx164XZpD7g58khs5rn6FwWQEF58i-f50VBagIXEOF6RRe-sXxiUiXJalvakBlDG5YVbDEIVxXAOg3gAB4GA1WTNa1oDteNwDdfoHX9Vxo7jnxoA4MNHZdj2ABigwuGqBC6LSy4w3oBjWbuw16dICO0sAaAGJW1a1gApC2pgg92vacdmABUFMUND6jIIRPJTMQcAUGQIi8bgrOqsJnPmRQfBkBQlranxFAU8ACqraAACCsigKQt2sHcGhTpwZRfrBBAuOjlm_DJjq5owZhlO0pnSTZTrEF00xm_1_64iQX40tioB6hb_4uAQUwIGcCWlAsOBBnhWBmC4baqszoDMsGWVCCWiC04jWAIIui4ALI-EoX4CHwpvp5nX63Pci7rhTRPtp2pMbuupfY1guM1ogpccgN14O0pQjCeVLrhCIHR6u32fYCQSg93cfdfkCEnt3bTqD6K4-kPBiGu8ojsL2EIjLxgk_YGEi4z0Zc9KI7Y7BAQGDh6p_dr0pZ98Jf3PTLv08nxu15t2_ynMKw4AEAAMvwPsg8mAsFIH_QBOAlJT33ofT-jt1CrxDgZI-jpB58CgavW0mYP7_h6ACdIvwvxJTCAAUVhL8f-tV6g2xOFEeQPQ-hBlvl-DeIgADSpB5BqlmBuI-g0_wMB_uAgBQDFwYORv-JkjBECLhOPQUUiA_QBlno6cyjCvymh7KQL8GC5GgIDuwXgQDmESNQQwPevQvz5h-E1dGNI06Sk4EDcR_BAygB8hTHyqiLF3CsTY-odiYaIEceoZxpA5EqAMg4doPAwjMM8d4_h8pHRsKXlhdAJd9bHwQcDLErBFxbkZqQH2dELIiWYSHMOEcECD2dqwL8VSr46HhOyUA2EfGDwaifOJhdyDDRLskkMncR5j03jbEw5hSCSKdCIP4swvCID7EDRAJNwaQ0TnDOp-SdFxxpJsvim4NIrLWTwCGWsDlLkmRYTpX85hth2YU4pNxyCLI0B08x1B-IqEMLic6T8OgjPKuQdxxIWBcF4CwRAIgGA9JeHcUAsxhpLGKdedRVi5jgDSBkLIqcjnUWyf-OZ-AFYhK9mwPUvt2YBxOHhEy2zsSNNDs0jQ-N6QRw1IwLUNIAYaWZDMrKjpLKKzTuS1eJxhY8oMLSrKAj7Z3LydiQpntvYkpFeSj5A13H6i5PyoZjp74X3QM0yyjAsnu18RorRIhdH8DkYajA7Lr4nFuY7AxIjIHEEXLaHyzIfLuJ8uyf1Hj9Q-XTD4kY5I0nyzuCJFFCsQLMEIU1a81BpGyJOLibQ6BQCRlaO0eM74RLuKzX8YkoQDIorCD4bgjgSVESIi68xdTFUFK3Cqkpzo2b-wqZqx0XFUm91IJw7hvDV6LlIBQpursCUWuoNWQgJRIhcJ2pKOECjhA4jxGU01cQNBG3KZzYyAh5IMoaR20AABCDSVKe24BdYi1GDlzHEBUogVASgJ1Tq_PQzWUwBW2TKmwAAzAADgQK9MAXQ8JZRbasx5W49kJwxnxWpdydlD3jpcwwrJyw4yrI3Ptgr_yBBKBccx_4gOgAACzMgg9QRhWAYO2Tgw8pViHij7JQwYNDCCMNIewwiPD9cCO1iI8Rx0pGZzoAo06Kj7JgP0bAKQ34kJ6FOrpH8jTprmPyvXkO7emSfHEfslgcxAiB2A2GtAYoPaKihMOEDcdHb8WEstm-j98kXNuaylR29HNA4swk7ZUzzo3wzjIP8JQBAYbwriKwFwJxZOUc4JFxARsSm6ZC0-wwJwACamRfGgAACQAFYktZaowdMgQXgtOlCycUKDhsAVeC1MVKizat1cfSNXLrXbIWZSY-u4NsANliKR29xTSI7tNXme0g5jQtHiyieVW6sIbOOTb1TqglD2iXEhEDtyEO3YTesRk8Sg2k0nkCIZCW5xh8EYCnC9N7u0BZOH6Z0G7WC_h9jgHs8T1zYRollx0W5B4rJsyUXi9mnEuJc9hQUWBAgqkNIxS723_wniKEYYKqW1oRV8ju6YrJZhPFipj7KOO8dhUJ1uM4ALWSKixBKDov5EQncpyt6n13btbi3IENW6AcCDDHGEbDeXeNKXqbszjyHYYA0RCcaQt0TjA9B4B1a61Io-TrsQNqXPsomshAYMGw9yrIUHkC0eQ7GDYUfQIZCi4P3CDCK5opXSXdxNXl7sIhp2n27OxJ7HfIacE42j5EXSUIS_FZKlKYGVGI48N0nvkKfgDJ-Y6t6cc4FyGEwohS3X80mGft-RIIlFjtiuvZSt7NLTsp-5QKI77aNX4iwGbruSgi-n2Rw_Y1AKG9OWAGtpqG2cBbevLPXC9urwmilsbjopL6hhBVjOdWmttYGECdkw2xtmhmtIhuC1VtE222bV_JFdYWFX5frAt-rrpc7NXhax09ik5S6doqmR2GS6t37UOI-nMOateM2JiKYDZs7EkBSqABnLiNnLnGanAVnEXFrCXBTAfOARXKDL2ByOuK0j4vSl_CgOkIwABgbCIP4AAJKqYwimAHzEHYpkHmbwLS6toRKv6QagATjgG-Dsj6hIhwhVChD0huCVqoEuCaRdjTB4Tv60if4y7WLcY4bySLj8FlxYGnIaCIjIEIExZmr5zwESHoHlxaE1ybgUzCYNy1jrgDS2F6ZKQkFqT0jDRYrpCZCyJZI6izp4SDxH4YQd7m6frzZKEK5IzmbuKlbAacgcSvSWFNasAIDgBvywEACqbY4ArgPgnmWm1ylgvyeIsEbYbYmg2gYRhg4sIYlm9yWIP-yhIB_4S2hhWcOc-hqcuhxhpcphlcPY1cFhVhomTcFMHI-q_wWsOsgSNmYQoqY4siY2lBjAbhOKsig8ThzBVRQ2PwUwZqAGxKRSchAM9uA86G2Ii2OWY03OoevOkU_OguGAIuB2EuCABxl4SuKuaucqgqK0-O2uvkeuGmrIoIooRg-gjABuU-GxXE3xiCTeAMy-ys3B6-TUm-ExesO4e-Jsh-Uk64Fsp-NsR-s882L-dKI2t0CA0ceEeRCAwGkJWYKyNBegxMz-eoXhPhQ0vW24VJoAwG2EnEWYJeC8Tmeo8kk6gS7uIY6K9AmiFQ2itqOAciH62gQMTaIYrGCGXJopRCtRKyX4eRmqvJFAaSbYgIDw1-IpU64pjokaeQ7qxiUCIYIY1ApCLAhIXAxAOaWmwqfwkqAoBaUwqAkwbAjgJwS6PQlkXACKoWcYWmxOjAIYRBfGjKe8CsrseoPpfESkIguAuIeBPmLC_hpuQRgyVR8sh0eZap7GyZZJLCihVZrSRGM-WYWxo22SexcQpJs2xxiZrAR8CZSk_hF616zo6Z0qAGoWyChkGx7Jeky2VOoe0J4eOuzQqWyo0W9Ax0WUW4I5OgtoVZ6Y2EZ4jA7Uh5QeWO2Ang2QxGgEPkxwIE55PkzGt5OutwQMD5xGyIvkfqWRt0vknIfqzGeRPeT-jKepzGcEgpNx88BmEFnx_4NIMQv5Pkp5nUpGyFp4zEl4BeGAQFrCQ6xpgQppNEW4i4VZoAJ4FoVoGZui9QOAuIoAuG7Im4n2JwXpv2XaJpLAaujEGFrEDEGeae7EFAM-8of0MOhgB6ss0gDRvAyKgwmIpCIgyaq8-CocgSX4KyClpAyas48gVB-8IZMWiAKpjoo-sAacfSI2ZqDEklr01EMc9WhlmlyaglXEElsggyQAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.11.6&externalPlugins= */


const spinsPerQuestion = 2;
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

function writeToLogs(log) {
  // Note, this sends a message event that Qualtrics js will listen to and
  // update an embedded data field by appending the new logs data.
  window.parent.postMessage(log, "*");
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
    
    document.addEventListener('keydown', this.handleKeyPress);
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
    // TODO: handle ending the experiment.
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
      // Rotate 12 times plus a small random number
      position: this.state.position - ((12*totalSymbols + Math.floor((Math.random()*totalSymbols))) * iconHeight)
    })
    this.timer = setTimeout(() => {
      this.props.onFinish(this.state.position);
    }, 5310); /* Note: This MUST match the value in the CSS transition */
  }

  setStartPosition() {
    return ((Math.floor((Math.random()*totalSymbols))) * iconHeight)*-1;
  }

  componentDidMount() {
    clearTimeout(this.timer);
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
      value: 0
  }
};

getInitialState = () => {
  return {value: 0};
};

handleChange =  (event) => {
  window.console.log('change');
  this.setState({value: event.target.value});
};
handleSubmit =  (event) => {
  // TODO: write logs
  writeToLogs([1,2,3]);
  // Either ask the next question or decide we're done and return to the spinner
  if (this.state.index == questions.length-1) {
      this.props.onFinish();
  } else {
      this.setState({index: this.state.index+1, value: 0});
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