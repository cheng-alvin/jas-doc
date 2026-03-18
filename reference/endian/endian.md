## `endian`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for facilitating the conversion between opposite endian formats. Due to
Intel's extensive usage of encoding bytes in _little endian_. The `endian`
function converts input bytes expressed in the typical big endian to encoded
data represented in little endian, in adherence to Intel's conventions.

### Synopsis

```c
#include <endian.h>
uint8_t *endian(uint8_t *data, size_t data_size);
```

### Argument specifications

- `data` - An array of _assumed_ **pre-allocated** `uint8_t` array.
- `data_size` - The total size of the array requiring endian conversion.

### Error handling

Validation of size is not conducted in `endian`, the `data` argument is assumed
to be an accessible memory address containing the pre-stated array. **NO** error
checking or validation is provided by `endian` to check the validity of the
parameters.

However, where the `data_size` specification is accurate, a static array
allocation can also be used in spite of an perceived inherent requirement for a
heap allocation associated with `uint8_t *`.

> [!TIP]
> Where it is required to convert a `buffer_t`'s endian-ness, the buffer's
> properties can be passed in directly. The `data` and `data_size` argument can
> be assigned as the `buffer_t`'s `data` and `len` properties, respectively. The
> final return value can also be \_re-assigned back to `data`.

### Why not just use the standard `endian.h`, or `OSByteOrder.h`?

Despite pre-existing solutions supporting the conversion of endianness built-in
with the operating system standard, Jas still continues to offer solutions for
the endian conversion due to limitations of operating system implemented tools.

For instance, standard endian conversion macros typically have a limit of 8
bytes across the board and is unable to natively use internal structures such as
`buffer_t`s.

### Implementation details

`endian` is pragmatically conditioned to only be applicable where the assembler
source code has been compiled on machine using little endian. This behavior is
achieved through the conditional compilation based off the built in
`__LITTLE_ENDIAN__` flag which some compilers **does not** support. Please
ensure that this feature is supported during the build process.

### See also

- [`buffer_t`](/reference/buffer/buffer_t.md)
- [Endianness - Wikipedia](https://en.wikipedia.org/wiki/Endianness)
