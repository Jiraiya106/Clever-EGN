import React, { useState } from "react";

import "./todo.css";

export const Todo = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    setTodoArr([
      ...todoArr,
      {
        key: Date.now(),
        task: text,
        status: 'do'
      }
  ]);
    setText('');
  };

  const onDelete = (itemKey) => {
    setTodoArr(todoArr.filter(({key}) => key !== itemKey));
  }

  const onStatus = ({target: { value} }, index) => {
    const newTodo = [...todoArr];
    newTodo[index].status = value;
    setTodoArr(newTodo);
  };

  return (
    <div className="todo">
      <h2>TODOшка</h2>
      <div className="input-block">
        <input className="task-input" value={text} type="text" onChange={({target: { value }}) => {setText(value)}} />
        <button className="add-button" type='button' onClick={addItem}>ADD</button>
      </div>
      <ol className='task-list'>
      {todoArr.map(({task, key, status}, index) => (
        <li key={key} className={`task ${status === 'do' ? 'do' : 'done'}`}>
          <span className="task-text">{task}</span>
          <select name="status" className="status-select" onChange={(e) => onStatus(e, index)}>
            <option value="do">Сделать</option>
            <option value="done">Готово</option>
          </select>
          <button className="delete-task" onClick={() => {onDelete(key)}}>X</button>
        </li>
      ))}
      </ol>
    </div>
  )}