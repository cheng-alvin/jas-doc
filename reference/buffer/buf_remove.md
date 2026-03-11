## `buf_remove`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for quickly removing a single element from a specified `buffer_t`
structure based on a provided index. Said function automatically handles data
allocations and moves array elements in correct positions.

### Synopsis

```c
#include <buffer.h>
void buf_remove(buffer_t *buf, const size_t elem);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` manipulated for the operation.
- `elem` - Value representing the index of the array that should be removed from
  the buffer

It should be noted that the `elem` parameter should represent the _index_ of the
value that is to be removed from the buffer object, not to be confused with the
count of the elements.

If the index as specified in `elem` exceeds the size shown in the `len` member
of `buffer_t`, no operation will be completed. However, no error will also be
returned and requires for checking by the caller to ensure `elem` is in range of
the specified buffer's range.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
