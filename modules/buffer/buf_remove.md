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

- `buf` - Pointer to the target `buffer_t` object for the operation.

- `elem` - Value representing the index of the array that should be removed from
  the allocated buffer. It should be noted that this should represent the
  *index* in lieu of the *count*, that is, the offset from the first element;
  akin to the indexing of array elements.

### Error handling

If the supplied buffer is empty through a `0` represented `.len` value, the
function terminates without further action. Where the supplied `elem` argument
is out of range relative to the `len` member of the target buffer (`buf`), no
bytes will be removed and may lead to undefined behavior.

Due to the lack of error handling for whether the intended `elem` value is in
range of the `len` member, the caller should be ultimately responsible for
ensuring such value is in bounds to avoid memory leaks and access of unallocated
memory.

### Example

```c
#include <buffer.h>

#include <stdlib.h>
#include <stdint.h>

int main(void) {
  uint8_t my_array[] = {0xAB, 0xCD, 0xEF};
  size_t array_size = sizeof(my_array);

  buffer_t buf = BUF_NULL;
  buf_write(&buf, my_array, array_size);

  buf_remove(&buf, 0); // Remove 1st element

  free(buf.data);
  return 0;
}
```

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
- [`buf_write()`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buf_write.md)
