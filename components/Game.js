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

    this.handleTest = this.handleTest.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null,null,null,null,null,null,null,null,null],
      turn: 'X'
    })
  }

  handleTest (ev) {
    ev.preventDefault();
    this.setState({
      board: ['X','O','X','O','X','X','O','X','X'],
      turn: 'O'
    })
  }

  handleClick (i, ev) {
  }

  getWinner () {
    let winner;
    let re;
    let xs = [];
    let os = [];
    this.state.board.filter(function(cell, index){
      if (cell === 'X'){
        xs.push(index);
      }
    });
    this.state.board.filter(function(cell, index){
      if (cell === 'O'){
        os.push(index);
      }
    });
    solutions.forEach(function(solution){
      re = new RegExp(solution.join('\\d*'))
      if (xs.join('').match(re)){
        winner = 'X';
      } else if (os.join('').match(re)){
        winner = 'O';
      } 
    });

    return winner;
  }

  isComplete () {
  }

  render () {
    let won = this.getWinner();

    return (
      <div className = "game">
        <Board board={this.state.board} />
        {won ? <Status winner={won} /> : ''}
        <button className = "game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
