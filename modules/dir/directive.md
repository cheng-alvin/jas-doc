## `directive_t`

Struct for the representation of directive inputs of the Jas assembler, which
includes non-instruction inputs such as label definitions and manual writes
using the `buffer_t` structure. Such data inputs are factored into the assembly
process but are to be processed separate from typical instructions.

\[Add reference to `instr_generic_t`, and `label_t`\]

### Synopsis

```c
typedef struct directive {
  enum directives dir;

  union {
    label_t label;
    buffer_t data;
  };
} directive_t;
```

### Argument specifications

- `dir` - Specifies the type of directive, said value is used as a label to
  indicate which property is active within the union.

The structure then organizes the payload of the directive in a union, with the
effective data portion described by teh `dir` argument of the structure. See
below or the specifics relating directive types

- `label` - Indicated by the `DIR_DEFINE_LABEL` value, this directive values
  supplies the assembler with a marker of the sequential order and name of the
  label, allowing for later references and offset evaluation in the encoder
  process.

- `data`- A custom buffer in the form of `buffer_t`, allowing for the addition
  of custom data, or to facilitate padding etc. See
  [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
  for more information.

### Directive types

Directive types describe the type of data stored within the struct and
influences the processing done on the input directive. Similar to instructions,
directive types are updated and additions as well as modifications may exists
periodically. The directives currently supported by the Jas assembler appear
below:

- `DIR_DEFINE_BYTES` - Similar to the `db` directive as seen in nasm, this
  directive allows the user to insert an array of bytes in the `buffer_t`
  format. Insertions made this way allows such data to be factored into internal
  calculations such as label offset evaluation and inclusion to section data
  generation in object files.

- `DIR_DEFINE_LABEL` - This directive defines and registers a label to the
  assembler and allows labels to be factored for external linkage and internal
  references of the ELF object.

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
