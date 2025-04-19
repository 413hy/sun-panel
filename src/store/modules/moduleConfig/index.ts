import { defineStore } from 'pinia'
import type { ModuleConfigState } from './helper'
import { getLocalState, setLocalState } from './helper'

export const useModuleConfig = defineStore('module-config-store', {
  state: (): ModuleConfigState => getLocalState(),
  actions: {
    // 保存配置
    save(name: string, value: any) {
      const moduleName = `module-${name}`
      this.$state[moduleName] = value
      this.recordState()
    },

    // 获取值
    getValueByName<T>(name: string): T | null {
      const moduleName = `module-${name}`
      if (this.$state[moduleName])
        return this.$state[moduleName]
      return null
    },

    recordState() {
      setLocalState(this.$state)
    },
  },
})
