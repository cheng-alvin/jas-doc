## `buf_concat`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function that concatenates a pre-determined amount of `buffer_t` structs to the
base `buf` structure. `buf_concat` provides the necessary memory allocation
operations to append additional structs onto the base struct.

> [!NOTE]
> As for every `buffer_t` operation, the caller is always responsible for the
> deallocation of heap-allocated memory associated with the buffers. This
> **includes** the arguments passed in as variadic arguments.

### Synopsis

```c
#include <buffer.h>
void buf_concat(buffer_t *buf, size_t count, ...);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation.

- `count` - Number of buffers following this argument to be combined with the
  `buf` argument. No checking is done by the function to ensure data are in
  bounds of provided variadic arguments and the arguments' identity.

- `...` - Variadic arguments, represents a list of `buffer_t` structs to be
  appended to the main `buf` buffer. Conditions and validation check that apply
  to `buf_write` may also apply to `buf_concat` due to its dependence.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
