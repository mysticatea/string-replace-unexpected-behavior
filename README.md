# `string#replace()` unexpected behavior

## Description

```js
// Prepare.
const assert = require("assert")
const fs = require("fs")
const S = fs.readFileSync("S.txt", "utf8")
const A = fs.readFileSync("A.txt", "utf8")
const B = fs.readFileSync("B.txt", "utf8")

assert(!A.includes("\n"), "A doesn't include line breaks.")
assert(!B.includes("\n"), "B doesn't include line breaks.")

// Main.
const R = S.replace(A, B)

// Should not change the number of lines.
assert.strictEqual(R.split("\n").length, S.split("\n").length) //→ Fail.
```

In the expression `R = S.replace(A, B)`, both A and B don't include line breaks, but R and S have different lines.
I expected the number of lines to not be changed.

I tried the following versions:

- 6.14.2
- 8.11.2
- 10.1.0

## Try

```bash
git clone https://github.com/mysticatea/string-replace-unexpected-behavior.git
cd string-replace-unexpected-behavior
node test.js
```
