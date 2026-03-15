## `enc_serialize`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function facilitating the serialization of generic instruction inputs into an
intermediate encoder representation as an `enc_serialized_instr` structure.
`enc_serialize` is the primary form of encoding and uses a corresponding
instruction encoder input to produce its instruction opcode, operand and
prefixes encoding.

_As the `enc_serialized_instr` structure is converted from a human readable
format, thus, it is recommended to view the `enc_serialized_instr` documentation
for more information._

### Synopsis

```c
#include <encoder.h>
struct enc_serialized_instr *enc_serialize(instr_generic_t *instr, enum modes mode);
```

### Argument specifications

- `instr` - Pointer to an instruction generic input value which is to be
  encoded.
- `mode` - The current mode the code is to be assembled in for error checking.

As the `instr_generic_t` type may be able to point to _either_ an instruction
_or_ directive value, `enc_serialize` checks whether the input is an
instruction. The function will return if passed as a directive.

### Error handling

Where a fatal error condition has been met, `enc_serialize` will return a `NULL`
pointer value. For additional diagnostic information, the caller should monitor
the `err` error callback channel. The following list shows common errors the
encoder may encounter due to invalid caller inputs:

- **Mismatch of modes** - Where the provided `mode` parameter fails match with
  either the `long_mode`, or `leg_mode` members in 64-bit long mode or 16-bit
  legacy mode.

<!-- Line break -->

- **Operand mismatch/invalidity** - After the instruction encoder reference
  table has been obtained, there may be inconsistencies between the input
  instruction. A fatal error may be flagged as the encoder is unable to encode
  the instruction if certain operand conditions aren't met.

### See also

- [`enc_serialized_instr`](/reference/encoder/enc_serialized_instr.md)
- [`instr_generic_t`](<>)
- [`modes`](/reference/mode/modes.md)
- [`err`](<>)
- [`instr_encode_table_t`](<>)
