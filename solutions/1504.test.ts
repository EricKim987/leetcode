import { assertEquals } from "jsr:@std/assert";
import { numSubmat } from "./1504.ts";

Deno.test("input1", () => {
  const input = [[1,0,1],[1,1,0],[1,1,0]]
  const result = numSubmat(input)
  assertEquals(result, 13)
})

Deno.test("input2", () => {
  const input = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
  const result = numSubmat(input)
  assertEquals(result, 24)
})