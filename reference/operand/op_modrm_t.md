## `op_modrm_t`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Structure for representing the Intel ModR/M byte with its associated members.
`op_modrm_t` is commonly used in the final encoding process, as opposed for
intermediate representation of a memory reference during compilation or input as
it lacks significant details.

_Operand inputs and processing should use the `operand_t` type_

> [!TIP]
> As `op_modrm_t` is marked as `packed` within the `clang` compilation system,
> it allows the encoder's exact value to be represented and can be directly
> casted over into a `uint8_t` for writing into a `buffer_t`.

### Synopsis

```c
#include <operand.h>

typedef struct __attribute__((packed)) op_modrm {
  enum op_modrm_modes mod : 2;

  uint8_t reg : 3;
  uint8_t rm : 3;
} op_modrm_t;
```

### Argument specifications

- `mod` - Specifies the mode field of the ModR/M byte, modifying the content of
  the `rm` field of the ModR/M byte as the `reg` field would always remain as an
  register or opcode extension.

<!-- New Line -->

- `reg` & `rm` - Encoded register value for the memory/register respectively

The `reg` and `rm` values are to be set as _integers_ from 0-7 inclusive. The
`reg_lookup_val` function is to be utilized in the evaluation of said values. Or
alternatively, a nominated operand extension can be used in accordance to the
defined encoder's reference table.

> [!NOTE]
> Operations with registers should _always_ be done with the `registers` enum.
> The raw value representation of registers should only be used as the final
> step of encoding.

### Common pitfalls

Despite the `reg` and `rm` values being represented as `uint8_t`s, the actual
data size is _still a bit field consisting of 3 bits_, in adherence to the Intel
ModR/M byte's structure. Attempts to directly assign a `registers` enum is
unsupported and may result in overflow into the following members as an
enumerated value is typically 1 byte wide.

It is also **strongly recommended** that the `clang` or `gcc` compilers are used
for compilation of said code as unverified compilers may be unable to support
the compilation of the structure in a packed manner, which may lead to undefined
or unintended behavior

### See also

- [`reg_lookup_val`](/reference/register/reg_lookup_val.md)
- [`registers`](/reference//register/registers.md)
- [ModR/M Byte - Wikipedia](https://en.wikipedia.org/wiki/ModR/M)
