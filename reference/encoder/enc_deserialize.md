## `enc_deserialize`

Function for the conversion of a single serialized-instruction structure in the
form of a `enc_serialized_instr_t` struct onto a continuous encoded buffer.

The process of converting an intermediate `enc_serialized_instr_t` struct is
considered _deserialization_. The process opposes _serialization_ that encodes a
raw instruction generic input into a serialized struct. See
`enc_serialized_instr_t` for more details.

> [!TIP]
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
current `buffer_t` structure; _or_ deserialize the instruction onto a fresh
buffer through passing the `BUF_NULL` constant as `buf`. The newly instantiated
or reallocated `buffer_t` will be **returned**.

> [!NOTE]
> Contrary to the `buffer_t` functions which modifies buffer objects in place,
> `enc_deserialize` provides the updated buffer as a **return value**. A return
> value of `BUF_NULL` indicates an error during deserialization, monitor the
> `err` function callback for diagnostic information.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`enc_serialized_instr`](/reference/encoder/enc_serialized_instr.md)
