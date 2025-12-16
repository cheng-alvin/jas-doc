## `buffer_t`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Structure for representing the an automatically allocated data array with
corresponding data information. This struct can be modified through through
associated function throughout the `buffer` module, allowing for basic
operations such as writing, removal of concatenation of bytes.

### Synopsis

```c
typedef struct {
  uint8_t *data;
  size_t len;
} buffer_t;
```

### Argument specifications

- `data` - An array of byte-sized data

- `len` - The number of bytes allocated towards the `data` array.

### Note

There is no function to automatically deallocate and reset the `buffer_t`
structure, such operations to free the allocated `data` array from heap memory
must be done through the built in `free()` function against the `data` member.

### See also

- [`buf_write()`]()

- [`free()` from `stdlib.h`](https://www.tutorialspoint.com/c_standard_library/c_function_free.htm)
