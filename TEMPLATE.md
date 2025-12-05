> This is a template for documentation files for functions, such conventions for writing documentation should be maintained throughout the documentation repository, for the entire codebase.

## `function`

Provide a simple explaination on the function's use and functionality

### Synopsis
```c
#include <header.h>
void function(int arg1);
```

### Argument specifications 
`arg1` - Provide a simple description of the argument and expected inputs

### Error handling
Provide a description of how errors are handled

### Example
```c
#include <header.h>

int main(void) {
  int my_integer = 25;
  function(my_integer);

  return 0;
}
```

### See also
- Provide a list of additonal sources or resources (either internally or externally) that may be of use to the documentation reader
