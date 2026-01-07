## `op_modrm_modes`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

An enum reflecting Intel's various mode selectors for the ModR/M byte. Due to
the `rm` field of the ModR/M byte being variable in type; the mode of the ModR/M
indicates to the CPU/decoder on how to interpret the 3 lower bits of the ModR/M
byte as well as if any displacement values are included in the encoding of this
instruction. Always consult the official Intel documentation for more
information.

> [!NOTE]
> All values of this enum type is **not** padded with extra bits in adherence
> with the 2, 3, 3 structure of the ModR/M byte itself! Please consult the below
> implementation notes for more information regarding usage of the enum.

### Synopsis

```c
#include <operand.h>

enum op_modrm_modes {
  OP_MODRM_MODE_INDIRECT = 0,
  OP_MODRM_MODE_DISP8 = 1,
  OP_MODRM_MODE_DISP32 = 2,
  OP_MODRM_MODE_REG = 3,
};
```

### Implementation notes

Where it is required to append a ModR/M mode *directly* to a byte value,
`op_modrm_modes` should not be directly assigned to the value, but rather should
be upwards bitwise shifted 6 places to ensure alignment with the ModR/M
structure. However, when `op_modrm_modes` is used with the `op_modrm_t` type,
the `mod` value may be directly assigned to a member of `op_modrm_modes`.

### See also

- [`op_modrm_t`](/reference/operand/op_modrm_t.md)
- [ModR/M Byte - Wikipedia](https://en.wikipedia.org/wiki/ModR/M)
