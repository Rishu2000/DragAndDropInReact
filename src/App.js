import React from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import './App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext>
          <Droppable droppableId="characters">
            {(provided) => (
        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {finalSpaceCharacters.map(({id, name, thumb}, index) => {
            return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
              <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <div className="characters-thumb">
                  <img src={thumb} alt={`${name} Thumb`} />
                </div>
                <p>
                  { name }
                </p>
              </li>
              )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </ul>
        )}
        </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p>
    </div>
  );
}
export default App;