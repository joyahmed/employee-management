import connectMongo from '@/database/connectDb';
import { getUsers, postUser, deleteUser } from '@/database/fetchData';

connectMongo();

const handler = async (req, res) => {
	connectMongo().catch(() =>
		res.status(405).json({ error: 'Error in connection!' })
	);

	switch (req.method) {
		case 'GET':
			getUsers(req, res);
			break;
		case 'POST':
			postUser(req, res);
			break;
		case 'DELETE':
			deleteUser(req, res);
			break;
	}
};

export default handler;
