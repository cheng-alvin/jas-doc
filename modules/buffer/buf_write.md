## `buf_write`
**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for writing a string of bytes to the specified buffer object 
structure with a length of a specified size. Where the supplied buffer
object is unavailable and contains `NULL`, the function will allocate 
a buffer memory field automatically.

The buffer module itself does **not** provide any memory de-allocation
functionalities and is of responsibility to the caller to clean-up 
any memory leaks through the standard `free()` function.

### Synopsis
```c
#include <buffer.h>
void buf_write(buffer_t *buf, const uint8_t *data, const size_t data_len);
```

### Argument specifications 
`buf` - Pointer to the target `buffer_t` object for the operation to be applied
towards.

`data` - A pointer to the array of bytes that is intended to be written to
the buffer as supplied in `buf`.

`data_len` - Size of the supplied data in bytes and specifies the amount of 
data to be read by the function and therefore appended to the buffer array.
It should be noted that **no** checking is done of data and size validity 
during runtime and memory security should be confirmed by caller.

### Error handling
The function returns when the chosen total amount of data as specified in `data_len`
to be written is 0, indicating a lack of requirement of writing.

### Example
```c
#include <buffer.h>

#include <stdlib.h>
#include <stdint.h>

int main(void) {
    uint8_t my_array[] = {0xAB, 0xCD};
    size_t array_size = sizeof(my_array);

    buffer_t buf = BUF_NULL;
    buf_write(&buf, my_array, array_size);

    free(buf.data); // All done now.

  return 0;
}
```

### See also
- [`buffer_t`]()
