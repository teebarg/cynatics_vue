import moment from 'moment';

export default (ctx, inject) => {
  const mem = (e) => moment(e).calendar(null, {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[Last] dddd',
    nextWeek: '[Next] dddd',
    sameElse: 'L'
  });
  inject('moment', mem)
}
