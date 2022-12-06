export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}

// Note
// We use save() function to store access token and user details to the local storage in order to use for future. Here key is (name) and value is (value as JSON format ).

// load() is for get the value from localstorage. We parse the value from JSON from. We will use key to get the value assigned to the key.

//  remove() is used to remove items from local storage
