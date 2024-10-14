export const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };
  
  export const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const findUser = (email) => {
    const users = getUsers();
    return users.find(user => user.email === email);
  };
  