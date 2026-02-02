## `reg_lookup_val`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function wrapper for matching the enumerated `registers` value to an actual
encodable integer value through the usage of a lookup table, regardless of the
requirement of a register extension for the actual encoding of provided
register.

Due to limitations with C's ability to represent repeated values in enums (since
register extensions are used), directly appending the `registers` enum value to
the ModR/M or opcode value is invalid.

### Synopsis

```c
#include <register.h>
uint8_t reg_lookup_val(enum registers *input);
```

### Argument specifications

- `input` - A pointer to the enumerated register value.

> [!NOTE]
> `input` is assumed to be a valid enumerated value as part of the `registers`
> type. An out of range enum value may lead to undefined behavior as it accesses
> memory that may be considered out-of-bounds for the lookup table.

### Error handling

Despite having enum and value and pairs of the supported registers, ultimately
in C, enums are still stored as integer values. Therefore, the possibility of
overflow via the lookup table still remains a risk if an integer value larger
than the supported range is provided.

If `reg_lookup_val` returns a `0` value that is **not** corresponding to a
register value, it is indicative of an unsuccessful lookup for the register's
encoded value; _either_ due to an out-of-bounds index value or providing a
`REG_NULL` value. Specific information regarding the error can be obtained via
the nominated error handling callback function.

### Register value constants

The register module also provides macros out of the box for values of each
register as included by the `registers` enum and can be obtained by including
the `register.h` header. Constants for register values are prepended with the
`REG_VALUE_` prefix with the corresponding register name following.

### See also

- [`enum registers`](/reference/register/registers.md)
- [`err`](<>)
