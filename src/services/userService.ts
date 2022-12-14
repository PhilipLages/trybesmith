import jwt from 'jsonwebtoken';
import { User } from '../interfaces';
import UserModel from '../models/userModel';
import statusCodes from '../statusCodes';

const userModel = new UserModel();

export default class UserService {
  create = async (user: User) => {
    const id = await userModel.create(user);

    const data = { id };
    const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';
    const config = { expiresIn: '1d' };

    const token = jwt.sign(data, JWT_SECRET, config);

    return { status: statusCodes.CREATED, data: { token } };
  };
}