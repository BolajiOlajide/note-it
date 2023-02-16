/**
 * getItem fetches item from storage (either chrome local storage or the browser's local storage).
 * We default to chrome storage if it exists, otherwise we use the browser's local storage.
 *
 * @param key The identifier used to store the item to be retrieved from storage
 * @returns Promise<T | null> The resource queried if it exists in storage, otherwise null
 */
 export const getItem = async <T>(key: string): Promise<T | null> => {
  if (chrome.storage) {
    const data = await chrome.storage.local.get(key)
    if (data && data[key]) {
      return Promise.resolve(data[key] as T)
    }

    return null
  }

  const data = localStorage.getItem(key)
  if (data) {
    return Promise.resolve(JSON.parse(data) as T)
  }

  return Promise.resolve(null)
}

/**
 * saveItem stores an item in storage (either chrome local storage or the browser's local storage).
 * We default to chrome storage if it exists, otherwise we use the browser's local storage.
 *
 * @param key The identifier used to store the item to be retrieved from storage
 * @param value The value to be stored in storage
 *
 * @returns Promise<void>
 */
export const saveItem = async <T>(key: string, value: T): Promise<void> => new Promise((resolve, reject) => {
  console.log(key, value)
  if (chrome.storage?.local) {
    return resolve(chrome.storage.local.set({ key: value}))
  }

  return resolve(localStorage.setItem(key, JSON.stringify(value)))
})

// export const deleteIte
