const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <div className = "field">
        {player}
        <button onClick = {onClick}>

        </button>
      </div>
    );
  }
}

module.exports = Field;
