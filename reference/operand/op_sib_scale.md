## `op_sib_scale`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

_With regards to `op_sib_scale`, it is highly recommended to see
[`op_modrm_modes`](/reference/operand/op_modrm_modes.md)_

Enum for the representation of the `scale` component of a SIB byte (typically
expressed as an `op_sib` struct) in accordance to constant values published by
the Intel Developer's Manual.

### Usage

As the total size of the `scale` component of the SIB byte is constrained to
only 2 bits wide, the scale number is indicated with values ranging from 0 to 3
inclusive, and can be casted into integers.

The size enum value is typically represented as a _bit field_ of the `op_sib`
byte so it can be casted directly in a similar fashion to the `op_modrm_t`
struct; as well as the in the `op_mem` structure. View the respective
documentation files for more information.

### See also

- [`operand_t`](/reference/operand/operand_t.md)
- [`op_sib`](/reference/operand/op_sib_t.md)
- [SIB Byte - Wikipedia](https://en.wikipedia.org/wiki/ModR/M#SIB_byte)
