## `enc_deserialize`

Function for the conversion of a serialized structure in the form of a
`enc_serialized_instr_t` struct into a continuous encoded buffer. The process of
converting an intermediate `enc_serialized_instr_t` struct is considered
*deserialization*, which contradicts *serialization* that encodes a raw
instruction generic input into a serialized struct. See `enc_serialized_instr_t`
for more details.

<!-- @mdformat pause -->

> [!NOTE]
> `enc_deserialize` should only be used as the *final* step of assembly. Any
> processing of encoded instructions such as label evaluation and symbol table
> generation should always interact with the serialized instruction. Such
> approach provides guaranteed structure, supporting external amendments. It is
> also recommended that processing done by the caller also interact with
> `enc_serialized_instr_t` instead.

<!-- @mdformat resume -->

### Synopsis

```c
#include <encoder.h>
buffer_t enc_deserialize(enc_serialized_instr_t *in, buffer_t buf);
```

### Argument specifications

- `in` - The serialized instruction produced by a serialization function.

- `buf` - Base buffer the instruction should be appended onto. The usage of this
  argument reduced need for the constant concatenation individual buffer
  representation of deserialized instructions; instead, the provided in `in` can
  be deserialized directly onto the target buffer. The caller can opt-out of
  utilizing such behavior by passing `NULL` instead, which instantiates a fresh
  buffer.

The updated buffer pointer would be returned from `enc_deserialize`, or a new
buffer when `buf` is set to `NULL`. The return value can be modified through
functions of the buffer module.

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
- [`enc_serialized_instr`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/encoder/enc_serialised_instr.md)
