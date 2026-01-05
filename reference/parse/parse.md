> Due to the parse module's minimal size and limited functionality, this
> documentation file contains a combination of three functions:

## `parse_instr_name`, `parse_str_num`, `parse_reg`

> [!WARNING]
> The `parse_str_num` function is *experimental* and is only used for testing
> purposes and as a proof of concept. Any serious attempts at writing an
> assembler parser should not rely on the functions as listed below. This should
> only be used as an illustrative guide.

`parse_instr_name`, `parse_str_num`, `parse_reg` parses an input string into a
applicable type as used by Jas of the function and inputs' respective types.
Despite the fact that Jas is an assembler library, and does not support parsing
full instructions out of the box, the three parse functions allow parsing of
*only what is supported*, filtering out invalid or unsupported inputs. (More
details may be obtained below)

### Synopsis

```c
#include <parse.h>

uint64_t parse_str_num(char *input);
enum instructions parse_instr_name(char *input);
enum registers parse_reg(char *input);
```

### Argument specifications

- `input` - The input string in question for the expression to be identified
  from.

### Implementation note

The `parse_instr_name` judges the string and converts a string into a Jas
`instructions` enumerated value through an instruction name array as provided by
the instruction encoder reference table. The user/caller of the Jas library
itself can choose the instructions to be supported for encoding where required.

> [!TIP]
> The `parse_instr_name` can be used in conjunction with a project-specific
> custom parser to ensure only supported instructions are encoded for. Further
> details regarding the selective inclusion of instruction encoder tables to Jas
> may be obtained in the instruction module

### Error handling

Since the identification of enumerated values are variable and may not have a
definitive corresponding value due to errors in the string `input`; the
`parse_instr_name` and `parse_reg` will return the `INSTR_NULL` and `REG_NULL`
placeholder values for their respective types. The return of said values *does
indicate* an error.

Due to `parse_str_num`'s dependence on the standard library's `strtoull`
function, the value dictating a failure would default to `0` where an
operational error has occurred during the execution of `strtoull`. Error
handling outside of the explicit string conversion is not applicable. The caller
should handle errors originating from operating system calls accordingly using
`errno`, or as documented in official documentation of the applicable system.

### See also

- [`enum registers`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/register/registers.md)
- [`enum instructions`](<>)
- [The instruction module](<>)
