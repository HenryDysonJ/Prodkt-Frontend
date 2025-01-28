import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserDataProps {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

interface UserDataInterface {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  token: string;
}
export interface UserProps {
  user?: null | UserDataProps;
  setUser: (user: UserDataProps | null) => void;
}

export const useUser = create<UserProps>()(
  persist(
    (set) => ({
      setUser: (user) => {
        set({
          user,
        });
      },
    }),
    {
      name: 'user',
    },
  ),
);

export const giveMeUserIntialState = (): UserDataInterface => ({
  id: 0,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  image: '',
  token: '',
});

export interface UserInterface {
  verify?: null | UserDataInterface;
  setUser: (payload: { key: string; value: string }) => void;
}

const initialState = giveMeUserIntialState();

export const newUser = create<UserInterface>((set) => ({
  verify: initialState,
  setUser: (payload) => set({ [payload.key]: payload.value }),
}));
