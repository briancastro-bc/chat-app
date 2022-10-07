
export class CustomStorage {

  private readonly storage: Storage;

  constructor(
    storage: Storage
  ) {
    this.storage = storage;
  }

  get(key: string): { value: any, timestamp: number } {
    const element = JSON.parse(this.storage.getItem(key) as any);
    return element != undefined ? element : '';
  }

  set(key: string, value: any): void {
    // key = 'name'
    // value = 'lola';
    const element = JSON.stringify({ value, timestamp: Date.now() });
    /**
     *
     * const element = {
     *  value: 'lola',
     *  timestamp: 'fecha actual'
     * }
     *
     */
    return this.storage.setItem(key, element);
  }

  clear(): void {
    return this.storage.clear();
  }
}
