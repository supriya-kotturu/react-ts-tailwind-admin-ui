import React, { useState } from 'react';
import { User } from '../interfaces';

interface EditUserFormProps {
	handleUpdateUser: (id: string, user: User) => void;
	handleCancleUpdate: () => void;
	currentUser: User;
}

export const EditUserForm = ({
	currentUser,
	handleCancleUpdate,
	handleUpdateUser,
}: EditUserFormProps) => {
	const [name, setName] = useState<string>(currentUser.name);
	const [email, setEmail] = useState<string>(currentUser.email);
	const [role, setRole] = useState<string>(currentUser.role);

	const handleSubmit = () => {
		const newUser: User = {
			...currentUser,
			name,
			email,
			role,
		};
		handleUpdateUser(currentUser.id, newUser);
	};

	return (
		<form className="w-full flex-row  flex justify-center mx-auto p-4">
			<label className="form-label">
				<input
					className="form-input"
					placeholder="User Name"
					type="text"
					name="userName"
					id="userName"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<label className="form-label">
				<input
					className="form-input"
					placeholder="Email"
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label className="form-label">
				<input
					className="form-input"
					placeholder="Role"
					type="text"
					name="role"
					id="role"
					value={role}
					onChange={(e) => setRole(e.target.value)}
				/>
			</label>
			<button className="submit-button" onClick={handleSubmit}>
				Submit
			</button>
			<button className="cancel-button">Cancel</button>
		</form>
	);
};
