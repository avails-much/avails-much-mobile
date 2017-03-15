import * as Constants from './constants';

export function createPrayer(payload) {
  return {
    type: Constants.CREATE_PRAYER,
    payload
  };
}

export function prayerListPending(payload) {
  return {
    type: Constants.PRAYER_LIST_PENDING,
    payload
  };
}

export function prayerListSuccess(payload) {
  return {
    type: Constants.PRAYER_LIST_SUCCESS,
    payload
  };
}

export function prayerListError(payload) {
  return {
    type: Constants.PRAYER_LIST_ERROR,
    payload,
    error: true
  };
}
