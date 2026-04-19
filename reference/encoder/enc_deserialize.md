## `enc_deserialize`

Function for the conversion of a single serialized-instruction structure in the
form of a `enc_serialized_instr_t` struct onto a continuous encoded buffer.

The process of converting an intermediate `enc_serialized_instr_t` struct is
considered _deserialization_. The process opposes _serialization_ that encodes a
raw instruction generic input into a serialized struct. See
`enc_serialized_instr_t` for more details.

> [!NOTE]
> `enc_deserialize` should only be used as the _final_ step of assembly. Any
> processing of encoded instructions such as label evaluation and symbol table
> generation should always interact with the serialized instruction.

### Synopsis

```c
#include <encoder.h>
buffer_t enc_deserialize(enc_serialized_instr_t *in, buffer_t buf);
```

### Argument specifications

- `in` - The serialized instruction input in the `enc_serialized_instr_t` form.
- `buf` - Buffer in which the deserialized instructions should be appended to.

The caller may choose to _either_ append the deserialized instruction onto the
current `buffer_t` structure or have a new buffer be created, as dictated upon
whether a pre-existing `data` value in the buffer is set. `enc_deserialize` also
respects `capacity` if the user wishes to pre-allocate data.

> [!TIP]
> To improve encoding speeds, the buffer size can be preallocated through
> leveraging the `capacity` field. A total buffer size can be evaluated by
> obtaining a sum of every instruction's `encoded_size` value and allocating the
> nominated amount onto the buffer's heap memory.

Said method of deserialization reduces additional heap reallocations made
throughout a buffer's lifetime, allowing for a one-off allocation in lieu of
reallocation calls after each append.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`enc_serialized_instr`](/reference/encoder/enc_serialized_instr.md)
