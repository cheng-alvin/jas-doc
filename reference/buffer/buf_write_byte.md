## `buf_write_byte`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for writing a single byte to the specified `buffer_t` structure.
Elevates redundant arguments in size when single-byte sized data is to be
written into a buffer as compared to a counterpart such as `buf_write`.

Under the hood, this function is simply used as a wrapper function which calls
the `buf_write()` with size of `1`

### Synopsis

```c
#include <buffer.h>
void buf_write_byte(buffer_t *buf, const uint8_t data);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` in question and allows manipulation
  of the pointer allocation.
  
- `data` - A single byte value to be written into the `buffer_t` object.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
