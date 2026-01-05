## `buf_concat`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function that concatenates a supplied length buffers to the supplied target
buffer using variadic arguments. However it should be noted that memory
de-allocation on the heap is NOT provided by said function and assumes provided
buffers are to be preserved for de-allocation by the caller where deemed
appropriate.

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

### Example

```c
#include <buffer.h>

#include <stdlib.h>
#include <stdint.h>

int main(void) {
  uint8_t my_array[] = {0xAB, 0xCD, 0xEF};

  buffer_t buf = BUF_NULL;

  // Initialize two buffers:
  buffer_t my_buf = BUF_NULL;
  buffer_t another_buf = BUF_NULL;

  buf_write_byte(&my_buf, my_array[0]);
  buf_write_byte(&my_buf, my_array[1]);  
  
  buf_write_byte(&another_buf, my_array[2]);
  
  // Concatenate them together, forming a new buffer.
  buf_concat(&buf, 2, my_buf, another_buf); 

  free(buf.data);

  free(my_buf.data);
  free(another_buf.data);

  return 0;
}
```

### See also

- [`buffer_t`](buffer/buffer.md)
- [`buf_write()`](buffer/buf_write.md)
