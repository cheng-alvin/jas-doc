## `modes`

Enum representing the Intel machine operating modes and is typically used within
the Jas assembler as an argument indicative of the mode such code should be
compiled into. Due to encoder differences and instruction set variations across
operating modes, the usage of such enum allows the Jas assembler to provide
error reporting functionality by detecting invalid modes of encoding, and
provide mode-specific optimization settings.

### Synopsis

```c
#include <mode.h>
enum modes { MODE_REAL, MODE_PROTECTED, MODE_LONG };
```

The `modes` enum offers 3 values, reflecting the three Intel specified operating
modes, which includes the real, protected, and long modes. Specifics regarding
the Intel architecture, which includes its operating modes are not handled by
the assembler, but rather should be obtained from Intel published/endorsed
resources (Some resources from Wikipedia are linked below).

### See also

- [Real Mode - Wikipedia](https://en.wikipedia.org/wiki/Real_mode)
- [Protected Mode - Wikipedia](https://en.wikipedia.org/wiki/Protected_mode)
- [Long Mode - Wikipedia](https://en.wikipedia.org/wiki/Long_mode)
