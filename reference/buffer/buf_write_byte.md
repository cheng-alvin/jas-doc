## `buf_write_byte`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for writing a single byte to the specified `buffer_t` structure.
Elevates redundant arguments in size when single-byte sized data is to be
written into a buffer as compared to a counterpart such as `buf_write`.

### Synopsis

```c
#include <buffer.h>
void buf_write_byte(buffer_t *buf, const uint8_t data);
```

### Argument specifications

- `buf` - `buffer_t` structure in question for the write to be completed on.
- `data` - A user-defined byte to be added to the `buf` buffer object.

Under the hood, this function is simply implemented as a wrapper function which calls
the default `buf_write` with size of `1`, supplying the chosen data to `buf_write`. Thus, requirements that apply to `buf_write` may also apply to `buf_write_byte`.

_It is highly encouraged to consult the documentation file for [`buf_write`](/reference/buffer/buf_write.md)_

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
