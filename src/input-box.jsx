import React from 'react';

const Input = ({ value, onChange }) => (
  <input
    type="search"
    className="search-box"
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(() => ({ clicked: true }));
  }

  render() {
    return this.state.clicked ? (
      <Input value={this.props.filter} onChange={this.props.onChange} />
    ) : (
      <input style={{ width: '100px' }} type="button" onClick={this.onClick} />
    );
  }
}

export default Input;
