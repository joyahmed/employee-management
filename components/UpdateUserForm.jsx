import { getUser, getUsers, updateUser } from '@/lib/fetcher';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Form from './Form';

const UpdateUserForm = ({
	action,
	formId,
	formData,
	setFormData
}) => {
	const queryClient = useQueryClient();

	const {
		isLoading,
		isError,
		data: user,
		error
	} = useQuery(['users', formId], () => getUser(formId));

	const UpdateMutation = useMutation(
		newData => updateUser(formId, newData),
		{
			onSuccess: async data => {
				queryClient.prefetchQuery('users', getUsers);
			}
		}
	);

	if (isLoading) return <div>Loading...!</div>;
	if (isError) return <div>Error</div>;

	const { name, avatar, salary, date, email, status } = user;
	const [firstname, lastname] = name ? name.split(' ') : formData;

	const handleSubmit = async e => {
		e.preventDefault();
		let userName = `${formData.firstname ?? firstname} ${
			formData.lastname ?? lastname
		}`;
		let updated = Object.assign({}, user, formData, {
			name: userName
		});
		await UpdateMutation.mutate(updated);
	};

	return (
		<>
			<Form
				{...{
					firstname,
					lastname,
					name,
					avatar,
					salary,
					date,
					email,
					status,
					handleSubmit,
					formData,
					setFormData,
					action
				}}
			/>
		</>
	);
};

export default UpdateUserForm;
