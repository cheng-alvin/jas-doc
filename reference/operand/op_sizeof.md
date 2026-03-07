## `op_sizeof`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function encapsulating various operand checks to quickly evaluate a size of the
operand from passing its operand type in the form of an `operands` enum. Usage
is akin to the `sizeof` operator implemented in the standard C99 language.

### Synopsis

```c
#include <operand.h>
uint8_t op_sizeof(enum operands input);
```

### An important differentiation

`op_sizeof` is used as a measure of the size of the data it is referenced to,
rather than the physical size of the operand is allocated in the encoder.
However, in cases where the data directly is correlated with the physical size,
it may be observed that the `op_sizeof` function is used to determine encoding
width.

> [!TIP]
> If checking was to be required for the actual size of the data supplied within
> the encoder buffer, constrict the range of operands to _only_ immediate
> operands. Only immediate values have their depicted range correspond to actual
> size in encoding.

It should be noted that determining the size of operands such as register
reference operands is not supported to due potential variations across modes.

### Argument specifications

- `input` - The type of operand that checking is done against.

The function returns the size of the operand with the corresponding type in the
_number of bits_ and returns a `0` value if the operand is invalid or the size
is not applicable such as `OP_NULL`.

> [!WARNING]
> Please note that contrary to the usage of the standard `sizeof` modifier in C,
> `op_sizeof` returns the size in **the number of bits** in lieu of the number
> of bytes. As this matches up with common terminology such as protected mode
> commonly being referred to as _32-bit mode_.

### See also

- [`operands`](/reference/operand/operands)
