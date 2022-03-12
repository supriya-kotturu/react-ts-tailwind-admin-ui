import { MessageActions } from './messageActionTypes';
import { Message } from '../../interfaces';

const initialMessageState: Message = {
	type: '',
	title: '',
	description: '',
};

export function messageReducer(state: Message, action: MessageActions) {
	switch (action.type) {
		case 'SET_ERROR_MESSAGE':
			return action.payload;

		case 'SET_SUCCESS_MESSAGE':
			return action.payload;

		case 'RESET_MESSAGE':
			return initialMessageState;
		default:
			state;
	}
}
