import React from 'react';
//import '../css/Input.css';

class Input extends React.Component{
  render() {
    return (
          <input
              className="input"
              type={this.props.type ? this.props.type : 'text'}
              id={this.props.id}
              name={this.props.id}
              placeholder={this.props.placeholder}
          />
      );
  }
}

export default Input;
