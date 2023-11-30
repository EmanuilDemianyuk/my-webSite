import { Nullable, IStorage } from "src/Type";

class StorageManager {
    private storage: IStorage;

    constructor(storage: IStorage) {
        this.storage = storage;
    }

    setItem<T>(key: string, value: T): void {
        this.storage.setItem(key, JSON.stringify(value));
    }  
    getItem<T>(key: string): Nullable<T> {
        const storedValue = this.storage.getItem(key);

        if (storedValue === null) {
            return null;
        }

        return JSON.parse(storedValue) as T;
    }
    removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    clear(): void {
        this.storage.clear();
    }
}

export const localStorageManager = new StorageManager(localStorage);
// export const sessionStorageManager = new StorageManager(sessionStorage);
