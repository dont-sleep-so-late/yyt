//本地存储操作用户信息的方法
export const SET_TOKEN = (userInfo: string) => {
  return localStorage.setItem("USERINFO", userInfo);
};
export const GET_TOKEN = () => {
  return localStorage.getItem("USERINFO");
};
export const REMOVE_TOKEN = () => {
  localStorage.removeItem("USERINFO");
};
