import { assertEquals } from "jsr:@std/assert";
import { numberOfPairs } from "./3025.ts";

Deno.test("input1", () => {
  const input = [[1,1],[2,2],[3,3]]
  const result = numberOfPairs(input)
  assertEquals(result, 0)
})

Deno.test("input2", () => {
  const input = [[6,2],[4,4],[2,6]]
  const result = numberOfPairs(input)
  assertEquals(result, 2)
})

Deno.test("input3", () => {
  const input = [[0,0],[0,3]]
  const result = numberOfPairs(input)
  assertEquals(result, 1)
})