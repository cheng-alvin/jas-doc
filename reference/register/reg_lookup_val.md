## `reg_lookup_val`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function wrapper for matching the enumerated `registers` value to an actual
encodable integer value through the usage of a lookup table, regardless of the
requirement of a register extension for the actual encoding of provided
register.

Due to limitations with C's ability to represent repeated values in enums (since
register extensions are used), directly appending the `registers` enum value to
the ModR/M or opcode value is **invalid**.

### Synopsis

```c
#include <register.h>
uint8_t reg_lookup_val(enum registers *input);
```

### Argument specifications

- `input` - A pointer to the enumerated register as represented by `registers`.

If `reg_lookup_val` returns a `0` value, when a value is **not** expected to
correspond to a register value, it is indicative of an unsuccessful lookup for
the register's encoded value. _Either_ due to an out-of-bounds index value or
providing a `REG_NULL` value. Specific information regarding the error can be
obtained via the nominated error handling callback function.

> [!NOTE]
> `input`'s requirement for a register extension prefix is not considered
> through this function. This function returns merely the _integer value_ to be
> set into `reg` of the `op_modrm_t` struct.

### Register value constants

The register module also provides macros out of the box for values of each
register as included by the `registers` enum and can be obtained by including
the `register.h` header. Macros for register values are prepended with the
`REG_VALUE_` prefix with the corresponding register name following.

### See also

- [`enum registers`](/reference/register/registers.md)
- [`rex_apply`](/reference/rex/rex_apply.md)
- [`err`](<>)
