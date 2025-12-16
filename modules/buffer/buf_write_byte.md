## `buf_write_byte`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for writing a single byte to the specified `buffer_t` structure.
Elevates redundant arguments in size when single-byte sized data is to be
written into a Jas buffer. Under the hood, this function is simply used as a
wrapper function which calls the `buf_write()` with size of `1`

The buffer module itself does **not** provide any memory de-allocation
functionalities and is of responsibility to the caller to clean-up any memory
leaks through the standard `free()` function.

### Synopsis

```c
#include <buffer.h>
void buf_write_byte(buffer_t *buf, const uint8_t data);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation to be
  applied towards.

- `data` - A single byte value to be written into the `buffer_t` object.

### Error handling

Not applicable. Error handling specifications from `buf_write()` may apply.

### Example

```c
#include <buffer.h>
#include <stdlib.h>

int main(void) {
  buffer_t buf = BUF_NULL;
  buf_write_byte(&buf, 0x00);

  free(buf.data); // All done now.

  return 0;
}
```

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
- [`buf_write()`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buf_write.md)
