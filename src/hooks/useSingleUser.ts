import { useState, useEffect } from "react";
import userData from "../data/users";
import User from "../pages/users/interface";

const useSingleUser = (userId: number): User => {
  const [user, setUser] = useState([] as any);

  // effect to get one user
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const result = await Promise.resolve(userData);
      const parsedId = Number(userId);
      const singleUserData = getUser(result, parsedId);
      setUser(singleUserData);
    };
    fetchUser();
  }, [userId]);

  const getUser = (users: Array<User>, id: number) => {
    return users.filter((user) => user.id === id);
  };

  return user;
};

export default useSingleUser;
