import { UserServices } from '../../services/user-services';

const fakeUsers = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];
describe('login', () => {
  const { login } = UserServices();
  it('should store username and password in localStorage if user exists', () => {
    const setItemSpy = jest.spyOn(localStorage, 'setItem');

    login(fakeUsers[0].username, fakeUsers[0].password);

    expect(setItemSpy).toHaveBeenCalledWith('username', 'user1');
    expect(setItemSpy).toHaveBeenCalledWith('password', 'password1');
  });

  it('should not store username and password in localStorage if user does not exist', () => {
    const setItemSpy = jest.spyOn(localStorage, 'setItem');

    login('user3', 'password3');

    expect(setItemSpy).not.toHaveBeenCalled();
  });
});
