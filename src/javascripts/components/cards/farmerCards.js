import deleteCow from '../../helpers/data/cowData';

const farmerMaker = (farmerObject) => {
  const domString = `<div class="card farmer" style="width: 18rem;" id=${farmerObject.uid}>
                      <img class="card-img-top" src="${farmerObject.image}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Farmer ${farmerObject.name}</h5>
                        <a href="#" class="btn btn-primary" id=${farmerObject.uid}>See Cows</a>
                        <a href="#" id="${farmerObject.uid}" class="btn btn-danger delete-farmer">Delete Farmer</a>
                      </div>
                    </div>`;

  $('body').on('click', '.card.farmer .btn.delete-farmer', (e) => {
    e.stopImmediatePropagation();
    console.warn('Clicked Delete Farmer', e.currentTarget.id);
    $(`.card#${farmerObject.uid}`).remove();
    deleteCow.deleteCow(e.currentTarget.id);
  });
  return domString;
};

export default { farmerMaker };
