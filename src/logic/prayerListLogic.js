import {createLogic} from 'redux-logic';
import { PRAYER_LIST_PENDING, PRAYER_LIST_URL } from '../constants';
import { prayerListSuccess, prayerListError } from '../actions'

const fetchPollsLogic = createLogic({

  type: PRAYER_LIST_PENDING,

  process({ httpClient, getState, action }, dispatch, done) {
    console.log('in process');
    httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.data)
      .then(data => dispatch(prayerListSuccess(data)))
      .catch(err => {
             //console.error(err); // log since could be render err
             console.log('ERROR from LOGIC: ', err); // log since could be render err
             dispatch(prayerListError(err))
      })
      .then(() => done()); // call done when finished dispatching
  }
});
