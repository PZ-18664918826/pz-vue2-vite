import { defineStore } from 'pinia';
import { clearAuthStorage, getToken, getUserInfo } from '@/utils';
import type { UserInfo } from '@/interface';

interface AuthState {
  /** 用户token */
  token: string;
  /** 用户信息 */
  userInfo: UserInfo;
  /** pinia名字 */
  piniaName: string;
}

export const useAuthStore = defineStore('auth-store', {
  /** 状态 */
  state: (): AuthState => {
    return {
      token: getToken(),
      userInfo: getUserInfo(),
      piniaName: '我是Pinia,vue2使用pinia也很丝滑'
    };
  },
  getters: {
    /** 是否登录 */
    isLogin: state => Boolean(state.token)
  },
  actions: {
    /** 设置Auth状态 */
    setAuthState(data: Partial<AuthState>) {
      Object.assign(this, data);
    },
    /** 重置auth状态 */
    resetAuthState() {
      clearAuthStorage();
      this.$reset();
    },
    /** 判断用户权益是否变更 */
    getIsAuthChange() {
      const token = getToken();
      const tokenChange = token !== this.token;
      return tokenChange;
    }
  }
});
