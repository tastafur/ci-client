export const PHONES_FETCH = 'PHONES_FETCH';
export const ALL_PHONES_SET = 'ALL_PHONES_SET';

export function phonesFetch() {
  return {
    type: PHONES_FETCH
  };
}

export function phonesSet(phones) {
  return {
    type: ALL_PHONES_SET,
    payload: {
      phones
    }
  };
}

