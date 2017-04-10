import assign from 'object-assign';
import {Dispatcher} from 'flux';

import AppActions from '../actions/AppActions';


var AppDispatcher = assign(new Dispatcher(), AppActions);

export default AppDispatcher;
