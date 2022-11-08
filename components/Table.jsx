import { getUsers } from '@/lib/fetcher';
import {
	deleteAction,
	toggleChangeAction,
	updateAction
} from '@/redux/reducer';
import Image from 'next/image';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
const Table = () => {
	const state = useSelector(state => state.app.client.toggleForm);

	const {
		data: users,
		error,
		isLoading,
		isError
	} = useQuery('users', getUsers);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Eror {error}</div>;

	return (
		<table className='table-auto text-gray-200 overflow-auto text-sm'>
			<thead className='h-16'>
				<tr className='bg-gray-900'>
					<th className='px-16 py-2'>
						<span className='text-gray-200'>Name</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-200'>Email</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-200'>Salary</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-200'>Birthday</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-200'>Status</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-200'>Actions</span>
					</th>
				</tr>
			</thead>
			<tbody className='bg-gray-800'>
				{users.map((obj, i) => (
					<Row {...obj} key={i} />
				))}
			</tbody>
		</table>
	);
};

export default Table;

const Row = ({ _id, name, avatar, email, salary, date, status }) => {
	const visible = useSelector(state => state.app.client.toggleForm);
	const dispatch = useDispatch();

	const onUpdate = () => {
		dispatch(toggleChangeAction(_id));
		if (visible) {
			dispatch(updateAction(_id));
		}
	};

	const onDelete = () => {
		if (!visible) {
			dispatch(deleteAction(_id));
		}
	};

	return (
		<tr className='items-center justify-center text-center whitespace-nowrap w-screen h-full'>
			<td className='px-8 py-5 flex flex-row items-center'>
				{avatar ? (
					<Image
						src={avatar}
						alt={name}
						width={50}
						height={50}
						className='rounded-md'
					/>
				) : null}
				<span className='ml-3 text-center font-semibold'>
					{name || 'Unknown'}
				</span>
			</td>
			<td className=''>
				<span>{email || 'Unknown'}</span>
			</td>
			<td className=''>
				<span>{salary || 'Unknown'}</span>
			</td>
			<td className=''>
				<span>{date || 'Unknown'}</span>
			</td>
			<td className=''>
				<button className='cursor'>
					<span
						className={`text-white px-5 py-1 rounded-full ${
							status === 'Active' ? 'bg-green-500' : 'bg-red-500'
						}`}
					>
						{status || 'Unknown'}
					</span>
				</button>
			</td>
			<td className='px-16'>
				<span className='flex items-center justify-around gap-5'>
					<button
						className='cursor h-full flex items-center justify-center'
						onClick={onUpdate}
					>
						<BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
					</button>

					<button className='cursor' onClick={onDelete}>
						<BiTrashAlt
							size={25}
							color={'rgb(244,63,94)'}
						></BiTrashAlt>
					</button>
				</span>
			</td>
		</tr>
	);
};
