import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

interface ActionProps {
	id: string;
	handleEdit: (id: string) => void;
	handleDelete: (id: string) => void;
}

export const Actions = ({ id, handleDelete, handleEdit }: ActionProps) => {
	return (
		<div
			key={id}
			className="flex justify-around  justify-items-center items-center"
		>
			<button>
				<FiEdit
					className="text-indigo-400 text-lg "
					onClick={() => {
						console.log(id);
						handleEdit(id);
					}}
				/>
			</button>
			<button>
				<FiTrash
					className="text-red-300 text-lg font-bold"
					onClick={() => {
						console.log(id);
						handleDelete(id);
					}}
				/>
			</button>
		</div>
	);
};
