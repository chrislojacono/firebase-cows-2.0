import farmersView from '../components/views/farmersView';
import cowView from '../components/views/cowsView';

const viewHelper = (id) => {
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView();
    case 'cows-link':
      return cowView.cowsView();
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = () => {
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
