const assert = require("assert")
const fs = require("fs")

const S = fs.readFileSync("S.txt", "utf8")
const A = fs.readFileSync("A.txt", "utf8")
const B = fs.readFileSync("B.txt", "utf8")

assert(!A.includes("\n"), "A doesn't include line breaks.")
assert(!B.includes("\n"), "B doesn't include line breaks.")

const R = S.replace(A, B)

// Should not change the number of lines.
assert.strictEqual(R.split("\n").length, S.split("\n").length)
