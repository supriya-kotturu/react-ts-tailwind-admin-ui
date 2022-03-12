import { Message } from '../../interfaces';

export type messageActionType =
	| 'SET_ERROR_MESSAGE'
	| 'SET_SUCCESS_MESSAGE'
	| 'RESET_MESSAGE';

export type SetErrorMessageAction = {
	type: 'SET_ERROR_MESSAGE';
	payload: Message;
};

export type SetSuccessMessageAction = {
	type: 'SET_SUCCESS_MESSAGE';
	payload: Message;
};

export type ResetMessageAction = {
	type: 'RESET_MESSAGE';
};

export type MessageActions =
	| SetErrorMessageAction
	| SetSuccessMessageAction
	| ResetMessageAction;
