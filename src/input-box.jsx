import React, { useState } from 'react';

const Input = ({ value, onChange }) => (
  <input
    type="search"
    className="search-box"
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);

const SearchButton = (props) => {
  const [clicked, toggleClick] = useState(false);
  return clicked ? (
    <Input value={this.props.filter} onChange={props.onChange} />
  ) : (
    <input
      style={{ width: '100px' }}
      type="button"
      onClick={() => toggleClick(!false)}
    />
  );
};

class SearchButton1 extends React.Component {
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
