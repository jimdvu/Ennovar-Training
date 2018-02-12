import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

  switch (action.type){
    case FETCH_WEATHER:
      //creates a new array that contains old data *AND* new data
        return state.concat([action.payload.data]);
      //return [ action.payload.data, ...state ]; === [city, city, city]
  }
  return state;
}
