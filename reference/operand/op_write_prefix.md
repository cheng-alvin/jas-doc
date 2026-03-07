## `op_write_prefix`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for automatically writing prefixes into a buffer based off the provided
size of the operands reference array, and as appropriate for the supplied
encoder mode the instruction is being encoded.

> [!NOTE]
> This function does not write prefixes associated with the generation of REX
> prefixes such as providing access to 64-bit register references or operands.
> For specific functions catered towards the generation of REX prefixes, see the
> REX module for more information.

### Synopsis

```c
#include <operand.h>
void op_write_prefix(buffer_t *buf, operand_t *op_arr, enum modes mode);
```

### Argument specifications

As the Intel x86 system may require the usage of prefixes to enable and encode
the usage of certain combinations of operand sizes, the function mainly serves
to write override prefixes on operand sizes.

- `buf` - The pointer to the buffer array which results will be assigned to.
- `op_arr` - An array of operands which the function will write prefixes on.
- `mode` - Current mode the instruction and the corresponding operands will be
  encoded in.

`mode` helps to validate whether accessing certain operands or operand size
combinations are supported in the current encoder context. Check the
[`modes`](/reference/mode/modes.md) enum for specifics.

### Writing prefixes to buffer

As per the `buf` argument, a pointer to a buffer may be used. The function
de-references the contents of the buffer and assigns the final allocation back
to the `buf.data` struct member. If no pre-existing data is available, caller
may elect to pass `BUF_NULL` and reference the result.

### See also

- [`rex_apply`](/reference/rex/rex_apply.md)
- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`modes`](/reference/mode/modes.md)
