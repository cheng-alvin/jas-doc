![Jas logo](/logo.png)

Welcome to the documentation site for the Jas Assembler. Please note that no
source code is stored here in this repository, please visit the main repository
[here](https://github.com/cheng-alvin/jas) for the complete corresponding source
code that this documentation repository is based upon.

> [!NOTE]
> The Jas assembler documentation should _not_ be treated as a guide in writing,
> or reading x86 assembly code, or C. For details regarding the specifics of the
> Intel architecture, please consult actual Intel endorsed or published sources
> such as the [Intel Software Developers' Manual](https://shorturl.at/NaWVY)
> published on the Intel developer website.

### 📋 Using the documentation

The documentation is organized into directories, with each representing its own
distinctive modules. Within each module's directory, Markdown files document
details including function signatures, and relevant information. Data structures
and enumerated values are also documented where relevant in their respective
module directories.

Documentation is also provided within header files itself within the code's
`include/` directory. Such documentation comments can be viewed as a _"quick
reference"_ and specifically aids in integration of documentation with IDE or
code editors, however, more details would always be provided in this repository.

### 📖 Obtaining documentation

Since the entirety of the Jas documentation is written and actively maintained
Markdown, the documentation files may be obtained locally and viewed in your
text editor/viewer of choice by pulling the Git source tree:

```sh
git clone https://github.com/cheng-alvin/jas-doc/
```

The Jas documentation files are also hosted with mkdocs and can be served
locally. After obtaining documentation files via Git, run the `make` command:

You can pass in path for where to build the `mkdocs.yml` file to by setting
`CONFIG_PATH`

```
make CONFIG_PATH=".."
```

This will build the `mkdocs.yml` configuration files to the parent directory by
default _unless overridden_ by `CONFIG_PATH`. Due mkdocs' inherent limitations
and design choices, the hosting of the statically generated documentation
outputs can _only_ be done outside of the documentation directory itself.

### 📝 Licensing

All the code (including all documentation files) provided under the Jas
assembler project licensed under the MIT license which is a popular open-source
license for projects like this! To obtain further details about the licensing
requirements on all code in the Jas project, please see the main Jas source
repository's [LICENSE](/LICENSE) file.

_No warranty of any kind is provided, please double check official sources
before deploying code to production_

______________________________________________________________________

_Made with love by Alvin / the Jas crew and contributors ❤️ ._
