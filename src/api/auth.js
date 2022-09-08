import http from '../services/http';

export const loginAPI = async value => {
  const res = await http.fetch({
    method: 'POST',
    url: '/api/v1/auth/login',
    data: { value },
  });

  if (res.access_token) {
    http.setHeaders({ Authorization: `Bearer ${res.access_token}` });
    return res;
  }
};
