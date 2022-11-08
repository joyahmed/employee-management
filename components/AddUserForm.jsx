import { useReducer } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Bug from './Bug';
import Form from './Form';
import Success from './Success';
import { addUser, getUsers } from "@/lib/fetcher"


const AddUserForm = ({action, formReducer}) => {
	const queryClient = useQueryClient();
	const [ formData, setFormData ] = useReducer(formReducer, {});


	const addMutation = useMutation(addUser, {
		onSuccess: () => {
			queryClient.prefetchQuery('users', getUsers);
		}
	});

	const handleSubmit = e => {
		e.preventDefault();
		if (Object.keys(formData).length == 0)
			return console.log("Don't have Form Data");
		let { firstname, lastname, email, salary, date, status } =
			formData;

		const user = {
			name: `${firstname} ${lastname}`,
			avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
				Math.random() * 10
			)}.jpg`,
			email,
			salary,
			date,
			status: status ?? 'Active'
		};

		addMutation.mutate(user);
	};

	if (addMutation.isLoading) return <div>Loading!</div>;
	if (addMutation.isError)
		return <Bug message={addMutation.error.message}></Bug>;
	if (addMutation.isSuccess)
		return <Success message={'Added Successfully'}></Success>;

	return <Form {...{ handleSubmit, setFormData, action}} />;
};

export default AddUserForm;
