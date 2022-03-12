import {
	GetUserAction,
	GetUsersAction,
	EditUserAction,
	DeleteUserAction,
	DeleteSelectedUsersAction,
} from './userActionsTypes';
import { User } from '../../interfaces';

export function getUser(id: string): GetUserAction {
	return {
		type: 'GET_USER',
		payload: {
			id: id,
		},
	};
}

export function getUsers(): GetUsersAction {
	return {
		type: 'GET_USERS',
	};
}

export function editUser(id: 'string', newUser: User): EditUserAction {
	return {
		type: 'EDIT_USER',
		payload: {
			id,
			newUser,
		},
	};
}

export function deleteUser(id: string): DeleteUserAction {
	return {
		type: 'DELETE_USER',
		payload: {
			id: id,
		},
	};
}

export function deleteSelectedUsers(
	idList: string[]
): DeleteSelectedUsersAction {
	return {
		type: 'DELETE_SELECTED_USERS',
		payload: {
			idList: idList,
		},
	};
}
