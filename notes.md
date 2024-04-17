In JavaScript, an iterable and an array are related concepts but serve different purposes:

1. **Array**:

   - An array is a built-in data structure in JavaScript used to store a collection of elements.
   - Arrays have a fixed order, meaning the elements are indexed starting from 0, and you can access elements by their index.
   - Arrays have a variety of built-in methods such as `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, etc., for manipulating their contents.
   - Arrays are not inherently iterable in the sense of being able to use them directly in constructs like `for...of` loops or with the `forEach` method without converting them to iterables.

2. **Iterable**:
   - An iterable is a more abstract concept in JavaScript that represents any object that can be iterated over, meaning you can loop through its elements one by one.
   - Iterables are used in constructs like `for...of` loops, the `spread` operator (`...`), and various array methods like `map`, `filter`, and `reduce`.
   - JavaScript provides built-in iterables like arrays, strings, maps, sets, and generator functions.
   - You can create custom iterables by implementing the iterable protocol, which involves defining a method `Symbol.iterator` that returns an iterator object.

In summary, an array is a specific type of data structure in JavaScript used for storing collections of elements with array-specific methods, while an iterable is a more general concept that represents anything you can iterate over, including arrays but also other objects like strings, maps, sets, etc.

## Arrays

- Modifying the original array directly without creating a new array.

1. **push**:

   - **What it does**: Adds one or more elements to the end of an array.
   - **Parameters**: It takes one or more elements as arguments, which are appended to the end of the array.
   - **Return value**: It returns the new length of the array after adding the elements.

   ```javascript
   const arr = [1, 2, 3];
   const newLength = arr.push(4, 5); // arr is now [1, 2, 3, 4, 5], newLength is 5
   ```

2. **pop**:

   - **What it does**: Removes the last element from an array and returns that element.
   - **Parameters**: It does not take any parameters.
   - **Return value**: It returns the element that was removed from the array.

   ```javascript
   const arr = [1, 2, 3];
   const poppedElement = arr.pop(); // arr is now [1, 2], poppedElement is 3
   ```

3. **shift**:

   - **What it does**: Removes the first element from an array and shifts all other elements to a lower index, updating their indices accordingly.
   - **Parameters**: It does not take any parameters.
   - **Return value**: It returns the element that was removed from the array.

   ```javascript
   const arr = [1, 2, 3];
   const shiftedElement = arr.shift(); // arr is now [2, 3], shiftedElement is 1
   ```

4. **unshift**:

   - **What it does**: Adds one or more elements to the beginning of an array and shifts existing elements to higher indices to accommodate the new elements.
   - **Parameters**: It takes one or more elements as arguments, which are added to the beginning of the array.
   - **Return value**: It returns the new length of the array after adding the elements.

   ```javascript
   const arr = [2, 3];
   const newLength = arr.unshift(0, 1); // arr is now [0, 1, 2, 3], newLength is 4
   ```

5. **splice**:
   - **What it does**: The `splice` method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   - **Parameters**:
     - `start`: The index at which to start changing the array. If negative, it indicates an offset from the end of the array (e.g., `-1` for the last element).
     - `deleteCount` (optional): The number of elements to remove from the array. If omitted or greater than the number of elements from `start` to the end of the array, all elements from `start` to the end of the array are removed.
     - `item1`, `item2`, ... (optional): Elements to add to the array at the `start` index. If no elements are provided, only removal occurs.
   - **Return value**: An array containing the removed elements. If no elements are removed, an empty array is returned. The original array is modified in place.
   - **Weird cases**:
     - Using a negative `start` index to remove elements from the end of the array:
       ```javascript
       const arr = [1, 2, 3, 4, 5];
       const removed = arr.splice(-2); // Removes 4 and 5 from the end of the array
       // arr is now [1, 2, 3], removed is [4, 5]
       ```
     - Adding elements without removing any:
       ```javascript
       const arr = [1, 2, 3];
       arr.splice(1, 0, "a", "b"); // Inserts 'a' and 'b' at index 1 without removing any elements
       // arr is now [1, 'a', 'b', 2, 3]
       ```
     - Removing elements without adding any:
       ```javascript
       const arr = [1, 2, 3, 4, 5];
       const removed = arr.splice(2, 3); // Removes elements starting from index 2 (3, 4, 5)
       // arr is now [1, 2], removed is [3, 4, 5]
       ```

- The original array is not modified:

1. **slice**:
   - **What it does**: The `slice` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start` and `end` represent the index of items in that array. The original array is not modified.
   - **Parameters**:
     - `start` (optional): The index at which to begin extraction. If negative, it indicates an offset from the end of the array (e.g., `-2` for the second-to-last element). If omitted, `slice` extracts from the beginning of the array.
     - `end` (optional): The index at which to end extraction. `slice` extracts up to, but not including, `end`. If negative, it indicates an offset from the end of the array. If omitted, `slice` extracts through the end of the array.
   - **Return value**: A new array containing elements from `start` to `end` (excluding `end`). If `start` is greater than or equal to `end`, an empty array is returned.
   - **Weird cases**:
     - Using negative indices:
       ```javascript
       const arr = [1, 2, 3, 4, 5];
       const sliced = arr.slice(1, -1); // Extracts elements from index 1 (2) to the second-to-last element (4)
       // sliced is [2, 3, 4], arr remains [1, 2, 3, 4, 5]
       ```
     - Omitting parameters:
       ```javascript
       const arr = [1, 2, 3, 4, 5];
       const sliced1 = arr.slice(2); // Extracts elements from index 2 (3) to the end
       const sliced2 = arr.slice(); // Creates a shallow copy of the entire array
       // sliced1 is [3, 4, 5], sliced2 is [1, 2, 3, 4, 5], arr remains [1, 2, 3, 4, 5]
       ```

