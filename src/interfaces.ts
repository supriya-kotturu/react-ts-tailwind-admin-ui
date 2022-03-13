import { ReactNode } from 'react';

export interface User {
	id: string;
	name: string;
	email: string;
	role: string;
	actions: ReactNode;
}

export interface Message {
	type?: 'SUCCESS' | 'FAIL' | '';
	title: string;
	description: string;
}
