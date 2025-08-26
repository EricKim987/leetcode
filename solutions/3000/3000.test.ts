import { assertEquals } from "jsr:@std/assert";
import { areaOfMaxDiagonal } from "./3000.ts";

Deno.test("input1", () => {
  const input = [[9,3],[8,6]]
  const result = areaOfMaxDiagonal(input)
  assertEquals(result, 48)
})

Deno.test("input2", () => {
  const input = [[3,4],[4,3]]
  const result = areaOfMaxDiagonal(input)
  assertEquals(result, 12)
})