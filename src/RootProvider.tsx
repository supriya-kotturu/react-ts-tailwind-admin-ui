import React, { useReducer, createContext, ReactNode } from 'react';

import {
	userReducer,
	messageReducer,
	initialMessageState,
	initialUserListState,
	getUsers,
} from './store/index';
import { MessageActions } from './store/message/messageActionTypes';

export const UserListContext = createContext({
	userData: {},
	userListDispatch: () => {},
});

export const MessageContext = createContext({
	message: {},
	messageDispatch: () => {},
});

interface RootProviderProps {
	children: ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => {
	const [userList, userListDispatch] = useReducer(
		userReducer,
		initialUserListState
	);
	const [message, messageDispatch] = useReducer(
		messageReducer,
		initialMessageState
	);

	return (
		<MessageContext.Provider
			value={{ message: message, messageDispatch: messageDispatch }}
		>
			<UserListContext.Provider
				value={{
					usersData: userList,
					userListDispatch: userListDispatch,
				}}
			>
				{children}
			</UserListContext.Provider>
		</MessageContext.Provider>
	);
};
