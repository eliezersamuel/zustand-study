import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

interface IUserStore {
    users: IUser[];
    removeUser: (id: string) => void;
}

const usersFetched = await fetch('http://localhost:3000/users', {
    method: 'GET',
}).then( response => response.json()).then(data => data);

export const userStore = create<IUserStore>()(
    devtools(
        immer(
            (set) => ({
                users: usersFetched,
                removeUser: (id) => set(
                    (state) => { state.users = state.users.filter((item: IUser) => item.id !== id) }
                ),
            })
        )
))