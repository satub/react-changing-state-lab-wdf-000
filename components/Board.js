const React = require('react');
const Field = require('./Field');

class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;
    return (
      <div className = "board">
        {
          this.props.board.map((cell) =>
            <Field player={cell} onClick={this.props.onClick}/>
          )
        }
      </div>
    );
  }
}

module.exports = Board;