The `slice` method is useful for extracting portions of an array without modifying the original array, making it handy for operations where you need to work with subsets of data.

## Maps & Sets

**Maps:**

- Definition: Maps are data structures in JavaScript that allow storing key-value pairs. Each key in a map can be of any data type, and keys are unique within the map. Maps provide methods for adding, removing, and updating entries, making them versatile for managing collections of data.
- Use case: Maps are commonly used when you need to associate unique keys with specific values. For example, in a web application, you might use a map to store user preferences, where each preference type (key) is associated with a specific setting (value). Maps are also useful for caching data, implementing memoization, or managing complex data structures.

**Sets:**

- Definition: Sets are collections of unique values in JavaScript, where each value can occur only once within the set. Sets can contain values of any data type, and they provide methods for adding, removing, and checking for the presence of values.
- Use case: Sets are useful when you need to store a collection of unique elements without duplicates. For instance, in a social media application, you might use a set to store the list of users who liked a post, ensuring that each user is counted only once regardless of how many times they liked the post. Sets can also be used for filtering out duplicates from arrays or checking for the existence of specific elements in a collection efficiently.
  <br/>
  <br/>
  <br/>

---

---

This table summarizes the key differences between maps, sets, and arrays in terms of their data structure, handling of keys or values, duplicity, accessing data, modifying the collection, iteration behavior, performance characteristics, and common use cases.

| Feature        | Maps                           | Sets                                 | Arrays                                |
| -------------- | ------------------------------ | ------------------------------------ | ------------------------------------- |
| Data Structure | Key-Value pairs                | Unique values                        | Indexed elements                      |
| Keys           | Can be of any data type        | Not applicable (uses values as keys) | Not applicable (uses indices as keys) |
| Duplicity      | Keys are unique                | Values are unique                    | Duplicates allowed                    |
| Accessing Data | Access by key                  | Access by value                      | Access by index                       |
| Modifying      | Add, update, delete by key     | Add, delete by value                 | Add, update, delete by index          |
| Iteration      | Iterates over key-value pairs  | Iterates over values                 | Iterates over elements                |
| Performance    | Efficient for key-based access | Efficient for value-based operations | Efficient for sequential access       |
| Use Cases      | Storing associations           | Managing unique values               | Handling ordered collections          |

---

---

### [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

```javascript
const newIds = new Set([11, 344, 55]);
for (const entry of newIds.entries()) {
  console.log(entry);
}
```

When you call `newIds.entries()`, it returns an iterator where each entry is an array `[value, value]`, where `value` is an element from the set. In sets, there's no distinction between keys and values like in maps; each element itself is considered both the key and the value.

So, when you iterate over `newIds` using `.entries()`, you get entries like `[11, 11]`, `[344, 344]`, and `[55, 55]`. This behavior is consistent with the way sets are designed in JavaScript, where each element is unique and can be accessed directly as both the key and the value.

If you want to iterate over the values in a set without the duplication in the entries, you can use the `.values()` method instead of `.entries()`:

```javascript
const newIds = new Set([11, 344, 55]);
for (const value of newIds.values()) {
  console.log(value);
}
```

This will log each value in the set without duplication:

```
11
344
55
```

## Weak Sets and Maps

WeakSets and WeakMaps are special types of collections in JavaScript that have some unique characteristics compared to regular sets and maps. Here's an explanation of each and their common use cases:

1. **WeakSet:**

   - **Definition:** A WeakSet is a collection of objects where the object references are weakly held, meaning that they do not prevent the objects from being garbage collected if there are no other strong references to them.
   - **Use Cases:**
     - Managing temporary or transient data: WeakSets are useful when you need to store temporary data or track object existence in a way that doesn't prevent objects from being cleaned up by garbage collection when they are no longer needed.
     - Storing DOM elements: WeakSets can be used to store references to DOM elements without preventing them from being garbage collected when they are removed from the DOM.
     - Memory management in specialized scenarios: In some cases, WeakSets can be used for specialized memory management, such as managing caches or tracking object usage in memory-intensive applications.

2. **WeakMap:**
   - **Definition:** A WeakMap is a collection of key-value pairs where the keys are weakly held object references. Like WeakSets, WeakMaps do not prevent objects from being garbage collected if there are no strong references to them.
   - **Use Cases:**
     - Associating metadata with objects: WeakMaps are commonly used to associate metadata or additional information with objects without affecting the object's lifecycle or preventing it from being garbage collected.
     - Private data storage: WeakMaps can be used to store private data or implementation details related to objects, where the map's keys are the objects themselves.
     - Managing caches or memoization: WeakMaps can be used in caching or memoization strategies where the cached data should not prevent objects from being garbage collected when they are no longer needed.

**Key Differences:**

- WeakSets and WeakMaps differ from regular sets and maps in that they do not prevent garbage collection of objects that are only referenced within the collection. This makes them suitable for scenarios where you want to avoid memory leaks or unnecessary retention of objects.
- WeakSets can only contain objects as elements, not primitive values like numbers or strings.
- WeakMaps use object references as keys, allowing for association of data with specific objects without affecting the object's lifecycle.

In summary, WeakSets and WeakMaps provide a way to work with collections of objects in JavaScript while allowing for more efficient memory management and avoiding memory leaks in certain scenarios. They are particularly useful when dealing with temporary data, DOM element references, or specialized memory management requirements.
