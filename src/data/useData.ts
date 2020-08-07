import { useState, useEffect } from "react";
import usersData from './users'

const useData = () => {
  const [users, setUsers] = useState([] as any);

  // effect to get users
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const result = Promise.resolve(usersData);

      result.then(data => {
        setUsers(data);
      })
    }
    fetchUsers();
  }, [])

  return [ users ];
};

export default useData;