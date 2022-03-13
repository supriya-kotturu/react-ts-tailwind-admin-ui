import React from 'react';
interface SearchBarProps {
	filter: '';
	setFilter: (value: string) => void;
}

export const SearchBar = ({ filter, setFilter }: SearchBarProps) => {
	return (
		<div>
			<label className="form-label">
				<input
					className="form-input"
					placeholder="Search by name, email, roles, etc.."
					type="text"
					name="search"
					value={filter || ''}
					onChange={(e) => {
						setFilter(e.target.value);
					}}
				/>
			</label>
		</div>
	);
};
