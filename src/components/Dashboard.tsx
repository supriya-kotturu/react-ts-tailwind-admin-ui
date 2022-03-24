import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

// import { setUsers } from '../store';
// import { UserListContext } from '../RootProvider';
import { UserList } from './UserList';
import { User } from '../interfaces';
import { EditUserForm } from './EditUserForm';

export const Dashboard = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [hideSearch, setHideSearch] = useState<boolean>(false);
	const [editingUser, setEditingUser] = useState<User>({
		id: '',
		name: '',
		email: '',
		role: '',
		actions: '',
	});

	useEffect(() => {
		getUsers();
	}, []);

	const setUserListInLocalStorage = useCallback((list: User[]): void => {
		localStorage.setItem('userList', JSON.stringify(list));
	}, []);

	const handleEdit = (id: string) => {
		setIsEditing(true);
		setHideSearch(true);
		const targetUser = users.find((user) => user.id === id);
		if (targetUser) setEditingUser(targetUser);
	};

	const handleCancelUpdate = () => {
		setHideSearch(false);
		setIsEditing(false);
	};

	const handleUpdateUser = (id: string, newUser: User) => {
		const currentUserList = getUserList;
		const newUserList = currentUserList.filter((user: User) => user.id !== id);
		const updatedList = [...newUserList, newUser];
		const sortedList = updatedList.sort(
			(a, b) => parseInt(a.id) - parseInt(b.id),
		);
		setUserListInLocalStorage(sortedList);
	};

	const handleDelete = (id: string) => {
		const currentUserList = getUserList;
		const updatedList = currentUserList.filter((user: User) => user.id !== id);
		setUsers(updatedList);
		setUserListInLocalStorage(updatedList);
	};

	const getUserList = useMemo(() => {
		const userList = JSON.parse(localStorage.getItem('userList') || 'null');
		return userList;
	}, [users]);

	const getUsers = useCallback(async () => {
		const url = import.meta.env.VITE_API_ENDPOINT;
		const response = await axios.get(`${url}/adminui-problem/members.json`);
		const data = await response.data;

		/*
		 *	In the first run, Get the data from the API
		 * 	and set users value in local storage.
		 *
		 *	In the second refresh, though you get a 200 status,
		 *	set users value from local storage.
		 */

		if (response.status === 200 && !localStorage.getItem('userList')) {
			// userListDispatch(setUsers(data));
			setUserListInLocalStorage(data);
			setUsers(data);
		}
		setUsers(getUserList);
	}, []);

	return (
		<div className='table-container'>
			{isEditing && (
				<EditUserForm
					currentUser={editingUser}
					handleCancleUpdate={handleCancelUpdate}
					handleUpdateUser={handleUpdateUser}
				/>
			)}
			{users.length > 0 && (
				<UserList
					users={users}
					hideSearch={hideSearch}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					setUsers={setUsers}
					setUserListInLocalStorage={setUserListInLocalStorage}
				/>
			)}
		</div>
	);
};
