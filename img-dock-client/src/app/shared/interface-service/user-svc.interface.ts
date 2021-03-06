import { User } from '../models/user';

interface IUserService {
    add(user: User): User;
    delete(id: number): void;
    getById(id: number): User;
    getAll(): User[];
    getByLoginId(loginId: string): User;
}