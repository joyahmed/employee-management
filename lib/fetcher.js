import { BASE_URL } from '@/lib';
// all user
export const getUsers = async () => {
	const response = await fetch(`${BASE_URL}/api/users`);
	const json = await response.json();

	return json;
};

// single user
export const getUser = async id => {
	const response = await fetch(`${BASE_URL}/api/users/${id}`);
	const json = await response.json();

	if (json) return json;
	return {};
};

// posting a new user
export async function addUser(formData) {
	try {
		const Options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData)
		};

		const response = await fetch(`${BASE_URL}/api/users`, Options);
		const json = await response.json();

		return json;
	} catch (error) {
		return error;
	}
}

// Update a new user
export async function updateUser(id, formData) {
	const Options = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(formData)
	};

	const response = await fetch(
		`${BASE_URL}/api/users/${id}`,
		Options
	);
	const json = await response.json();
	return json;
}

// Delete a new user
export async function deleteUser(id) {
	const Options = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	};

	const response = await fetch(
		`${BASE_URL}/api/users/${id}`,
		Options
	);
	const json = await response.json();
	return json;
}
