import { FETCH_WEATHER } from '../actions/index';


export default function(state = [] , action){

  switch (action.type) {
  case FETCH_WEATHER:
  console.log(action.payload)
  return [ action.payload.data, ...state ];

    //above behaves like concat, creates new array ES6 sugar
    //never manipulate state in redux

  }


  return state;
}
