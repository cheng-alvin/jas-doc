## `buffer_t`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Structure for representing the an automatically allocated data allocation with
corresponding length information. This struct can be modified through through
associated function throughout the `buffer` module, allowing for basic
operations such as writing, removal of concatenation of bytes.

> [!NOTE]
> The buffer module itself does **not** provide any memory de-allocation
> functionalities and is the responsibility of the **caller** to clean-up any
> memory leaks through the standard `free()` function.

### Argument specifications

- `data` - A dynamically allocated pointer bound array of byte-sized data.
- `len` - The number of bytes allocated towards the `data` array.
- `capacity` - The amount of pre-allocated data contributing to the buffer.

It is recommended to preset `data` as a `NULL` pointer when _no_ value is
assigned to said variable. Dynamic allocation functions such as `realloc`
automatically allocates a new pointer if `NULL`.

> [!TIP]
> The Jas library provides a built in placeholder macro for the definition of
> empty buffers. The `BUF_NULL` macro as defined in `buffer.h` can be used to
> statically define an empty `buffer_t` structure during initialization.

### Handling `buffer_t` structures

When interfacing with the `buffer_t` structure, the presence of preexisting data
in the `data` segment is to be determined through checking whether a non-zero
value is stored in `len`.

The `data` is to be handled as empty if `len` is assigned as `0`. That is, not
executing reads to the `data` array when no values are presumed to be present.
Thus, preventing unintended "read-after-free" errors if the allocations are not
set correctly.

### Reducing memory reallocations

If an anticipated data size can be deduced through another source of truth, the
`buffer_t` type may allow the caller to manually manage memory in an
allocation-efficient way. Rather than reallocating data after each write
instance, the caller may `capacity` as the anticipated data size _in advance_.

To prevent memory overflow runtime errors, a fallback case has been set in `buf_write` which automatically allocates an additional chunk where the `len` exceeds the predicted `capacity`.

> [!WARNING]
> If `capacity` is set to >0, the buffer is assumed to be managed manually _by
> the caller_. The buffer module functions **does not** oversee the
> allocation and reallocation of `data` in that case.

### See also

- [`buf_write`](/reference/buffer/buf_write.md)
- [`free` from `stdlib.h`](https://www.tutorialspoint.com/c_standard_library/c_function_free.htm)
