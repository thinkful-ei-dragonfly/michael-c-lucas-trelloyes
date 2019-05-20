import React from 'react';
import './List.css';
import Card from './Card'
import STORE from '../store.js'

// function Tooltip(props) {
//   let cardArray;
//   return (
//     <section className='List'>
//       <header className='List-header'>
//         <h2>{props.header}</h2>
//       </header>
//       <div className='List-cards'>
//         {props.cards}
//         <button type='button' className='List-add-button'>
//           + Add Random Card
//         </button>
//       </div>
//     </section>
//   )
// }

class List extends React.Component {

  constructor(props){
    super(props);
    this.cardArray = props.cards.map(card => {
      return (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
        />
      )
    })
  }

  render(){
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{this.props.header}</h2>
        </header>
        <div className='List-cards'>
          {this.cardArray}
          <button type='button' className='List-add-button'>
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

export default List;
