import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PRAYER_LIST_PENDING, PRAYER_LIST_URL } from '../constants';
import { prayerListPending, prayerListSuccess, prayerListError } from '../actions'
import PrayerList from '../components/PrayerList';

function mapStateToProps (state) {
  return {
    prayerList: state.app.get('prayerList').toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onPrayerListPending: () => dispatch(prayerListPending()),
    onPrayerListSuccess: (data) => dispatch(prayerListSuccess(data)),
    onPrayerListError: () => dispatch(prayerListError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerList)
