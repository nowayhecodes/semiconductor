[![codecov](https://codecov.io/gh/nowayhecodes/semiconductor/branch/main/graph/badge.svg?token=TEMqv3Ery0)](https://codecov.io/gh/nowayhecodes/semiconductor)
![languages](https://img.shields.io/github/languages/count/nowayhecodes/semiconductor)
![top-language](https://img.shields.io/github/languages/top/nowayhecodes/semiconductor)
![code-size](https://img.shields.io/github/languages/code-size/nowayhecodes/semiconductor)
![npm-downloads](https://img.shields.io/npm/dw/semiconductor)
![license](https://img.shields.io/github/license/nowayhecodes/semiconductor)
![release](https://img.shields.io/github/v/release/nowayhecodes/semiconductor)
![types](https://img.shields.io/npm/types/semiconductor)

# Semiconductor

Multiple dispatch pattern library written with TypeScript.

This library provides a tiny set of higher-order functions to create powerful, immutable multimethods - in a functional way.

To summarize, multiple dispatch (or multimethods) is a way to add superpowers to our functions/methods. They can do all that ordinary functions can, and additionally:

- can choose proper implementation based on the provided arguments, without explicit conditional logic
- can be easily extended, without the need to modify the original code
- allow you to write clean, concise and decoupled code

### What?

###### ([Wikipedia](https://en.wikipedia.org/wiki/Multiple_dispatch))

Multiple dispatch (or multimethods) is a pattern in which a function or method can be dynamically dispatched based on the run-time (dynamic) type or, in the more general case, some other attribute of more than one of its arguments.

Multiple dispatch is a generalization of _single dispatch polymorphism_, where a method call is dynamically dispatched based on the derived type of object on which the method has been called.

Multiple dispatch routes the dynamic dispatch to the implementing method using the combined characteristics of one or more arguments.
