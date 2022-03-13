// @ts-nocheck
import React, { Dispatch, useReducer, createContext, ReactNode } from 'react';
import { Message, User } from './interfaces';

import {
	userReducer,
	messageReducer,
	initialMessageState,
	initialUserListState,
	getUsers,
} from './store/index';
import { MessageActions } from './store/message/messageActionTypes';
import { UserActions } from './store/users/userActionsTypes';

interface MessageContextInterface {
	message: Message;
	messageDispatch: Dispatch<MessageActions>;
}

interface UserListContextInterface {
	userData: {
		userList: User[];
		selectedUser: User;
	};
	userDispatch: Dispatch<UserActions>;
}

export const UserListContext = createContext<UserListContextInterface>({
	userData: initialUserListState,
	userListDispatch: () => {},
});

export const MessageContext = createContext<MessageContextInterface>({
	message: initialMessageState,
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
