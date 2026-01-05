## `reg_lookup_val`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function wrapper for matching the enumerated `registers` value to an actual
encodable integer value through the usage of a lookup table, regardless of the
requirement of a register extension for the actual encoding of provided
register. Due to limitations with C's ability to represent repeated values in
enums (since register extensions are used), directly appending the `registers`
enum value to the ModR/M or opcode value is invalid and *may not always
guarantee* an accurate encoding.

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
> memory that may be considered out-of-bounds for the lookup table. *No* error
> checking is done by `reg_lookup_val` to check for `input`'s validity. The
> caller is responsible for checking data, especially where user input is
> required.

### Register value constants

The register module also provides macros out of the box for values of each
register as included by the `registers` enum and can be obtained by including
the `register.h` header. Constants for register values are prepended with the
`REG_VALUE_` prefix with the corresponding register name following.

For example, the value of the `rax` register corresponds to the `REG_VALUE_RAX`
constant.

### See also

- [`enum registers`](register/registers.md)
