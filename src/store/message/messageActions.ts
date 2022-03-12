import {
	SetErrorMessageAction,
	SetSuccessMessageAction,
	ResetMessageAction,
} from './messageActionTypes';
import { Message } from '../../interfaces';

export function setErrorMessage(message: Message): SetErrorMessageAction {
	return {
		type: 'SET_ERROR_MESSAGE',
		payload: {
			...message,
			type: 'FAIL',
		},
	};
}

export function setSuccessMessage(message: Message): SetSuccessMessageAction {
	return {
		type: 'SET_SUCCESS_MESSAGE',
		payload: {
			...message,
			type: 'SUCCESS',
		},
	};
}

export function resetMessage(): ResetMessageAction {
	return {
		type: 'RESET_MESSAGE',
	};
}
