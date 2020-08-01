import {combineReducer} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from 'store/reducers/auth';

export default combineReducer({
    auth,
    form: formReducer
})