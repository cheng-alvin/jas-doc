## `endian`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Function for facilitating the conversion between opposite endian formats. Due to
Intel's extensive usage of encoding bytes in *little endian*. The `endian`
function is primary used for conversion of input bytes expressed in big endian
to encoded data represented in little endian, in adherence to Intel x86's
encoder conventions.

<!-- @mdformat pause -->

> [!NOTE]
> `endian` is pragmatically conditioned to only be applicable where the
> assembler source code has been compiled on machine using little endian. This
> approach ensures correct values to be preserved when assembler functions are
> executed on big endian machines. This behavior is achieved through the
> conditional compilation based off the built in `__LITTLE_ENDIAN__` flag.

<!-- @mdformat resume -->

### Synopsis

```c
#include <endian.h>
uint8_t *endian(uint8_t *data, size_t data_size);
```

### Argument specifications

- `data` - An array of *assumed* **pre-allocated** `uint8_t` array.
- `data_size` - The total size of the array requiring endian conversion.

<!-- @mdformat pause -->

> [!TIP]
> Where it is required to convert a `buffer_t`'s endian-ness, the buffer's
> properties can be passed in directly. The `data` and `data_size` argument can
> be assigned as the `buffer_t`'s `data` and `len` properties, respectively. The
> final return value can also be *re-assigned back to the `data` member*

<!-- @mdformat resume -->

### Error handling

Validation of size is not conducted in `endian`, the `data` argument is assumed
to be an accessible memory address containing the pre-stated array. **NO** error
checking or validation is provided by `endian` to check the validity of the
parameters. However, where the `data_size` specification is accurate, a static
array allocation can also be used in spite of an perceived inherent requirement
for a heap allocation associated with `uint8_t *`

### See also

- [`buffer_t`](https://github.com/cheng-alvin/jas-doc/blob/main/modules/buffer/buffer.md)
- [Endianness - Wikipedia](https://en.wikipedia.org/wiki/Endianness)
