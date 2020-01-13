import React from 'react';
import Todos from '../components/Todo/Todos';

const Home = () => {
  return (
    <div>
      <div className='create-todo-actions'>
        <div className='create-todo-button'>
          <button className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'>
            <i className='material-icons'>add</i>
          </button>
        </div>
        <div className='create-todo-button'>
          <button className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'>
            <i className='material-icons'>list</i>
          </button>
        </div>
        <div className='create-todo-button'>
          <button className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'>
            <i className='material-icons'>alarm</i>
          </button>
        </div>
      </div>
      <div className='mdl-grid'>
        <Todos />
      </div>
    </div>
  );
};

export default Home;
