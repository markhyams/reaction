import moment from 'moment';

export const dueClass = card => {
  const diff = moment(card.dueDate).diff(new Date(), 'days');

  if (card.completed) {
    return 'completed';
  } else if (diff < -1) {
    return 'overdue';
  } else if (diff < 0) {
    return 'overdue-recent';
  } else if (diff < 1) {
    return 'due-soon';
  } else {
    return 'due-later';
  }
};
