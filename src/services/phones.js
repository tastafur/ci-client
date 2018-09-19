import apiFetch from './apiFetch';

export const getPhones = data =>
  apiFetch({
    baseUrl: data.baseUrl,
    endPoint: encodeURI('/phones'),
    method: 'GET'
  });
