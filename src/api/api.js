const URL = 'https://jsonplaceholder.typicode.com/users';

export default () => {
  return fetch(URL)
              .then(response => Promise.all([response, response.json()]))
}
