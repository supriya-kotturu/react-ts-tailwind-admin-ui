import React from 'react';

interface PageButtonProps {
	handlePageButton: () => {};
	disabled: boolean;
	page: number;
}

export const PageButton = ({
	handlePageButton,
	disabled,
	page,
}: PageButtonProps) => {
	return (
		<>
			<button onClick={handlePageButton} className="button" disabled={disabled}>
				<span className="button-icon">{page}</span>
			</button>
		</>
	);
};
