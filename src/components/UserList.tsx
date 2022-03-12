import React, { ReactNode, useMemo } from 'react';
import { useTable } from 'react-table';
import { User } from '../interfaces';

interface UserListProps {
	users: User[];
	children?: ReactNode;
}

interface UserTableColumns {
	Header: string;
	accessor: keyof User;
}

const USER_LIST_COLUMNS: UserTableColumns[] = [
	{
		Header: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Email',
		accessor: 'email',
	},
	{
		Header: 'Role',
		accessor: 'role',
	},
	// TODO : Remove the action
	// {
	// 	Header: 'Actions',
	// 	accessor: 'id',
	// },
];

export const UserList = ({ users }: UserListProps) => {
	const userTableColumns = useMemo(() => USER_LIST_COLUMNS, []);
	const userData = useMemo(() => users, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns: userTableColumns,
			data: userData,
		});

	return (
		<div>
			<table
				className="user-table"
				cellSpacing={8}
				cellPadding={4}
				{...getTableProps()}
			>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr className="header-row" {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}

					{/* TODO : Remove comments  */}
					{/* {users.map((user: User) => {
						return (
							<tr key={user.id}>
								<td className="text-center  w-1">
									<input
										type="checkbox"
										className="form-check-input h-5 w-5 border border-r-10 border-indigo-900 rounded-lg bg-white checked:bg-indigo-100 checked:border-indigo-200 focus:outline-none transition duration-200 bg-center cursor-pointer"
									/>
								</td>
								<td className="text-center  w-1">{user.id}</td>
								<td className="text-left  w-4">{user.name}</td>
								<td className="text-left  w-6">{user.email}</td>
								<td className="text-left  w-3">{user.role}</td>
								<td className="text-center  w-3">[] []</td>
							</tr>
						);
					})} */}
				</tbody>
			</table>
		</div>
	);
};
