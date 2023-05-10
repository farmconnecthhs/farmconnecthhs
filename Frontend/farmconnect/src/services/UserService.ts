import { User } from 'firebase/auth';

/**
 * UserService
 * @export
 * @class UserService
 * @description
 * This class is a singleton, which means that only one instance of this class can be created.
 */
export default class UserService {
  private static user: User | null = null;

  /**
   * Creates an instance of UserService.
   */
  constructor() {
    UserService.user = null;
  }

  /**
   * setUser
   * @static
   * @param{User} user
   */
  static setUser(user: User) {
    UserService.user = user;
  }

  /**
   * getUser
   * @static
   * @return {User}
   */
  static getUser() {
    return UserService.user;
  }

  /**
   * getToken
   * @static
   */
  static async getToken() {
    console.log(UserService.user);
    return await UserService.user?.getIdToken();
  }
}
