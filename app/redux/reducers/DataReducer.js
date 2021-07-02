import Constants from './../ActionTypes';
import moment from 'moment';
import {initData} from '../Data';

const slots = [
  {
    slotName: '9:00 AM - 11:00 AM',
    alloted: false,
    slotId: 1,
    name: null,
    mail: null,
    phone: null,
    allotSlot: function (userName, mail, phoneNo) {
      this.name = userName;
      this.mail = mail;
      (this.phone = phoneNo), (this.alloted = true);
    },
    deAllotSlot: function () {
      this.name = null;
      this.mail = null;
      this.phone = null;
      this.alloted = false;
    },
  },
  {
    slotName: '12:00 PM - 2:00 PM',
    alloted: false,
    slotId: 2,
    name: null,
    mail: null,
    phone: null,
    allotSlot: function (userName, mail, phoneNo) {
      this.name = userName;
      this.mail = mail;
      (this.phone = phoneNo), (this.alloted = true);
    },
    deAllotSlot: function () {
      this.name = null;
      this.mail = null;
      this.phone = null;
      this.alloted = false;
    },
  },
  {
    slotName: '3:00 PM - 5:00 PM',
    alloted: false,
    slotId: 3,
    name: null,
    mail: null,
    phone: null,
    allotSlot: function (userName, mail, phoneNo) {
      this.name = userName;
      this.mail = mail;
      (this.phone = phoneNo), (this.alloted = true);
    },
    deAllotSlot: function () {
      this.name = null;
      this.mail = null;
      this.phone = null;
      this.alloted = false;
    },
  },
  {
    slotName: '6:00 PM - 8:00 PM',
    alloted: false,
    slotId: 4,
    name: null,
    mail: null,
    phone: null,
    allotSlot: function (userName, mail, phoneNo) {
      this.name = userName;
      this.mail = mail;
      (this.phone = phoneNo), (this.alloted = true);
    },
    deAllotSlot: function () {
      this.name = null;
      this.mail = null;
      this.phone = null;
      this.alloted = false;
    },
  },
];
const intialState = {
  loading: false,
  actionsLogs: null,
  errorMsg: null,
  slotsData: [
    {
      name: 'Today',
      dateId: moment().format('DD-MMMM-YYYY'),
      date: moment().format('MMM Do').toString(),
      slots: [...slots],
    },
    {
      name: 'Tomorrow',
      date: moment().add(1, 'days').format('MMM Do').toString(),
      dateId: moment().add(1, 'days').format('DD-MMMM-YYYY'),
      slots: [...slots],
    },
    {
      name: 'Day after Tomorrow',
      date: moment().add(2, 'days').format('MMM Do').toString(),
      dateId: moment().add(2, 'days').format('DD-MMMM-YYYY'),
      slots: [...slots],
    },
  ],
};
export default (state = initData, action) => {
  switch (action.type) {
    case Constants.DATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case Constants.DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        actionsLogs: action.payload,
      };
    }
    case Constants.DATA_FAIL: {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case Constants.ALLOT_ACTIONS_SUCCESS:
      // console.log('REDUCER\n', state);
      // console.log('ACTION\n', action.payload.mail);
      const {mail, name, phone} = action.payload;
      // console.log(mail, name, phone);

      // console.log(
      //   state.slotsData[action.payload.current].slots[action.payload.inner],
      // );

      state.slotsData[action.payload.current].slots[action.payload.inner].mail =
        mail;
      // action.payload.mail;
      state.slotsData[action.payload.current].slots[
        action.payload.inner
      ].phone = phone;
      // action.payload.phone;
      state.slotsData[action.payload.current].slots[action.payload.inner].name =
        name;
      state.slotsData[action.payload.current].slots[
        action.payload.inner
      ].alloted = true;
      // action.payload.name;

      // console.log('STATE\n', state);
      return {
        ...state,
        slotsData: state.slotsData,
      };
    case Constants.ALLOT_ACTIONS_FAIL:
      state.slotsData[action.payload.current].slots[action.payload.inner].mail =
        null;
      state.slotsData[action.payload.current].slots[
        action.payload.inner
      ].phone = null;
      state.slotsData[action.payload.current].slots[action.payload.inner].name =
        null;
      state.slotsData[action.payload.current].slots[
        action.payload.inner
      ].alloted = false;
      // action.payload.name;

      // console.log('STATE\n', state);
      return {
        ...state,
        loading: true,
        slotsData: state.slotsData,
      };
    default: {
      return state;
    }
  }
};
