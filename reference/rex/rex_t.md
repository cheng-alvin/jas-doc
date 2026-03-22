## `rex_t`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Type alias for a `uint8_t` type, representing the REX prefix byte of the Intel
instruction encoding set, guaranteeing 1 byte reserved for each REX value.
Associated module functions such as `rex_apply` assists in the modification of
register extensions, callers may also choose to manually attach REX values.

Despite having the same exact usage of any other byte-wide type, the `rex_t`
type allows special REX bytes to be differentiated against typical integer
values.

> [!NOTE]
> When using `rex_t`, it is _strongly discouraged_ to use `0` as a placeholder
> value as it is not valid in the context of REX prefix bytes. Hence, empty
> `rex_t`s should set `REX_DEFAULT`.

### REX prefix macro values

The provided helper macros of register extension prefixes can be bitwise _OR_-ed
together to combine a range of register extension prefix values to a `rex_t`
type. Usage of provided macros prevents the usage of "_magic numbers_" in code,
improving overall code readability.

Each REX property is labeled with the trailing letter-bound suffix. For
instance, the `REX_W` macro represents the REX.W prefix, corresponding to a raw
value of `0x48`.

### See also

- [Intel REX prefixes](https://en.wikipedia.org/wiki/REX_prefix)
- [`rex_apply`](/reference/rex/rex_apply.md)
