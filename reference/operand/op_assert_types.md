## `op_assert_types`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Utility function for checking and confirming that the types of the input operand
array matches an array of expected operand types. `op_assert_types` returns a
boolean value corresponding to whether if the provided array of operand structs
matches the operand types array provided.

`op_assert_types` is typically used for the validation of user-provided operands
against a set of expected operands as part of the `instr_encode_table` struct's
operand descriptor types.

### Synopsis

```c
#include <operand.h>
bool op_assert_types(operand_t *in, enum operands *ex, size_t sz);
```

### Argument specifications

- `in` - The input operand array for the checking to be completed against.
- `ex` - An array of expected operand data types which `in` should match to.
- `sz` - The expected size of both arrays in the number of operands.

`op_assert_types` returns a `true` boolean value if the operand types array `ex`
is equivalent with the types of the operands in `in`, conversely, if operands do
not match, `false` is to be returned.

> [!NOTE]
> As mentioned above, the `op_assert_types` function is specifically targeted
> towards the validation of operands against instruction encoder reference
> tables, the function bases its judgement of operands through the `ex` value.

### See also

- [`operands`](/reference/operand/operands.md)
- [`operand_t`](/reference/operand/operand_t.md)
