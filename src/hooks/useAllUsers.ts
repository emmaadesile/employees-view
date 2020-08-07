import { useState, useEffect } from "react";
import userData from '../data/users'

const useAllUsers = () => {
  const [users, setUsers] = useState([] as any);

  // effect to get users
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const result = await Promise.resolve(userData);
      setUsers(result);
    }
    fetchUsers();
  }, [])

  return [ users ];
};

export default useAllUsers;