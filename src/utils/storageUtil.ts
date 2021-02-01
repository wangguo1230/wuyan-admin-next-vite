class StorageUtil {
  private static defaultStorage: Storage = sessionStorage

  /**
   * @description 往storage存储数据
   * @date 2021-01-26
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @param {Storage} [storage] 可选,可传入localStorage或sessionStorage 默认为sessionStorage
   * @memberof StorageUtil
   */
  static setStorageItem(key: string, value: string, storage?: Storage) :void{
    const _storage = this.getStorage(storage)
    _storage.setItem(key, value)
  }

  /**
   * @description 从storage中取值
   * @date 2021-01-26
   * @static
   * @param {string} key 键
   * @param {Storage} [storage] 可选,可传入localStorage或sessionStorage 默认为sessionStorage
   * @returns 获取到的数据
   * @memberof StorageUtil
   */
  static getStorageItem(key: string, storage?: Storage): string | null {
    const _storage = this.getStorage(storage)
    return _storage.getItem(key)
  }

  private static getStorage(storage: Storage | undefined | null) {
    return storage ?? this.defaultStorage
  }
}

export default StorageUtil
