import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar';

// import { setUsers } from '../store';
// import { UserListContext } from '../RootProvider';
import { UserList } from './UserList';
import { User } from '../interfaces';

export const Dashboard = () => {
	const [users, setUsers] = useState<User[]>([]);
	// const { usersData, userListDispatch } = useContext(UserListContext);
	// const users = usersData.userList;

	useEffect(() => {
		getUsers();
	}, []);

	const setUserListInLocalStorage = useCallback((list: User[]): void => {
		localStorage.setItem('userList', JSON.stringify(list));
	}, []);

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
		<div className="table-container">
			{users.length > 0 && <UserList users={users} />}
		</div>
	);
};
