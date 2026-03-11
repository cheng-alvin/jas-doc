## `buf_remove`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for quickly removing a single element from a specified `buffer_t`
structure. Said function automatically handles data allocations and moves array
elements in position, while assigning applied changes in the buffer structure.

### Synopsis

```c
#include <buffer.h>
void buf_remove(buffer_t *buf, const size_t elem);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` manipulated for the operation.

- `elem` - Value representing the index of the array that should be removed from
  the allocated buffer.

  It should be noted that this should represent the *index* of the value that is
  to be removed from the buffer object, not to be confused with the count.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
