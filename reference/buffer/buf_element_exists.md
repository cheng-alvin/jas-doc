## `buf_element_exists`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

<!-- @mdformat pause -->

> [!WARNING]
> Please note that due to the limited usage of `buf_element_exists` within the
> codebase, this method may be removed in later versions. Users should not rely
> on said function due to volatility of deprecation in the foreseeable future.

<!-- @mdformat resume -->

Function for checking if the supplied element value exists within the buffer.
Returns a boolean value indicative of whether said element has been found in
supplied buffer. Returns a boolean value representing the value's existence
within the provided buffer. `buf_element_exists` only checks for the existence
and does not return excess information such as position, instances etc.

### Synopsis

```c
#include <buffer.h>
bool buf_element_exists(buffer_t *buf, const uint8_t elem);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation.
- `elem` - The value to be determined for its existence within `buf`.

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

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write()`](/reference/buffer/buf_write.md)
