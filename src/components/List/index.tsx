import React from 'react';
import './index.scss';

function List() {
  const item = [
    {
      tarefa: 'React',
      tempo: '01:30:00'
    },
    {
      tarefa : 'JavaScript',
      tempo : '02:00:00'
    }
  ]
  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul className='listaTarefas'>
      {item.map((e, index) => (
        <li key = {index} className='item'>
          <span>{ e.tarefa }</span>
          <h3>{ e.tempo }</h3>
        </li>
      ))}      
      </ul> 
    </aside>
  )
}

export { List }