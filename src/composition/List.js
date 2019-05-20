import React from 'react';
import './List.css';
import Card from './Card'

function Tooltip(props) {
  let cardArray;
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards}
        <button type='button' className='List-add-button'>
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

export default Tooltip;
