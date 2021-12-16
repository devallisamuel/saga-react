// const initialState = {
//     course:[]
// }

const reducerFunction = (state=[],action) => {
    switch (action.type)    {
        case "ROTATE_FROM_SAGA":
            // return {
            //     ...state,
            //     course:[...state.course,action.data]
            // };
        return  [...state, {course:[action.data]}]
        default:
            return state;
    }
}
export default reducerFunction;