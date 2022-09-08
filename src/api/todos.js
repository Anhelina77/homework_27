import http from '../services/http';

export const getListAPI = async () => {
  return await http.fetch({
    url: '/api/v1/todo',
  });
};

export const addTaskAPI = async ({ value, priority = 1 }) => {
  return await http.fetch({
    url: '/api/v1/todo',
    method: 'POST',
    data: {
      value,
      priority: Number(priority),
    },
  });
};

export const removeTaskAPI = async _id => {
  return await http.fetch({
    url: `/api/v1/todo/${_id}`,
    method: 'DELETE',
  });
};

export const editTaskAPI = async ({ _id, value, priority = 1 }) => {
  return await http.fetch({
    url: `/api/v1/todo/${_id}`,
    method: 'PUT',
    data: {
      value,
      priority: Number(priority),
    },
  });
};

export const checkedTaskAPI = async _id => {
  return await http.fetch({
    url: `/api/v1/todo/${_id}/toggle`,
    method: 'PUT',
  });
};
