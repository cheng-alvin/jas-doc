## `rex_apply`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for automatically applying REX prefixes based off an instruction's
operands' requirements. Due to provided information in the `instruction_t`'s
operand data source and determines the validity of said values, then finally
returning a `rex_t` byte.

### Synopsis

```c
#include <rex.h>
rex_t rex_apply(instruction_t *input);
```

### Argument specifications

- `input` - The input instruction to be checked of whether if a REX prefix is
  required to support for operand references.

> [!TIP]
> Due to similarities with the `enc_serialized_instr_t` type, the value byte
> returned from `rex_apply` can be applied directly to the serialized
> instruction by assigning it to the `rex` property. This allows other encoding
> operations to be conducted upon by other encoder functions.

### Error handling

Due to `rex_apply`'s dependence upon `instr_get_tab`, an error may occur where
an instruction encoder reference table was not found or has'nt been included.
Data accuracy of instruction encoder tables may also give misleading outcomes.

### See also

- [Intel REX prefixes](https://en.wikipedia.org/wiki/REX_prefix)
- [`rex_t`](<>)
- [`instruction_t`](<>)
- [`instr_get_tab`](<>)
