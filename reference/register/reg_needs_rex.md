## `reg_needs_rex`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Some registers on the x86 system may only accessible through the usage of a
register extension. `reg_needs_rex` determines whether a REX prefix is required
based on the supplied register context.

> [!NOTE]
> Specific operations regarding the use, as well as the various types of
> register extension prefixes can be found in the REX module and its associated
> functions. (As linked below)

### Synopsis

```c
#include <register.h>
bool reg_needs_rex(enum registers input);
```

### Argument specifications

- `input` - The input register in question to be checked of prefix requirement.

`reg_needs_rex` only filters for a select list of registers that requires the
register extension value. This means, the function's return value would always
default to `false`, even if the register enum as specified in `input` isn't
valid. Validity of registers should be checked _before_ calling `reg_needs_rex`.

### See also

- [`enum registers`](/reference/register/registers.md)
- [Jas' REX module](https://github.com/cheng-alvin/jas-doc/tree/main/modules/rex)
