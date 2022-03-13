import { FaAngleLeft } from 'react-icons/fa';

interface PreviousButtonProps {
	handlePreviousPage: () => void;
	disabled: boolean;
}

export const PreviousButton = ({
	handlePreviousPage,
	disabled,
}: PreviousButtonProps) => {
	return (
		<>
			<button
				onClick={handlePreviousPage}
				className="button"
				disabled={disabled}
			>
				<FaAngleLeft className="button-icon" />
			</button>
		</>
	);
};
