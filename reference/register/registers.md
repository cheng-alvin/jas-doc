## `registers`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum representing the registers of the Intel x86 instruction set, including all
general purpose registers of 8, 16, 32, and 64 bit data widths. However, this
enum is exclusive of niche, special-use registers in Intel instruction set
extensions such as AVX, hence, registers such as `xmm1` or `ymm2` is not
supported in this enum.

### Synopsis

```c
#include <register.h>
enum registers;
```

### Special values

The `REG_NULL` value has been manually set to `0`, and typically is used in
functions to manipulate register values indicative of an error or as a
placeholder value and *should not* be considered a register.

> [!NOTE]
> Values of `registers` is not correspondent to the *actual* encoded values as
> seen in the ModR/M, SIB and opcode appended values, rather actual register
> values used in encoding should be obtained via the lookup table function of
> `reg_lookup_val` instead.

### See also

- [`reg_lookup_val`](/reference/register/reg_lookup_val.md)
