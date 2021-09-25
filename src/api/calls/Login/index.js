// Endpoints
const endpoints = {
	login: 'http://127.0.0.1:8000/api/login/add',
};

/**
 *
 */
async function addLogin() {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'    },
  };

  let result = await fetch(endpoints.login, requestOptions)
    .then(response => 
      response.json()
    )

    // Error
    .catch((error) => {
      console.error('Error:', error);
    });

  return result;
}

export default {
  addLogin
}
