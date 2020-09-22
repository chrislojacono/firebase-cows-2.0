import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  $('#app').html('');
  cowData.getCows().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.cowMaker(item));
      });
    } else {
      $('#app').append('<h2>NO FARMERS</h2>');
    }
  });
};

export default { cowsView };
