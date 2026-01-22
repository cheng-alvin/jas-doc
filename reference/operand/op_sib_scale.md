## `op_sib_scale`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enumerated value used for the representation of the 'scale' component of a SIB
byte. Rather than having random values representing the scales, the enumeration
attaches the an alias to the corresponding value, allowing the tagged value to
be directly casted into a raw value for direct encoding.

### Synopsis

```c
#include <operand.h>
enum op_sib_scale;
```

> [!NOTE]
> There are varying explanations and standards regarding the actual effective
> size of any enum value in C. When casting to any encoder-sensitive byte,
> including the SIB byte, only the trailing 2 bits of the enum should be
> effective to ensure no memory overlap occurs when casted.

In simple terms, the scale in the SIB byte defines the factor the index register
should be multiplied to when referencing an effective address. It should be
noted that the this enum also represents input values in a similar fashion when
provided as input through the `operand_t` structure, rather than having a
separate enum.

### See also

- [`operand_t`](/reference/operand/operand_t.md)
- [`op_sib`](/reference/operand/op_sib_t.md)
- [SIB Byte - Wikipedia](https://en.wikipedia.org/wiki/ModR/M#SIB_byte)
