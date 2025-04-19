export function createLocalStorage() {
  function set<T = any>(key: string, data: T) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  function get(key: string) {
    const json = window.localStorage.getItem(key)
    return json ? JSON.parse(json) : null
  }

  return { set, get }
}
