import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='Card'>
      <button type='button'>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

class CardClass extends React.Component {
  static defaultProps = {
    title: '',
    content: ''
  };
  render(){
    return (
      <div className='Card'>
        <button type='button'>delete</button>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Card;
