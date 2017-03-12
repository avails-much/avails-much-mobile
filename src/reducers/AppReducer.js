import { fromJS, Record, List } from 'immutable';
import * as Constants from '../constants';

export const AppStateRecord = Record({
  prayerList: fromJS([
    {
      title: 'Prayer One',
      description: 'more details here',
      created_at: 'Created 2 mins ago',
    },
    {
      title: 'Prayer Two',
      description: 'more details here',
      created_at: 'Created 5 mins ago',
    }
  ])
});

const defaultState = new AppStateRecord();

export default function (state = defaultState, action) {
  switch (action.type) {

    case Constants.CREATE_PRAYER:
      return state.set('prayerList', state.get('prayerList').push(action.payload));

    default:
      return state;
  }
}
