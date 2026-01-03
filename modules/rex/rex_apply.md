## `rex_apply`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for automatically applying REX prefixes based off an instruction's
operands' requirements. Due to provided information in the `instruction_t`'s
operand data source and determines the validity of said values, then finally
returning a `rex_t` byte. For more information regarding the general usage of
Intel's REX prefix encodings, official Intel develop manuals and endorsed
resources should be referred to.

### Synopsis

```c
#include <rex.h>
rex_t rex_apply(instruction_t *input);
```

### Argument specifications

- `input` - The input instruction pointer reference to be checked of whether if
  a REX prefix is required to support for operand references such as register
  values or indirect references.

> [!TIP]
> Due to similarities with the `enc_serialized_instr_t` type, the value byte
> returned from `rex_apply` can be applied directly to the serialized
> instruction by assigning it to the `rex` property, without needing type
> conversion or casting since they are of equivalent type. See the `rex_t`
> documentation for more information regarding the type.

### Error handling

Due to `rex_apply`'s dependence upon `instr_get_tab`, an error may occur where
an instruction encoder reference table was not found or has'nt been included.
Data accuracy of instruction encoder tables may also give misleading outcomes.
Regardless of success of the intended operations, `rex_apply` returns
`REX_DEFAULT` by default, even if no operation has been completed.

### See also

- [Intel REX prefixes](https://en.wikipedia.org/wiki/REX_prefix)
- [`rex_t`](<>)
- [`instruction_t`](<>)
- [`instr_get_tab`](<>)
