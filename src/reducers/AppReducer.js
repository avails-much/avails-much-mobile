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
  ]),
  groupList: fromJS([
    {
      title: 'FCC Youth',
      created_at: 'Created 2 mins ago',
      ppl_count: '35',
    },
    {
      title: 'FBC Ladies',
      created_at: 'Created 5 mins ago',
      ppl_count: '102',
    },
    {
      title: 'FC Men',
      created_at: 'Created 12 days ago',
      ppl_count: '12',
    }
  ]),
  journalList: fromJS([
    {
      title: 'Day 1',
      created_at: 'Created 5 days ago',
    },
    {
      title: 'Day 2',
      created_at: 'Created 2 days ago',
    },
    {
      title: 'Day 3',
      created_at: 'Created 5 mins ago',
    }
  ])
}, 'AppStateRecord');

const defaultState = new AppStateRecord();

export default function (state = defaultState, action) {
  switch (action.type) {

    case Constants.CREATE_PRAYER:
      return state.set('prayerList', state.get('prayerList').push(action.payload));

    case Constants.PRAYER_LIST_SUCCESS:
      return state.set('prayerList', state.get('prayerList').merge(action.payload));

    default:
      return state;
  }
}
