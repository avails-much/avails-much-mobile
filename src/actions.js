import * as Constants from './constants';

export function createPrayer(payload) {
  return {
    type: Constants.CREATE_PRAYER,
    payload
  };
}
