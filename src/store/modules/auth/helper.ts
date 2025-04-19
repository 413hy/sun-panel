import type { AuthState } from './index'
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'AUTH_TOKEN'

export function setStorage(state: AuthState) {
  return ss.set(LOCAL_NAME, state)
}

// 默认登录状态
export function getStorage() {
  return {
    token: 'default-token',
    user: {
      username: 'visitor',
      role: 1,
      name: 'Visitor',
    },
    visitMode: 1
  }
}

export function removeToken() {
  return ss.remove(LOCAL_NAME)
}
