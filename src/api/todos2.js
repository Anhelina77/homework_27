import http from '@/services/http';

export const getListAPI = async () => {
  return await http.fetch({
    url: '/api/v2/todo',
  });
};

export const addTaskAPI = async ({ value, priority = 1 }) => {
  const date = new Date().toISOString();
  return await http.fetch({
    url: '/api/v2/todo',
    method: 'POST',
    data: {
      value,
      priority: Number(priority),
      board: '0',
      user: 'Test user',
      checked: false,
      addedAt: date,
      updatedAt: date,

    },
  });
};

export const removeTaskAPI = async _id => {
  return await http.fetch({
    url: `/api/v2/todo/${_id}`,
    method: 'DELETE',
  });
};

export const editTaskAPI = async ({ _id, value, priority = 1, ...other}) => {
  return await http.fetch({
    url: `/api/v2/todo/${_id}`,
    method: 'PUT',
    data: {
      value,
      priority: Number(priority),
      ...other
    },
  });
};

export const checkedTaskAPI = async (todoItem) => {
  return await http.fetch({
    url: `/api/v2/todo/${todoItem._id}`,
    method: 'PUT',
    data: {...todoItem, checked: !todoItem.checked},
  });
};
