import { UserActions } from './userActionsTypes';
import { User } from '../../interfaces';

type initialUserStateType = {
	userList: User[];
	selectedUser: User;
};

const defaultUser: User = {
	id: '0',
	name: '',
	email: '',
	role: '',
};

function getIsNewUSerStatus() {
	return localStorage.getItem('isNewUser') === null
		? true
		: JSON.parse(localStorage.getItem('isNewUser') || '{}');
}

function getUser(id: string): User {
	const currentUserList = getUserList();
	const selectedUser = currentUserList.filter(
		(user: User) => user.id === id
	)[0];
	return selectedUser;
}

function getUserList(): User[] {
	return localStorage.getItem('userList') === null
		? []
		: JSON.parse(localStorage.getItem('userList') || '{}');
}

function setUserList(newUserList: User[]) {
	localStorage.setItem('userList', JSON.stringify(newUserList));
}

function editUser(id: string, newUser: User): User[] {
	const currentUserList = getUserList();
	const newUserList = currentUserList.filter((user: User) => user.id !== id);
	const updatedList = [...newUserList, newUser];
	setUserList(updatedList);
	return updatedList;
}

function deleteUser(id: string): User[] {
	const currentUserList = getUserList();
	const updatedList = currentUserList.filter((user: User) => user.id !== id);
	setUserList(updatedList);
	return updatedList;
}

function deleteSelectedUsers(idList: string[]): User[] {
	const currentUserList = getUserList();
	const updatedList = currentUserList.filter(
		(user: User) => !idList.includes(user.id)
	);
	setUserList(updatedList);
	return updatedList;
}

export function userReducer(state: initialUserStateType, action: UserActions) {
	switch (action.type) {
		case 'GET_USER':
			return {
				...state,
				selectedUser: getUser(action.payload.id),
			};
		case 'GET_USERS':
			return {
				...state,
				userList: getUserList(),
			};
		case 'EDIT_USER':
			return {
				...state,
				userList: editUser(action.payload.id, action.payload.newUser),
			};
		case 'DELETE_USER':
			return { ...state, userList: deleteUser(action.payload.id) };
		case 'DELETE_SELECTED_USERS':
			return { ...state, userList: deleteSelectedUsers(action.payload.idList) };
		default:
			return state;
	}
}
