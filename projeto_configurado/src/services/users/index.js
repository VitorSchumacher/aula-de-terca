import api from "..";

export const getUsers = async () => {
  return await api.get("users");
};

export const getOneUser = async (id) => {
  return await api.get(`/users/${id}`);
};
