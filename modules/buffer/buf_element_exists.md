## `buf_element_exists`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for checking if the supplied element value exists within the buffer.
Returns a boolean value indicative of whether said element has been found in
supplied buffer.

### Synopsis

```c
#include <buffer.h>
bool buf_element_exists(buffer_t *buf, const uint8_t elem);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation.

- `elem` - The value to be determined for its existence within the buffer
  supplied.

### Example

```c
#include <buffer.h>

#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>

int main(void) {
  uint8_t my_array[] = {0xAB, 0xCD, 0xEF};
  size_t array_size = sizeof(my_array);

  buffer_t buf = BUF_NULL;
  buf_write(&buf, my_array, array_size);

  // Checks if 0xCD exists within `buf`
  bool element_exists =  buf_element_exists(buf, 0xCD);

  free(buf.data);
  return 0;
}
```

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
- [`buf_write()`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buf_write.md)
