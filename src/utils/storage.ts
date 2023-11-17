export function setStorageData(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getStorageData(key: string) {
  let data: any = localStorage.getItem(key);
  if (data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.log('error parsing data', e);
    }
  }
  return data;
}