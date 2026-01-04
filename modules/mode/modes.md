## `modes`

**Author(s):** [Alvin Cheng](https://github.com/cheng-alvin/)

Enum representing the Intel machine operating modes, typically used as an
indicative parameter for compilation mode. Due to encoder differences and
instruction set variations across operating modes, the usage of such enum allows
the Jas assembler to provide error reporting functionality by detecting invalid
modes of encoding, and provide mode-specific optimization settings.

> [!NOTE]
> It should be noted that the specifics regarding the Intel architecture, which
> includes its operating modes are not handled by the assembler, but rather
> should be obtained from Intel published/endorsed resources (Some resources
> from Wikipedia are linked below). Rules regarding what instructions are
> supported in the below modes are also not to be handled by Jas.

### Synopsis

```c
#include <mode.h>
enum modes { MODE_REAL, MODE_PROTECTED, MODE_LONG };
```

The `modes` enum offers 3 values, reflecting the three Intel specified operating
modes, which includes the real, protected, and long modes, for 16, 32 and 64
bits respectively. Typically, documentation in Jas uses the terms real,
protected and long for the respective modes.

### See also

- [Real Mode - Wikipedia](https://en.wikipedia.org/wiki/Real_mode)
- [Protected Mode - Wikipedia](https://en.wikipedia.org/wiki/Protected_mode)
- [Long Mode - Wikipedia](https://en.wikipedia.org/wiki/Long_mode)
