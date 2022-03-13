import { FaAngleRight } from 'react-icons/fa';

interface NextButtonProps {
	handleNextPage: () => void;
	disabled: boolean;
}

export const NextButton = ({ handleNextPage, disabled }: NextButtonProps) => {
	return (
		<>
			<button onClick={handleNextPage} className="button" disabled={disabled}>
				<FaAngleRight className="button-icon" />
			</button>
		</>
	);
};
