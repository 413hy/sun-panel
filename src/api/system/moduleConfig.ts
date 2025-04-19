// 模拟 API 响应
export async function getValueByName<T>(name: string): Promise<{ code: number, data: T | null, msg: string }> {
  // 从本地存储获取数据
  const localData = localStorage.getItem(name)
  return {
    code: 0,
    data: localData ? JSON.parse(localData) : null,
    msg: 'success'
  }
}

export async function save(name: string, value: any): Promise<{ code: number, msg: string }> {
  // 保存到本地存储
  localStorage.setItem(name, JSON.stringify(value))
  return {
    code: 0,
    msg: 'success'
  }
}