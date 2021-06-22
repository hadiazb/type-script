import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useMyStore from '../../zustand/index';

const [useStore] = useMyStore;

const UserDetail = () => {
  const { userId }: any = useParams()

  const userDetail = useStore(state => state.userDetail)
  const getUserDetail = useStore(state => state.getUserDetail)
  // const isLoading = useStore(state => state.isLoading)

  useEffect(() => {
    (async function () {
      await getUserDetail(userId)
    })()
  },[])

  console.log(userDetail)

  return (
    <div>
      <h2>{userDetail?.name}</h2>
    </div>
  )
}

export default UserDetail