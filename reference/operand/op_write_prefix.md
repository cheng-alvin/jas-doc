## `op_write_prefix`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for automatically writing prefixes into a buffer based off the provided
size of the operands reference array, and as appropriate for the supplied
encoder mode the instruction is being encoded in.

As the Intel x86 system may require the usage of prefixes to enable and encode
the usage of certain combinations of operand sizes, the function mainly serves
to write override prefixes on operand sizes.

> [!NOTE]
> This fu

### Synopsis

```c
#include <operand.h>
void op_write_prefix(buffer_t *buf, operand_t *op_arr, enum modes mode);
```

### Argument specifications

- `buf` - The pointer to the buffer array which the results will be allocated
  in.
- `op_arr` - An array of operands which the function will write prefixes on.
- `mode` - Current mode the instruction and the corresponding operands will be
  encoded in.
