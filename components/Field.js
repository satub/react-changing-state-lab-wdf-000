const React = require('react');

class Field extends React.Component {
  render () {
    const { ind, player, onClick } = this.props;
    return (
      <button className = "field" id={ind} disabled={!!player} onClick = {onClick}>{player ? player : ind}</button>
    );
  }
}

module.exports = Field;
