import { User } from '../../interfaces';

export type UserActionType =
	| 'GET_USER'
	| 'GET_USERS'
	| 'SET_USERS'
	| 'EDIT_USER'
	| 'DELETE_USER'
	| 'DELETE_SELECTED_USERS';

export type GetUserAction = {
	type: 'GET_USER';
	payload: {
		id: string;
	};
};

export type GetUsersAction = {
	type: 'GET_USERS';
};

export type SetUserListAction = {
	type: 'SET_USERS';
	payload: User[];
};

export type EditUserAction = {
	type: 'EDIT_USER';
	payload: {
		id: string;
		newUser: User;
	};
};

export type DeleteUserAction = {
	type: 'DELETE_USER';
	payload: {
		id: string;
	};
};

export type DeleteSelectedUsersAction = {
	type: 'DELETE_SELECTED_USERS';
	payload: {
		idList: string[];
	};
};

export type UserActions =
	| GetUserAction
	| GetUsersAction
	| SetUserListAction
	| EditUserAction
	| DeleteUserAction
	| DeleteSelectedUsersAction;
