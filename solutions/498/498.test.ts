import { assertEquals } from "jsr:@std/assert";
import { findDiagonalOrder } from "./498.ts";

Deno.test("input1", () => {
  const input = [[1,2,3],[4,5,6],[7,8,9]]
  const output = [1,2,4,7,5,3,6,8,9]
  assertEquals(findDiagonalOrder(input), output)
})

Deno.test("input2", () => {
  const input = [[1,2],[3,4]]
  const output = [1,2,3,4]
  assertEquals(findDiagonalOrder(input), output)
})