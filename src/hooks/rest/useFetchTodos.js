import { useState, useEffect } from 'react';
import { getListAPI } from '@/api/todos';
import { STATUS } from '@/constants/status';

export const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const refetch = async () => {
    try {
      setStatus(STATUS.LOADING);
      const todoList = await getListAPI();
      setTodos(todoList);
      setError(null);
      setStatus(STATUS.SUCCESS);
    } catch (error) {
      setError(error);
      setStatus(STATUS.ERROR);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return {
    todos,
    status,
    error,
    refetch,
  };
};
