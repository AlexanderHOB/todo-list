import {  crearTodoHtml } from './js/componentes';
import './style.css'
import {Todo, TodoList} from './classes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript');
todoList.todos.forEach(crearTodoHtml);