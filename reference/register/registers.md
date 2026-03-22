## `registers`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum representing the registers of the Intel x86 instruction set, including all
general purpose registers of varying sizes, ranging from 8, 16, 32, to 64 bit
data widths.

### Special values

The `REG_NULL` value has been manually set to `0`, and is used in functions
reflective of an error with the return of a register, or as a placeholder value
when no other value is present.

> [!NOTE]
> Values of `registers` is not reflective of the _actual_ encoded values as seen
> in the ModR/M, SIB and opcode appended values. Rather, actual register values
> used in encoding should be obtained via the lookup table function of
> `reg_lookup_val` instead.

However, this enum is exclusive of special-use registers in the Intel
instruction set extensions such as AVX. Special registers associated with vector
instructions such as 128 bit wide `xmm` or `ymm` registers are **not** included
as part of the `registers` enum.

### Register helper macros

The `registers` enum can be passed into the `op_acc` macro to determine whether
the register is considered an accumulator register; that is, if the register is
considered `ax`, `eax` or `rax` etc.

> [!WARNING]
> Size checkers associated with the operand module may be unable to test for the
> size of `registers` enum values. Functions such as the `op_sizeof` function
> and size macros such as `op_byte`, `op_dword` also purely _operated based off
> `operands` enums_

### See also

- [`reg_lookup_val`](/reference/register/reg_lookup_val.md)
