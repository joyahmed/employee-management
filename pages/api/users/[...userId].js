import connectMongo from '@/database/connectDb';
import {
	deleteUser,
	getUser,
	updateUser
} from '@/database/fetchData';

connectMongo();

const handler = async (req, res) => {
	connectMongo().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	switch (req.method) {
		case 'GET':
			getUser(req, res);
			break;
		case 'PUT':
			updateUser(req, res);
			break;
		case 'DELETE':
			deleteUser(req, res);
			break;
	}
};

export default handler;
