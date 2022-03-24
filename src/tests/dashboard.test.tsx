import { render, screen } from '@testing-library/react';
import App from '../App';
import { Dashboard } from '../components/Dashboard';
import { UserList } from '../components/UserList';

test('Renders the Initial App Component', () => {
	render(<Dashboard />);
	const nameElement = screen.getByRole(/div/i);
	expect(nameElement).toBeInTheDocument();
});
