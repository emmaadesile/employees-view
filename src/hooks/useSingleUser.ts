import { useState, useEffect } from "react";
import userData from "../data/users";
import User from "../pages/users/interface";

/**
 * Custom hook to show the details of a user
 *
 * @export
 * @param {number} userId
 * @returns {Object} Object with user details
 */
const useSingleUser = (userId: number) => {
  const [user, setUser] = useState({} as User);

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
    return users.filter((user) => user.id === id)[0];
  };

  return user;
};

export default useSingleUser;
