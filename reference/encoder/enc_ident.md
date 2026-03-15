## `enc_ident`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum value representing a range of specialized encoder processing options
applied to to the `operand_descriptors` member of the instruction encoder table
entry. The associated encoder identity specifies how an operand should be
encoded and translated into machine code.

_It is highly recommended to see the [`instr_encoder_table`](<>) documentation
file._

### Available options

<!-- @mdformat pause -->

| Value                | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `(enum enc_ident) x` | Depiction of Intel opcode extension values (See below)               |
| `ENC_NULL`           | Empty identity, representing an absent value.                        |
| `ENC_RM`             | Assigns memory reference operand to `rm` field of the ModR/M byte.   |
| `ENC_IGNORE`         | Ignores current operand by skipping encoding steps for this operand. |
| `ENC_DEFAULT`        | Encoder uses default encoding steps as assumed.                      |
| `ENC_OPCODE_APPEND`  | Raw operand value is appended through addition to the opcode.        |

<!-- @mdformat resume -->

The leading 7 enum value are to be reserved for the representation of the opcode
extension value associated with a register if only one register is provided. The
value should be casted into the following integer form such as
`(enum enc_ident) x` as _no_ enum names are provided.

> [!NOTE]
> All other encoder identities are manually set to grow from a raw value of 8.
> As compiler implementations may vary, some compilers _may not respect
> sequential organization of enums_. Thus, callers should address enums beyond 7
> by their respective aliases to ensure portability.

### See also

- [`instr_encoder_table`](<>)
- [`op_modrm_t`](<>)
