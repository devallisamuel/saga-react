import _ from 'lodash';
export const  rotatingSelector = state => _.get(state,'rotating', '');
export const  rotatingSelector2 = state => state.reducerFunction;