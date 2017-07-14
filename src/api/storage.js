/**
 * Created by chenmf on 2017/6/26.
 */
const STORAGE_KEY = 'vue2-chat-session';

export function setStorage (val) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
}

export function getStorage () {
  return sessionStorage.getItem(STORAGE_KEY);
}
