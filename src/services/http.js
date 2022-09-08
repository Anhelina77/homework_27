class http {
  constructor() {
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }

  setHeaders = headers => {
    this.headers = { ...this.headers, ...headers };
  };

  fetch = ({
    url,
    method = 'GET',
    data,
    mode = 'cors',
    cache = 'no-cache',
    credentials = 'same-origin',
    headers,
    redirect,
    referrerPolicy,
    body,
  }) => {
    return fetch(url, {
      method,
      mode,
      cache,
      credentials,
      headers: { ...this.headers, headers },
      redirect,
      referrerPolicy,
      body: data ? JSON.stringify(data) : body,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .catch(error => {
        return error.message ? { statusCode: 0, message: error.message } : error.json();
      });
  };
}

export default new http();
