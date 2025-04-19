import { request } from '@/utils/request'

const baseUrl = '/api/panel/itemIconGroup'

export function getList<T>() {
  return request.get<T>({
    url: `${baseUrl}/list`,
  })
}

export function edit<T>(data: Panel.ItemIconGroup) {
  return request.post<T>({
    url: `${baseUrl}/edit`,
    data,
  })
}

export function deletes<T>(ids: number[]) {
  return request.post<T>({
    url: `${baseUrl}/delete`,
    data: {
      ids,
    },
  })
}

export function saveSort<T>(data: {
  sortItems: Common.SortItemRequest[]
}) {
  return request.post<T>({
    url: `${baseUrl}/saveSort`,
    data,
  })
}
