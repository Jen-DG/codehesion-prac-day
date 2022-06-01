import React from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export function Home() {
    const location = useLocation()
    const state = location.state
    console.log(location)
    const token = state.token

    function apiCall() {
    axios.get('https://edeaf-api-staging.azurewebsites.net/v1/Categories', {
    headers: {
    'Authorization': `Bearer ${token}`
    }
    })
    .then((res) => {
    console.log(res.data)
    })
    .catch((error) => {
    console.error(error)
    })

  }

  return (
      <div>
      </div>
  )
}


// const axios = require('axios');

// axios.get('https://edeaf-api-staging.azurewebsites.net/v1/Categories').then(resp => {

//     console.log(resp.data);
// });
// const axios = require('axios');

// async function makeRequest() {

//     const config = {
//         method: 'get',
//         url: 'https://edeaf-api-staging.azurewebsites.net/v1/Categories',
//         headers: { 'User-Agent': 'Axios - console app' }
//     }

//     let res = await axios(config)

//     console.log(res.request._header);
// }

// makeRequest();