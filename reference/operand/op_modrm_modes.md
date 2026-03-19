## `op_modrm_modes`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

`op_modrm_modes` is an enum that reflects the available modes associated with
the ModR/M byte.

Due to the `rm` field of the ModR/M byte being able to depict _either_ a
register value or memory assignment among other data types; The mode field of
the ModR/M byte indicates to the machine on how to interpret the 3 lower bits of
the ModR/M byte.

### Usage

The `op_modrm_modes` enum is most commonly depicted in Jas as part of the `mod`
member of the `op_modrm_t` structure that represents the standard Intel ModR/M
memory reference byte. The mode of the ModR/M byte is typically deduced
automatically by an associated helper function implemented as part of the
library, namely, the `op_modrm_mode` function.

> [!TIP]
> As each enum is assigned to as the _raw_ value of the ModR/M byte's mode
> selector, the raw value of the actual ModR/M mode may be obtained through
> casting the enum value directly over to an integer type.

As mentioned in the `op_modrm_t` documentation file, the `mod` member is packed
without padding as it allows the byte to be casted into a single byte output.

### See also

- [`op_modrm_mode`](/reference/operand/op_modrm_mode/)
- [`op_modrm_t`](/reference/operand/op_modrm_t.md)
- [ModR/M Byte - Wikipedia](https://en.wikipedia.org/wiki/ModR/M)
