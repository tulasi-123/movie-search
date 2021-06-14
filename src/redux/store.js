import rootReducer from './rootReducer';
import { createStore } from 'redux';

export default createStore(rootReducer, {});

// export default function configStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//     );
// }
