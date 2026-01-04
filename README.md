![Jas logo](/logo.png)

Welcome to the documentation site for the Jas Assembler. Please note that no
source code is stored here in this repository, please visit the main repository
[here](https://github.com/cheng-alvin/jas) for the complete corresponding source
code that this documentation repository is based upon.

- [Buffer](/main/modules/buffer)
  - [`buf_concat`](/modules/buffer/buf_concat.md)
  - [`buf_element_exists`](/modules/buffer/buf_element_exists.md)
  - [`buf_remove`](/modules/buffer/buf_remove.md)
  - [`buf_write`](/modules/buffer/buf_write.md)
  - [`buf_write_byte`](/modules/buffer/buf_write_byte.md)
  - [`buffer_t`](/modules/buffer/buffer_t.md)
- [Directives](/main/modules/dir)
  - [`directive_t`](/modules/dir/directive_t.md)
- [Encoder](/main/modules/encoder)
  - [`enc_deserialize`](/modules/encoder/enc_deserialize.md)
  - [`enc_ident`](/modules/encoder/enc_ident.md)
  - [`enc_serialize`](/modules/encoder/enc_serialize.md)
  - [`enc_serialized_instr`](/modules/encoder/enc_serialized_instr.md)
- [Endian](/main/modules/endian)
  - [`endian`](/modules/endian/endian.md)
- [Mode](/main/modules/mode)
  - [`modes`](/modules/mode/modes.md)
- [Register](/main/modules/register)
  - [`reg_lookup_val`](/modules/register/reg_lookup_val.md)
  - [`reg_needs_rex`](/modules/register/reg_needs_rex.md)
  - [`registers`](/modules/register/registers.md)
- [REX](/main/modules/rex)
  - [`rex_t`](/modules/rex/rex_t.md)
  - [`rex_apply`](/modules/rex/rex_apply.md)
- [Parse](/main/modules/parse)
  - [`parse_instr_name`, `parse_str_num`, `parse_reg`](/modules/parse/parse.md)

### 📋 Using the documentation

The documentation is organized into directories, with each representing its own
distinctive modules. Within each module's directory, Markdown files document
details including function signatures, and relevant information. Data structures
and enumerated values are also documented where relevant in their respective
module directories.

Documentation is also provided within header files itself within the code's
`include/` directory. Such documentation comments can be viewed as a *"quick
reference"* and specifically aids in integration of documentation with IDE or
code editors, however, more details would always be provided in this repository.

### 📖 Obtaining documentation

Since the entirety of the Jas documentation is written and actively maintained
Markdown, The documentation can be viewed through the default Github file
explorer, or any other supported applications. The documentation files may be
obtained locally by pulling the current repository through:

```sh
git clone https://github.com/cheng-alvin/jas-doc/
```

### 📝 Licensing

All the code (including all documentation files) provided under the Jas
assembler project licensed under the MIT license which is a popular open-source
license for projects like this! To obtain further details about the licensing
requirements on all code in the Jas project, please see the main Jas source
repository's [LICENSE](/LICENSE) file.

*No warranty of any kind is provided, please double check official sources
before deploying code to production*

______________________________________________________________________

*Made with love by Alvin / the Jas crew and contributors ❤️ .*
