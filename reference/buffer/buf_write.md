## `buf_write`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for writing a string of bytes to the specified buffer object structure
with a length of a specified size. Where the supplied buffer's `data` member
allocation is assigned as `NULL`, the function will allocate a _new_ data field
automatically.

### Synopsis

```c
#include <buffer.h>
void buf_write(buffer_t *buf, const uint8_t *data, const size_t data_len);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation to be
  applied towards.

- `data` - The data of the items to be appended to `buf` itself.

- `data_len` - Size of the supplied data in bytes and specifies the length of
  data to be appended.

> [!WARNING]
> _No_ error checking is done to ensure the validity of thr `data_len` argument
> and _assumes_ that the actual size of the `data` matches the supplied length.
> It is the caller's responsibility to limit the size of the buffer and prevent
> inadvertently writing into other memory.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
