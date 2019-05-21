import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import List from './List'
import Card from './Card';

describe('<List />', () => {
  it('Renders List without failing [Snapshot Test]', () => {
    // Renders list as JSON
    // const cardArray = [<Card key={1} title='Title 1' content='Content 1'/>,<Card key={2} title='Title 2' content='Content 2'/> ];
    const cardArray = [{id: 1}, { id: 2}];
    const tree = renderer.create(<List cards={cardArray}/>).toJSON();
    // Checks whether it matches the previous Snapshot
    expect(tree).toMatchSnapshot();
  })
})
