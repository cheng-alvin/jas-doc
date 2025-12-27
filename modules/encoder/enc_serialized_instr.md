## `enc_serialized_instr`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

A structure used as a representation of the intermittent step between an
`instr_generic_t` and a plain encoded buffer. This structure separates the
distinct parts of the instruction into identifiable parts to support amendments
with ease in later stages of assembly without the need for arbitrary disassembly
steps.

Instruction represented in this form is considered *serialized*. The process of
converting a generic instruction input input said form is considered
*serialization*, which is not to be confused with *encoding*, that is the
conversion of serialized structures into a flat buffer array with little meta
data. The terms *encoding* and *serialization* must **not** be used
interchangeably, but should rather be treated as two distinct terms!

### Argument specifications

Arguments in the instruction serialized structure can be categorized into:
*prefix*, *opcode*, *memory definition* and *immediate/displacement values*
along with its corresponding metadata describing its properties in detail (such
as size). It should be noted that bit fields are used in attempts to reduce the
size of the structure, to prevent the overflow of data from the data size,
callers should follow limitations as set by the argument specifications.

#### Prefix

- `prefixes` - A buffer of a variable size that contains the applicable prefixes
  for the encoded instruction, however, the prefixes member excludes the REX
  prefix, which should be suitably written in the `rex` field of the structure
  instead.

- `rex` - Contains and single byte REX prefix and can be modified accordingly
  using supplied helpers in the rex module.

<!-- @mdformat pause -->

> [!NOTE]
> The `rex` prefix member should be set to `REX_DEFAULT` by default to indicate
> a lack of REX prefix and uses said condition to determine whether the prefix
> should be appended into the final encoder result. Setting this value with
> `NULL`, or `0` as a placeholder is discouraged. However where applicable, the
> `ENC_SERIALIZED_NULL` placeholder macro should be used to represent an empty
> serialized instruction instead.

<!-- @mdformat resume -->

#### Opcode

- `opcode` - An array with an upper limit of 3 bytes, denoting the effective
  opcode of the instruction. This is the only mandated member of the structure.
  The opcode should be directly carried over matching the specified opcode of
  the instruction encoder reference table.

- `opcode_size` - The corresponding size definition of the `opcode` and defines
  the number of bytes effective within the member's data range. Due to the
  `opcode`'s limited range, this member must be a non-zero value with a maximum
  of 3 and can be casted as a `uint8_t` type, despite its effective bit field of
  3 bits long.

#### Memory definition

- `modrm` - The definition of the ModR/M byte in the `op_modrm_t` structure
  form.

- `sib` - SIB byte value supported by the ModR/M byte, despite having the SIB
  byte being activated by the ModR/M byte's R/M field in actual encoding, the
  serialized structure does not take such conditions into account, but rather
  relies on boolean values to determine its validity. Such approach allows for a
  higher degree of flexibility in the assembler and allows for the manual
  override of the inter dependence between the `modrm` and `sib` values.

- `has_modrm` & `has_sib`- A set of boolean values for determining wether the
  instruction uses the ModR/M byte and SIB bytes respectively. Controls if the
  instruction will encode the provided `modrm` and `sib` members as shown above
  into the final encoded buffer.

#### Immediate/displacement values

- `imm` - Representation of the immediate value effective of the instruction.

- `disp` - The following displacement value of the instruction. Where
  applicable, when using relative offsets such as section offsets, said values
  would be written in this member, rather than the `imm` (immediate value)

<!-- @mdformat pause -->

> [!NOTE]
> It is worth noting that despite being able to represent a variety of
> values, the x86 inherently only supports exclusively of the usage for data
> that's *1, 2, 4, or 8 bytes* long. However, a data size of 0 is never allowed
> in instruction encoding, but is rather used as an indicator for the *lack* of
> immediate/displacement values instead.

<!-- @mdformat resume -->

- `disp_size` & `imm_size` - The size of the displacement and immediate values
  ranging from 0 to 8 bytes, respectively. However, all x86 instruction have a
  limitation for a maximum of 4 bytes as both an offset and immediate values,
  with only select instructions in select instruction set extensions actually
  utilizing this full 8 byte limit. This should be written in **big endian**

### Why `enc_serialized_instr`?

The implementation and application of the `enc_serialized_instr` is an
intentional design choice that intends to simplify assembly process in the Jas
assembler. For instance, due to the independence of the `encoder` and `exe`
modules, passing instruction in the *serialized* form allows the function to
access its intended portion of the instruction, in lieu for the partial
dis-assembly of instructions to obtain or modify select portions of the
instruction encoding.

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
- [`instr_generic_t`](<>)
- [`rex_t`](<>)
- [`op_modrm`](<>)
- [`op_sib`](<>)
