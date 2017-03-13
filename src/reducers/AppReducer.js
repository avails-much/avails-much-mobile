import { fromJS, Record, List } from 'immutable';
import * as Constants from '../constants';

export const AppStateRecord = Record({
  prayerList: fromJS([
    {
      title: 'Prayer One',
    },
    {
      title: 'Prayer Two',
    }
  ])
});

const defaultState = new AppStateRecord();

export default function (state = defaultState, action) {
  switch (action.type) {

    case Constants.CREATE_PRAYER:
      return state.set('prayerList', state.get('prayerList').push(action.payload));

    case Constants.PRAYER_LIST_SUCCESS:
      console.log('payload in reducer: ', action.payload);
      return state.set('prayerList', state.get('prayerList').push(fromJS(action.payload)));

    default:
      return state;
  }
}
