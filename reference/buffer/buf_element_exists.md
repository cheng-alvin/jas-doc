## `buf_element_exists`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

> [!WARNING]
> Please note that due to the limited usage of `buf_element_exists` within the
> codebase, this method may be removed in later versions. Users should not rely
> on said function due to volatility of deprecation in the foreseeable future.

Function for checking if the supplied element value exists within the buffer.
Returns a boolean value indicative of whether said element has been found in
supplied buffer.

`buf_element_exists` only checks for the existence and does not return excess
information such as position, number of instances etc.

### Synopsis

```c
#include <buffer.h>
bool buf_element_exists(buffer_t *buf, const uint8_t elem);
```

### Argument specifications

- `buf` - Pointer to the target `buffer_t` object for the operation.
- `elem` - The target value for checking inclusion in the buffer in question.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`buf_write`](/reference/buffer/buf_write.md)
