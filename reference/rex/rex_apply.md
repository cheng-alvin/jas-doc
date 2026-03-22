## `rex_apply`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

`rex_apply`, as the name suggests, automatically applies the REX prefixes based
off an instruction's operand requirements. The function infers the requirements
listed by the provided instruction and applies a corresponding register
extension prefix in the listed return value as a `rex_t`.

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
> returned from `rex_apply` can be applied _directly_ to the serialized
> instruction by assigning it to the `rex` property.

If no REX prefix is required to encode the instruction, the `REX_DEFAULT`
constant will be returned. A condition can be used to check whether the REX byte
should be written as part of the final encoding by checking for said
`REX_DEFAULT` value.

### Error handling

Due to `rex_apply`'s dependence upon `instr_get_tab`, an error may occur where
an instruction encoder reference table was not found or hasn't been included.

`rex_apply` returns `REX_DEFAULT` by default, even if no operation has been
completed. Additional diagnostic information is provided via the associated
`err` function callback channel.

### See also

- [Intel REX prefixes](https://en.wikipedia.org/wiki/REX_prefix)
- [`rex_t`](/reference/rex/rex_t.md)
- [`instruction_t`](<>)
- [`instr_get_tab`](<>)
