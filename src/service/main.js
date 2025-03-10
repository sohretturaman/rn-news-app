import { BASE_URL } from "./NetworkUrls"





const get = urlOption => {
  return fetch(BASE_URL + urlOption, {
    headers: {
      'content-type': 'application/json',
      authorization: 'apikey 5VYJFd1uzKC3OyO8uc54PV:3zHo7eg7YhhwdEmFJfb8gW',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const post = (urlOption, body) => {
  return fetch(BASE_URL + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 4R1O6EVH9W33C906CoyJMH:6QK6f0Kblt8izn5HD5tDxP',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post};



