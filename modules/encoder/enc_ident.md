## `enc_ident`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum value representing a range of available advanced specialized encoder
processing options. These options should be applied to to the
`operand_descriptors` member of the instruction encoder table entry for each
instruction encoder reference table. But, `enc_ident` should not to be confused
for the modification of instruction encoding as a whole; encoder identities
apply changes on individual operands themselves and should only be used to
modify the encoding properties of single operands, **not entire instructions**!

### Available options

Below is list of the available encoder options available to be used with the
instruction encoder reference table with its corresponding functionality and
description. This list is by no mean exhaustive and additions and removals may
occur against listed encoder options, however, effort will be taken to ensure 
the accuracy of the list presented below:

<!-- @mdformat pause -->

| Value | Description |
| ------ | ------------ |
| `(enum enc_ident) x` | Depiction of Intel opcode extension values (See below) |
| `ENC_NULL` | Empty identity, representing an absent value. |
| `ENC_RM` | Assigns memory reference operand to `rm` field of the ModR/M byte. |
| `ENC_IGNORE` | Ignores current operand by skipping encoding steps for this operand. |
| `ENC_DEFAULT` | Encoder uses default encoding steps as assumed. |
| `ENC_OPCODE_APPEND` | Raw operand value is appended through addition to the opcode. |

> [!NOTE]
> It should be noted that the `ENC_NULL` value has been manually set to pad the
> values from 0-7 values towards the usage for the representation of opcode
> extensions with integer values in the `reg` field of the ModR/M byte.

<!-- @mdformat resume -->

These 7 values will be reserved, where applicable, the opcode extension value
should be casted and accessed from an integer such as `(enum enc_ident) x`
representing the opcode extension of `/x` (Where x depicts a positive integer
between 0 and 7 inclusive). All additional values will start from an integer
value of 8, however, incremental values from 8 onwards *cannot* be guaranteed on
some select compilers or implementations, addressing of encoder identities
should be done via **enum names** unless an opcode extension.

### See also

- [`instr_encoder_table`](<>)
- [`op_modrm_t`](<>)
