// Endpoints
const endpoints = {
  allCustomers: 'http://127.0.0.1:8000/api/customer/index/',
  login: 'http://127.0.0.1:8000/api/customer/login',
  logout: 'http://127.0.0.1:8000/api/customer/logout/'
};

/**
 *
 */
async function getAllCustomers() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let result = await fetch(endpoints.allCustomers, requestOptions)
    .then(response =>
      response.json()
    )

    // Error
    .catch((error) => {
      console.error('Error:', error);
    });

  return result;
}

/**
 *
 */
 async function customerLogin(fields) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'    },
    body: JSON.stringify(fields)
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

/**
 * 
 */
 async function customerLogout(fields) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(fields)
  };

  let result = await fetch(endpoints.logout, requestOptions)
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
  getAllCustomers,
  customerLogin,
  customerLogout
}