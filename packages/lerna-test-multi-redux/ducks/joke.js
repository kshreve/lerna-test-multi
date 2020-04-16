const GET_JOKE = 'GET_JOKE';

const initialState = {
  joke: {}
};

export default (state = initialState, action) => {
  switch( action.type ) {
    case GET_JOKE:
      const { joke } = action.payload;

      return {
        joke
      }
    default:
      return state
  }
}

export const getJoke = () => (dispatch) => {
  return fetch('https://api.chucknorris.io/jokes/search?query=fire')
    .then((response) => {
      return response.json();
    })
    .then(({ result }) => {
      return dispatch({
        type: GET_JOKE,
        payload: {
          joke: result[0]
        }
      })
    });
}
