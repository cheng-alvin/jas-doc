## `op_modrm_mode`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

_Not to be confused with the type `op_modrm_modes`_

Function for the automatic allocation of a ModR/M mode value based on operand
displacement size and corresponding mode. `op_modrm_mode` allows for encoder
size optimizations to be made by consistently enforcing the smallest applicable
displacement size.

It should be noted that in adherence to standard Intel terminology, *operand
size* depicts to the size of the *data* itself, rather than the displacement
size in encoding. This means, no displacement size is provided by the user
directly.

> [!NOTE]
> This function only checks for when a displacement value is used along side a
> ModR/M value. Callers wanted to check `OP_MODRM_MODE_REG` should check whether
> the operand itself falls into the register operand category in lieu of using
> `op_modrm_modes`.

### Synopsis

```c
#include <operand.h>
enum op_modrm_modes op_modrm_mode(uint64_t displacement, uint8_t *sz);
```

### Argument specifications

- `displacement` - The displacement value of the operand. Used for checking
  whether the operand offset exceeds the maximum allowed for _8_ or _32_ bit
  displacement sizes.

- `sz` - Original size of displacement as indicated by input.

### See also

- [`op_modrm_modes`](/reference/operand/op_modrm_modes.md)
