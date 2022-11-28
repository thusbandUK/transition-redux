//MIDDLEWARE
export const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      localStorage.setItem('selectedExamBoard', JSON.stringify(getState()));
      return result;
    };
  };
  
  export const reHydrateStore = () => {
    if (localStorage.getItem('selectedExamBoard') !== null) {
      return JSON.parse(localStorage.getItem('selectedExamBoard')); // re-hydrate the store
    }
  };