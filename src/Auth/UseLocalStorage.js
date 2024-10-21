// import { useState } from "react";

// function useLocalStorage(key, initialValue) {
//     const [storedValue, setStoredValue] = useState(() => {
//         try {
//             const item = window.localStorage.getItem(key);
//             return item ? JSON.parse(item) : initialValue;
//         } catch (error) {
//             console.error(error);
//             return initialValue;
//         }
//     });

//     const setValue = (value) => {
//         try {
//             const valueToStore = value instanceof Function ? value(storedValue) : value;
//             setStoredValue(valueToStore);
//             window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return [storedValue, setValue];
// }

// export default useLocalStorage;  // Make sure this is a default export


import { useState, useEffect } from "react";

/** Custom hook for keeping state data synced with localStorage.
 *
 * This creates `item` as state and look in localStorage for current value
 * (if not found, defaults to `firstValue`)
 *
 * When `item` changes, effect re-runs:
 * - if new state is null, removes from localStorage
 * - else, updates localStorage
 *
 * To the component, this just acts like state that is also synced to/from
 * localStorage::
 *
 *   const [myThing, setMyThing] = useLocalStorage("myThing")
 */

function useLocalStorage(key, firstValue = null) {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() {
    console.debug("hooks useLocalStorage useEffect", "item=", item);

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
