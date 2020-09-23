import farmersView from '../components/views/farmersView';
import cowView from '../components/views/cowsView';
import addCow from '../components/views/addCowView';

const viewHelper = (id) => {
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView();
    case 'cows-link':
      return cowView.cowsView();
    case 'add-cow-link':
      return addCow.addCowView();
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
