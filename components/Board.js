const React = require('react');
const Field = require('./Field');

class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;


    return (
      <div className = "board">
        {
          board.map((cell, pfft) =>
            <Field key={pfft} player={cell} onClick={onClick.bind(null, pfft)}/>
          )
        }
      </div>
    );
  }
}

module.exports = Board;
