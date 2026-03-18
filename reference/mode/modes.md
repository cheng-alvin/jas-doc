## `modes`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum representing the Intel machine operating modes. Due to encoder differences
and instruction set variations across operating modes, the usage of such enum
allows the Jas assembler to provide error reporting functionality by detecting
invalid modes of encoding among other functionalities.

> [!NOTE]
> It should be noted that the specifics regarding the Intel architecture, which
> includes its operating modes are not handled by the assembler, but rather
> should be obtained from Intel published or endorsed resources.

The `modes` enum offers 3 values, reflecting the three Intel specified operating
modes, which includes the real, protected, and long modes, for 16, 32 and 64
bits respectively.

Typically, the comments and documentation refer to the modes as: _real,
protected and long_.

### See also

- [Real Mode - Wikipedia](https://en.wikipedia.org/wiki/Real_mode)
- [Protected Mode - Wikipedia](https://en.wikipedia.org/wiki/Protected_mode)
- [Long Mode - Wikipedia](https://en.wikipedia.org/wiki/Long_mode)
