## `enc_serialize`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function facilitating the serialization of generic instruction inputs into an
intermediate encoder representation in the form of the `enc_serialized_instr`
structure. The representations of the instructions in the serialized form
retains human readable/processable structure while adding near-machine code
details such as opcodes and size calculations.

### Synopsis

```c
#include <encoder.h>
struct enc_serialized_instr *enc_serialize(instr_generic_t *instr, enum modes mode);
```

### Argument specifications

- `instr` - Pointer to an instruction generic input value. Despite being able
  represent *both* instructions and directive inputs, this value should only
  utilize the `instr` component of the generic value.

- `mode` - The operating mode of the assembler module; allows mode-specific
  validations and error checking processes to be carried out during the encoder
  step. (See *Error handling* for more information)

### Error handling

Error checking conditions exists for the encoding of instructions. The
instruction encoder reference table provides reference information regarding the
validity of encoding identities across different modes and ultimately exerts
wether the instruction is valid. Error checking in the `enc_serialize` function
can be classified into the following categories:

<!-- @mdformat pause -->

> [!NOTE]
> Where a fatal error condition has been met, `enc_serialize` will immediately
> seize the current process, terminating with a `NULL` pointer value. If the
> instruction generic is provided with a `DIRECTIVE` type, or have a `NULL`'ed
> pointer provided, serialization will **not** occur and will immediately
> terminate.

<!-- @mdformat resume -->

- **Mismatch of modes** - Where the provided `mode` parameter fails match with
  either the `long_mode`, or `leg_mode` members in 64-bit long mode or 16-bit
  legacy mode. Specifics can be obtained on the `instr_encode_table_t` page.

- **Operand mismatch/invalidity** - After the instruction encoder reference
  table has been obtained, there may be inconsistencies between the input
  instruction, in particular with the operand size and types. This class of
  errors indicate an inconsistency between the expect operand type and size
  restrictions and the input values.

The `enc_serialize` function tool also utilizes the `err` module for error
reporting. Along with the return of a `NULL` pointer, an error message would
also typically be produced and reported to the predetermined callback method,
set by the caller.

### See also

- [`enc_serialized_instr`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/encoder/enc_serialised_instr.md)
- [`instr_generic_t`](<>)
- [`modes`](<>)
- [`err`](<>)
- [`instr_encode_table_t`](<>)
