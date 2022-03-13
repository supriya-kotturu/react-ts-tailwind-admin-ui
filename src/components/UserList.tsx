import React, { ReactNode, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { User } from '../interfaces';
import { SearchBar } from './SearchBar';
import { NextButton } from './UI/NextButton';
import { PageButton } from './UI/PageButton';
import { PreviousButton } from './UI/PreviousButton';
import { Actions } from './UI/Actions';

interface UserListProps {
	users: User[];
	hideSearch: boolean;
	handleDelete: (id: string) => void;
	handleEdit: (id: string) => void;
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
	{
		Header: 'Actions',
		accessor: 'actions',
	},
];

export const UserList = ({
	users,
	hideSearch,
	handleDelete,
	handleEdit,
}: UserListProps) => {
	const userTableColumns = useMemo(() => USER_LIST_COLUMNS, []);

	const userData = useMemo(
		() =>
			users.map((user) => ({
				...user,
				actions: (
					<Actions
						id={user.id}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				),
			})),
		[users]
	);

	const tableInstance = useTable(
		{
			columns: userTableColumns,
			data: userData,
		},
		useGlobalFilter,
		usePagination
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		prepareRow,
		pageOptions,
		gotoPage,
		pageCount,
		state,
		setGlobalFilter,
	} = tableInstance;

	const { globalFilter } = state;
	const pageNumbers = [...Array(pageCount).keys()];

	return (
		<>
			{!hideSearch && (
				<SearchBar filter={globalFilter} setFilter={setGlobalFilter} />
			)}
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
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
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
					</tbody>
				</table>
				<div className="content-center">
					<PreviousButton
						handlePreviousPage={() => previousPage()}
						disabled={!canPreviousPage}
					/>
					{pageNumbers.map((page) => (
						<PageButton
							handlePageButton={() => gotoPage(page)}
							disabled={!canNextPage}
							page={page + 1}
						/>
					))}
					<NextButton
						handleNextPage={() => nextPage()}
						disabled={!canNextPage}
					/>
				</div>
			</div>
		</>
	);
};
