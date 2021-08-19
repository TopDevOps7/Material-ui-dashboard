import actions from './actions';

const initState = {
  isLoading: false,
  bar: [],
  line: [],
  pie: [],
  labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
};

export default function dashboardReducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case actions.GET_BAR_SUCCESS:
      return {
        ...state,
        bar: action.payload
      };
    case actions.GET_LINE_SUCCESS:
      return {
        ...state,
        line: action.payload
      };
    case actions.GET_PIE_SUCCESS:
      return {
        ...state,
        pie: action.payload
      };
    default:
      return state;
  }
}
