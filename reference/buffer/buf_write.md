## `buf_write`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for writing a string of bytes to the specified buffer object structure
with a length of a specified size. Where the supplied buffer object is
unavailable and contains `NULL`, the function will allocate a buffer memory
field automatically.

### Synopsis

```c
#include <buffer.h>
void buf_write(buffer_t *buf, const uint8_t *data, const size_t data_len);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation to be
  applied towards. Any reallocations (where applicable) are manipulated through
  de-referencing this pointer.

- `data` - An array of bytes to be appended.

- `data_len` - Size of the supplied data in bytes and specifies the length of
  data to be appended to the `buffer_t` structure.

> [!WARNING]
> *No* error checking is done to ensure the validity of teh `data_len` argument
> and *assumes* that the actual size of the `data` matches the supplied length.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
