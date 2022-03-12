import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { UserList } from './UserList';
import { User } from '../interfaces';

export const Dashboard = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getUsers();
	}, []);

	// GET the user data from the API
	const getUsers = useCallback(async () => {
		const url = import.meta.env.VITE_API_ENDPOINT;
		const response = await axios.get(`${url}/adminui-problem/members.json`);
		const data = await response.data;
		setUsers(data);
	}, []);

	return <>{users.length > 0 && <UserList users={users} />}</>;
};
