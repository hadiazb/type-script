import create, { GetState, SetState } from 'zustand';
import { MyState } from './types';

export default  create((setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
  return {
    users: [],
    userDetail: undefined,
    getUsers: async () => {
      setState({isLoading: true})
      const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
      setState({users, isLoading:false})
    },
    getUserDetail: async (userId: string | number) => {
      setState({isLoading: true})
      const userDetail = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()
      setState({userDetail, isLoading:false})
    },
    isLoading: false
  }
})