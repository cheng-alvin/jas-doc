## `enc_serialized_instr`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

A structure used as a representation of the intermediate step between an
`instr_generic_t` and a plain encoded buffer. This structure separates the
distinct parts of the instruction into identifiable parts to support amendments
in later stages of assembly.

> [!TIP]
> Lower level modifications to an instruction's core structure such the addition
> of a memory/label offset should be appended in this form.

### Argument specifications

Arguments in the instruction serialized structure can be categorized into:
_prefix_, _opcode_, _memory definition_ and _immediate/displacement values_
along with its corresponding metadata associated with a primary property as
listed above.

#### Prefix

- `prefixes` - A buffer of a variable size that contains the prefixes applicable
  for the instruction.
- `rex` - Contains and single byte representing the REX prefix byte.

> [!NOTE]
> The `rex` prefix member should be set to `REX_DEFAULT` by default to indicate
> a lack of REX prefix. Jas uses the condition to determine whether a REX prefix
> byte should be appended into the final encoder result.

#### Opcode

This is the only **mandated member** of the structure. The opcode should be
directly carried over from the matched opcode from the instruction encoder
reference table with equal operands.

- `opcode` - An array consisting of a maximum of 3 bytes representing the
  opcode.
- `opcode_size` - The corresponding size definition variable of the `opcode`
  member.

#### Memory definition

- `modrm` - The definition of the ModR/M byte in the `op_modrm_t` form.
- `sib` - SIB byte value where required, can be simply left as blank if not
  applicable.

<!-- Line Break -->

- `has_modrm` & `has_sib`- A set of booleans depicting whether respective
  entries exist.

If either values are not applicable, they may simply be padded with `0`s by
casting an integer to the struct's value like so: `(enc_serialized_instr_t){0}`.
Additionally, the respective `has_modrm` and/or `has_sib` indicative values are
to be set to `false` to prevent placeholder values to be read.

#### Immediate/displacement values

- `imm` - Representation of the immediate value effective of the instruction.

- `disp` - The following displacement value of the instruction.

> [!NOTE]
> Any offset in dealing with the location of a label or external symbol is to be
> written in the `disp` and `disp_size` variables. Rather, the `imm` is not to
> be filled with a constant value for an offset.

Setting `disp_size` and `imm_size` as a value of `0` is indicative for the
existence of immediate or displacement values, respectively. Sizes are also
typically in fixes increments of _1, 2, 4 and 8_ bytes long in x86/x64; however
this isn't usually checked in the serialization process.

- `disp_size` & `imm_size` - The size of the displacement and immediate values.

> [!WARNING]
> The values of the `imm` and `disp` are to be represented in **big endian**.
> This includes _both_ little and big endian processors. Misleading declarations
> may result in an invalid value when converted to the other endian as it is
> assumed to be defined as _big endian_.

### Why `enc_serialized_instr`?

The implementation and application of the `enc_serialized_instr` is an
intentional design choice that intends to simplify assembly process in the Jas
assembler.

For instance, due to the independence of the `encoder` and `exe` modules,
passing instruction in the _serialized_ form allows the function to access its
intended portion of the instruction, in lieu for the partial dis-assembly of
instructions to obtain or modify select portions of the instruction encoding.

### Instruction serialization

Instruction represented in this form is considered _serialized_. The process of
converting a generic instruction input input said form is considered
_serialization_, which is not to be confused with the term of _encoding_, which
is not involved in the process.

Instead, _encoding_ is the conversion of serialized structures into a flat
buffer array for being emitted into pure object code. The conversion into an
array of bytes is considered _deserialization_.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`instr_generic_t`](<>)
- [`rex_t`](<>)
- [`op_modrm`](<>)
- [`op_sib`](<>)
