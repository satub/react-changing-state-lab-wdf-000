const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null,null,null,null,null,null,null,null,null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null,null,null,null,null,null,null,null,null],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
  }

  getWinner () {
    return undefined;
  }

  isComplete () {
  }

  render () {
    let winner = this.getWinner();

    return (
      <div className = "game">
        // <Board board={[null,null,null,null,null,null,null,null,null]}/>
        <Board />
        {winner ? <Status winner={winner}/> : ''}
        <button className = "game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
