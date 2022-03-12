export interface User {
	id: string;
	name: string;
	email: string;
	role: string;
}

export interface Message {
	type?: 'SUCCESS' | 'FAIL' | '';
	title: string;
	description: string;
}
