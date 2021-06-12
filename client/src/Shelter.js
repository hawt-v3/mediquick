import { GET_SHELTERS } from './types'

export const getShelters = (items) => async dispatch => {
    console.log('GETTING SHELTERS');
    const response = await fetch('https://givvy-api.herokuapp.com/api/shelter/getShelters', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);
    if (!data) throw new Error('Empty response from server');
    if (data.error) throw new Error(data.error.message);
  
    const reformattedData = {}
    for(let i = 0; i < data.length; i++) {
      const object = data[i]
      reformattedData[object.name] = {
        address: object.address,
        category: object.category,
        donations: object.donations,
        lat: object.lat,
        long: object.long,
        type: object.type
      }
    }
    dispatch({
        type: GET_SHELTERS,
        payload: reformattedData
      });
    }