import React from 'react';
interface SearchBarProps {
	filter: '';
	setFilter: (value: string) => void;
}

export const SearchBar = ({ filter, setFilter }: SearchBarProps) => {
	return (
		<div>
			<label className="relative block m-1.5">
				<input
					className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-200 focus:ring-indigo-200 focus:ring-1 sm:text-sm"
					placeholder="Search for anything..."
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
