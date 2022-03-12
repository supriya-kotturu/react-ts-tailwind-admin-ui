import React, { ReactNode } from 'react';
import { User } from '../interfaces';

interface UserListProps {
	users: User[];
	children?: ReactNode;
}
export const UserList = ({ users }: UserListProps) => {
	console.log('hehee in ', users);
	return (
		<div className="bg-indigo-100 dark:bg-slate-600 p-2 lg:w-3/5 mx-auto md:w-full rounded-lg shadow-lg">
			<table
				className="table-auto items-center w-full border-separate"
				cellSpacing={8}
				cellPadding={4}
			>
				<thead>
					<tr className="bg-indigo-100 dark:bg-slate-600 text-indigo-900 rounded-lg p-4">
						<th className="lg:p-4 md:p-3.5 bg-indigo-200 dark:bg-slate-900 dark:text-indigo-100 shadow-lg rounded-lg text-left">
							Select all
						</th>
						<th className="lg:p-4 md:p-3.5 bg-indigo-200 dark:bg-slate-900 dark:text-indigo-100 shadow-lg rounded-lg text-left">
							ID
						</th>
						<th className="lg:p-4 md:p-3.5 bg-indigo-200 dark:bg-slate-900 dark:text-indigo-100 shadow-lg rounded-lg text-left">
							Name
						</th>
						<th className="lg:p-4 md:p-3.5 bg-indigo-200 dark:bg-slate-900 dark:text-indigo-100  shadow-lg rounded-lg text-left">
							Email
						</th>
						<th className="lg:p-4 md:p-3.5 bg-indigo-200 dark:bg-slate-900 dark:text-indigo-100 shadow-lg rounded-lg text-left">
							Role
						</th>
						<th className="lg:p-4 md:p-3.5 bg-indigo-200 dark:bg-slate-900 dark:text-indigo-100 shadow-lg rounded-lg text-left">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user: User) => {
						return (
							<tr key={user.id}>
								<td className="text-center lg:p-4 md:p-3.5 bg-slate-50 shadow-lg dark:bg-slate-700 dark:text-indigo-100 rounded-lg m-2 py-4 px-2 w-1">
									[]{' '}
								</td>
								<td className="text-center lg:p-4 md:p-3.5 bg-slate-50 shadow-lg  dark:bg-slate-700 dark:text-indigo-100 rounded-lg m-2 py-4 px-2 w-1">
									{user.id}
								</td>
								<td className="text-left lg:p-4 md:p-3.5 bg-slate-50 shadow-lg   dark:bg-slate-700 dark:text-indigo-100 rounded-lg m-2 py-4 px-2 w-4">
									{user.name}
								</td>
								<td className="text-left lg:p-4 md:p-3.5 bg-slate-50 shadow-lg dark:bg-slate-700  dark:text-indigo-100 rounded-lg  m-2 py-4 px-2 w-6">
									{user.email}
								</td>
								<td className="text-left lg:p-4 md:p-3.5 bg-slate-50 shadow-lg dark:bg-slate-700 dark:text-indigo-100 rounded-lg  m-2 py-4 px-2 w-3">
									{user.role}
								</td>
								<td className="text-center lg:p-4 md:p-3.5 bg-slate-50 shadow-lg dark:bg-slate-700 dark:text-indigo-100 rounded-lg  m-2 py-4 px-2 w-3">
									[] []
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
