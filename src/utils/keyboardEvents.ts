const enterCallbacks: any[] = [];
const generalCallbacks: any[] = [];

export function removeEnterCallback(callback: any) {
  if (enterCallbacks.includes(callback)) {
    const index = enterCallbacks.indexOf(callback);
    enterCallbacks.splice(index, 1);
  }
}

export function addEnterCallback(callback: any) {
  if (!enterCallbacks.includes(callback)) {
    enterCallbacks.push(callback);
  }
}

export function removeKeyCallback(callback: any) {
  if (generalCallbacks.includes(callback)) {
    const index = generalCallbacks.indexOf(callback);
    generalCallbacks.splice(index, 1);
  }
}

export function addKeyCallback(callback: any) {
  if (!generalCallbacks.includes(callback)) {
    generalCallbacks.push(callback);
  }
}

export function handleEnterClick() {
  for (const c of enterCallbacks) {
    if (c) c();
  }
}

export function handleKeyboardClick(e: KeyboardEvent) {
  for (const c of generalCallbacks) {
    if (c) c(e);
  }
}