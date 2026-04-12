## `op_assert_descriptor`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for providing confirmation that the validity of an operand is met
against a set of standards as set by the expected operand descriptors.
`op_assert_descriptor` enforces the operand's type and the `expected` operand
descriptor's expected type.

> [!TIP]
> `op_assert_types` is tightly integrated with the `op_descriptor_t` used in conjunction as seen
> in the `instr_encode_tab` structure, supporting for error checking for encoding.

### Synopsis

```c
#include <operand.h>
bool op_assert_descriptor(operand_t in, op_descriptor_t expected);
```

### Argument specifications

- `in` - The input operand array for the checking to be completed against.
- `expected` - An operand descriptor to perform assertion against `in`.

`op_assert_descriptor` returns a boolean value indicative of whether the assertion is successful.

A `true` boolean value is returned if the requirements
expressed by operand descriptors in `expected` are reflected as per
`in`. Conversely, if the conditions are not met, `false` is to be returned, prompting appropriate error reporting measures.

### See also

- [`operands`](/reference/operand/operands.md)
- [`operand_t`](/reference/operand/operand_t.md)
- [`op_descriptor_t`]()
