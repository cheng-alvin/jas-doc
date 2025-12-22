## `enc_ident`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum value representing a range of available advanced specialized encoder
processing options. These options should be applied to to the
`operand_descriptors` member of the instruction encoder table entry for each
instruction.

\[Add reference to `instr_encoder_table`\]

### Available options

Below is an exhaustive list of the available encoder options available to be
used with the instruction encoder reference table.

<!-- @mdformat pause -->

| Value | Description |
| ------ | ------------ |
| 0 - 7 | Uses raw values without attached enumerated values (See below) |
| `ENC_NULL` | Empty identity, representing an absent value |
| `ENC_RM` | Assigns memory operand to `rm` field of the ModR/M byte. |
| `ENC_IGNORE` | Ignores current operand by excluding from encoder. |
| `ENC_DEFAULT` | Encoder uses default encoding steps, without modifications. |
| `ENC_OPCODE_APPEND` | Raw operand value is appended to the opcode. |

<!-- @mdformat resume -->

It should be noted that the `ENC_NULL` value has been manually set to pad the
values from 0-7 values towards the usage for the representation of opcode
extensions with integer values in the `reg` field of the ModR/M byte. Where
applicable, the opcode extension value should be

### See also

- [`instr_encoder_table`](<>)
- [`op_modrm_t`](<>)
