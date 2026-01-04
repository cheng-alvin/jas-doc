## `reg_needs_rex`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Some registers on the x86 system may only accessible through the usage of REX
prefixes (register extension prefixes). Despite `reg_needs_rex` is not being in
direct dealing with *actual* register extension prefixes, the function
determines the requirement of a REX prefix based off the supplied register and
returning a boolean value for the requirement of the REX prefix.

> [!TIP]
> Register extension prefixes (REX) can be manipulated using the dedicated REX
> module, and associated functions. `reg_needs_rex` is only an indicative value
> and does not take into account of the specifics such as the type of REX
> prefix, check `rex_t` and associated headers for specifics.

### Synopsis

```c
#include <register.h>
bool reg_needs_rex(enum registers input);
```

### Argument specifications

- `input` - The input register in question to be checked of REX requirement

### Error handling

`reg_needs_rex` only filters for a select list of registers that requires the
register extension value. This means, the function's return value would always
default to `false`, even if the register enum is non existent, or invalid.
However, invalid data is not checked against, and cannot be indicated back.

### See also

- [`enum registers`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/register/registers.md)
- [Jas' REX module](https://github.com/cheng-alvin/jas-doc/tree/main/modules/rex)
