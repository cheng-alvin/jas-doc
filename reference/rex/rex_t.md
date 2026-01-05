## `rex_t`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Byte type representing the REX prefix byte of the Intel instruction encoding
set. `rex_t` is used as a alias for `uint8_t`, guaranteeing 1 byte reserved for
each REX value along with its associated padding bits. The REX module provides
convenient helper macros and helper functions such as `rex_apply` that aids to
manipulate the `rex_t` byte, allowing for easy application or addition for REX
properties.

> [!NOTE]
> When using `rex_t`, it is *strongly discouraged* to use `0` as a placeholder
> value as it is not valid in the context of REX prefix bytes. Hence, empty
> `rex_t`s should set `REX_DEFAULT` to reduce false error handling or undefined
> behavior, as functions in dealing with REX prefixes frequently use
> `REX_DEFAULT` as a placeholder.

### Synopsis

```c
#include <rex.h>
typedef uint8_t rex_t;
```

The provided helper macros can be bitwise *OR*-ed together to concatenate
different properties with each other. Each REX property is labeled with the
trailing letter-bound suffix like so: `REX_W` representing REX.W and likewise.
All REX prefixes adhere to the Intel Software Developer Manual's guidelines,
reflecting Intel proposed prefixes.

### See also

- [Intel REX prefixes](https://en.wikipedia.org/wiki/REX_prefix)
- [`rex_apply`](rex/rex_apply.md)
