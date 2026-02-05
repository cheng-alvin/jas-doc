## `op_modrm_mode`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

_Not to be confused with the type `op_modrm_modes`_

Function for the automatic allocation of a ModR/M mode value based on operand
displacement size. `op_modrm_mode` allows for encoder size optimizations to be
made by consistently enforcing the smallest applicable displacement size.

Usage of `op_modrm_mode` assumes that the target data as represented by the
ModR/M byte points to a memory location, and not a register's value.

> [!NOTE]
> Callers wanted to check `OP_MODRM_MODE_REG` should check whether the operand
> itself falls into the register operand category in lieu of this function.

### Synopsis

```c
#include <operand.h>
enum op_modrm_modes op_modrm_mode(uint64_t displacement, uint8_t *sz);
```

### Argument specifications

- `sz` - Pointer passed of size return value. Can be indicative of data size.

- `displacement` - The displacement value of the operand. Used for checking
  whether the operand offset exceeds the maximum allowed for _8_ or _32_ bit
  displacement sizes.

### Error handling

The `op_modrm_mode` function also checks whether the passed values exceed the
published thresholds for said type. As the maximum displacement value allowed in
a scalar instruction is 4 bytes, the function returns an error and invalidates
the displacement when such case occurs.

It should be noted that in adherence to standard Intel terminology, _operand
size_ depicts to the size of the _data_ itself, rather than the displacement
size in encoding. This means, no displacement size is provided by the user
directly in form of the input operand.

### See also

- [`op_modrm_modes`](/reference/operand/op_modrm_modes.md)
