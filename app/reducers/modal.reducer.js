import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import actions from '../constants/actions';

const initState = { modalType: null, visible: false, data: null, command: null, sshInitData: null };


const inititalState = Immutable.from(initState);

export default handleActions({
  [actions.OPEN_MODAL](state, { type, payload, meta, error }) {
    return state.merge(payload);
  },
  [actions.CLOSE_MODAL](state, { type, payload, meta, error }) {
    return state.merge(payload);
  }
}, inititalState);

// export default (state = inititalState, action) => {
//   console.log(action.type);
//   return state;
// }

