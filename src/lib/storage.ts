class LocaleStorage {
  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }
}

const Storage = new LocaleStorage();

export default Storage;
