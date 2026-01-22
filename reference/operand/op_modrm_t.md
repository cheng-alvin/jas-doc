## `op_modrm_t`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Structure for representing the Intel ModR/M byte with its associated members.
`op_modrm_t` is commonly used in the final encoding process, as opposed for
intermediate representation of a memory reference. Rather, the `op_modrm_t` type
should only be used for guideline of an encoder output, not an input.

Typically, unless special modifications and where there is an operational need
for the application of the structure, this structure would mostly be reserved
for internal usage. For a higher level of representation of memory locations,
the `operand_t` type should be consulted for more information.

> [!TIP]
> As `op_modrm_t` is marked as `packed` within the `clang` compilation system,
> it allows the encoder's exact value to be represented and can be directly
> casted over into a `uint8_t` for writing into a buffer; hence, why this struct
> is unsuitable for representation of input values.

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

- `reg` & `rm` - Encoded register value content for the memory reference.

> [!NOTE]
> Operations with registers should _always_ be done with the `registers` enum.
> The raw value representation of registers should only be used as the final
> step of encoding as helper functions included in the registers library is
> unable to be applied towards numeric values. All numerically represented
> registers can be converted from the enumerated form using the `reg_lookup_val`
> function.

### Common pitfalls

Despite the `reg` and `rm` values being represented as `uint8_t`s, the actual
data size is still a bit field consisting of 3 bits, in adherence to the Intel
ModR/M byte's inherent structure. Attempts to directly assign a `registers` enum
is unsupported and may result in overflow into the following members as an
enumerated value is typically 1 byte wide.

It is also **strongly recommended** that the `clang` or `gcc` compilers are used
for compilation of said code as unverified compilers may be unable to support
the compilation of the structure in a packed manner, which may lead to undefined
or unintended behavior

### See also

- [`reg_lookup_val`](/reference/register/reg_lookup_val.md)
- [`registers`](/reference//register/registers.md)
- [ModR/M Byte - Wikipedia](https://en.wikipedia.org/wiki/ModR/M)
