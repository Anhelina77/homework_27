import React, { useEffect, useContext } from 'react';
import TodoHeader from 'components/Todo/TodoHeader';
import TodoToggleAll from 'components/Todo/TodoToggleAll';
import TodoList from 'components/Todo/TodoList';
import TodoFooter from 'components/Todo/TodoFooter';
import { TodosContext, FilterContext, AuthContext } from 'contexts';
import { setLocation, getHash } from 'services/location';
import { useTodos } from 'store/todoSlice';
import { useLoginMutation } from 'store/authApi';
import http from 'services/http';
import './styles.css';

// test name
const NAME = 'Test user';

export const Home = props => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const { initTodos, addTodo, removeTodo, updateTodo } = useContext(TodosContext);
  const { activeFilter, filters, toggleFilter } = useContext(FilterContext);
  const { getList, todoList, addTask, checkedTask, editTask, removeTask } = useTodos();
  const [login, { data }] = useLoginMutation();

  useEffect(() => {
    // const storage = getStorage({ name: NAME });
    // if (Array.isArray(storage)) {
    //   initTodos(storage);
    // }

    !isAuth &&
      login(NAME).then(res => {
        if (res.data?.access_token) {
          http.setHeaders({ Authorization: `Bearer ${res.data.access_token}` });
          toggleAuth(true);
          getList();
        }
      });

    const filter = getHash();
    if (filter) {
      toggleFilter(filter);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTodos = () => {
    if (activeFilter.checked !== null) {
      return todoList.filter(item => item.checked === activeFilter.checked);
    } else {
      return todoList;
    }
  };

  const onAdd = async data => {
    const res = addTask(data);
    if (res._id) {
      addTodo(res);
    }
  };

  const onCheck = todoItem => async () => {
    const res = await checkedTask(todoItem);
    if (res._id) {
      updateTodo(res);
    }
  };

  const onDelete = todoItem => async () => {
    const res = await removeTask(todoItem._id);
    if (!res.message) {
      removeTodo(todoItem._id);
    }
  };

  const onUpdate = async ({ item, text }) => {
    if (item.value !== text.value) {
      const res = await editTask({ ...item, value: text.value, priority: item.priority });
      if (res._id) {
        updateTodo(res);
      }
    }
  };

  const updateFilter = filterItem => e => {
    e.preventDefault();
    toggleFilter(filterItem.name);
    setLocation(filterItem.name);
  };

  return (
    <section className="todoapp">
      <TodoHeader onAdd={onAdd} />
      <section className="main">
        <TodoToggleAll />
        <TodoList todos={filteredTodos()} onCheck={onCheck} onDelete={onDelete} onUpdate={onUpdate} />
      </section>
      <TodoFooter activeFilter={activeFilter} filters={filters} updateFilter={updateFilter} />
    </section>
  );
};
