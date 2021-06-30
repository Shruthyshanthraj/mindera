import moment from 'moment';

export const initData = {
  loading: false,
  actionsLogs: null,
  errorMsg: null,
  slotsData: [
    {
      name: 'Today',
      dateId: moment().format('DD-MMMM-YYYY'),
      date: moment().format('MMM Do').toString(),
      slots: [
        {
          slotName: '9:00 AM - 11:00 AM',
          alloted: false,
          slotId: 1,
          name: null,
          mail: null,
          phone: null,
          allotSlot: function (userName, mail, phoneNo) {
            console.log('SET');
            this.name = userName;
            this.mail = mail;
            (this.phone = phoneNo), (this.alloted = true);
          },
          deAllotSlot: function () {
            console.log('DELETE');

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
      ],
    },
    {
      name: 'Tomorrow',
      date: moment().add(1, 'days').format('MMM Do').toString(),
      dateId: moment().add(1, 'days').format('DD-MMMM-YYYY'),
      slots: [
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
      ],
    },
    {
      name: 'Day after Tomorrow',
      date: moment().add(2, 'days').format('MMM Do').toString(),
      dateId: moment().add(2, 'days').format('DD-MMMM-YYYY'),
      slots: [
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
      ],
    },
  ],
};
