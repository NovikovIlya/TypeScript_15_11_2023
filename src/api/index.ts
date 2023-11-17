import axios, { AxiosRequestConfig } from 'axios';

type UserProps = {
  name: string;
  email: string;
  id: string;
};

type ShortUserProps = Omit<UserProps,'name'>

export const getUserData = async (config: AxiosRequestConfig) => {
  try {
    const res = await axios.get<UserProps[]>('/users', config);
    res.data.map((item) => console.log(item));
  } catch (error) {
    console.log(error);
  }
};
