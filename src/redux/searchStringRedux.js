//---------------- selectors ---------------- - funkcje do przygotowywania danych z magazynu

export const getSearchString = (state) => state.searchString;

//actions

const createActionName = (actionName) => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// ---------------- action creators ---------------- -funkcje przygotowujące obiekty akcji

export const updateSearchstring = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
