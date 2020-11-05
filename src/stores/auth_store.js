import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';

let user;

class AuthStore extends EventEmitter {
	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}

	getUser() {
		return user;
	}
}

const authData = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.AUTH_LOGIN:
			user = action.payload;
			authData.emitChange();
			break;
		case actionTypes.ERROR_AUTH:
		case actionTypes.AUTH_SIGNOUT:
		case actionTypes.AUTH_SIGNOUT_ERROR:
			user = null;
			authData.emitChange();
			break;
		default:
			break;
	}
});

export default authData;
