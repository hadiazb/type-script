import React, { useEffect } from 'react';
import useMyStore from '../../zustand';
import UserItem from '../../components/UserItem/index';

const [useStore] = useMyStore;

const Home: React.FC<{}> = () => {
  const users = useStore(state => state.users)
  const getUsers = useStore(state => state.getUsers)
  const isLoading = useStore(state => state.isLoading)

  useEffect(() => {
    (async function () {
      await getUsers()
    })()
  }, [])

  const rederUsers = (): undefined | JSX.Element[] => {
    if (users && users.length) {
      return users.map((user, index) => (
        <UserItem key={index} {...user}/>
      ))
    }
  }

  return (
    <div>
      {isLoading ? 'Cargando' : (
        <ul>
        {rederUsers()}
        </ul>
      )}

    </div>
  )
}

export default Home;