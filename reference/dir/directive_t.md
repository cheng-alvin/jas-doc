## `directive_t`

Struct for the representation of directive inputs of the Jas assembler.
Directives include the non-instruction inputs such as label definitions as well
as manual writes to program output among other assembler directives.

Specifically, inputs that are not associated with a corresponding Intel-endorsed
instruction mnemonic, and subsequently is not defined in the `instructions` enum
are considered as _directives_.

> [!NOTE]
> The `instruction_t` _and_ `directive_t` structs are packaged into the general
> `instr_generic_t` structures depending on the usage type associated with the
> generic. This documentation page contains information regarding the latter
> input type, namely the directives.

### Argument specifications

- `dir` - Type of directive this directive is considered to be a part of.

The above argument is required for all instances as it outlines the target value of the union. Due to the
variance between data-types of the varying directives, `directive_t` splits
values into groups associated with respective `dir` values as defined below.

### `DIR_DEFINE_BYTES`

Similar to the `db` directive as seen in NASM.

The `DIR_DEFINE_BYTES` directive allows the user/caller to insert a custom array of bytes in
the `buffer_t` format. By including the bytes in the assembler code as a
_directive_, it enables the label or executable generators to factor extra bytes
into size/offset calculations such as linking.

- `data`- A buffer with custom data in the form of a `buffer_t`.

### `DIR_DEFINE_LABEL`

This directive defines and registers a label to the ELF emitter for the
generation of a symbol table entry, thus allowing for external linkage as well
as internal usage in provided code.

- `label` - Directive values supplies the assembler with a marker of the
  sequential order and name of the label, allowing for later references and
  offset evaluation in the encoder process.

> [!NOTE]
> Please note that the enum values are associated with the `directives` enum.
> There is _no_ separate documentation page for said function as all values are
> already listed above.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [`instructions_t`]()
- [`instr_generic_t`]()
