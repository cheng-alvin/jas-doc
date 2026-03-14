## `buf_concat`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function that concatenates a pre-determined amount of `buffer_t` structs to the
base `buf` structure. `buf_concat` provides the necessary memory allocation
operations to append additional structs onto the base `buffer_t ` structure as
supplied by the caller.

> [!NOTE]
> As for every `buffer_t` operation, the caller is always responsible for the
> deallocation of heap-allocated memory associated with the buffers. This
> **includes** the variadic arguments.

### Synopsis

```c
#include <buffer.h>
void buf_concat(buffer_t *buf, size_t count, ...);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` which assigns the final results.
- `count` - Specifies the number of following buffers to be appended to `buf`.

<!-- Line break -->

- `...` - A list of `buffer_t` structures arranged in variadic arguments (*not*
  an array) to be concatenated in accordance to the amount specified in the
  `count` parameter above.

> [!WARNING]
> **No** error validation is/can be done to the `count` argument to ensure that
> `count` does not exceed the provided amount of variadic arguments supplied. A
> misleading `count` parameter may cause memory leaks due to reading beyond
> intended data.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
