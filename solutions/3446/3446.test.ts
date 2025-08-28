import { assertEquals } from "jsr:@std/assert";
import { sortMatrix } from "./3446.ts";

Deno.test("input1", () => {
  const input = [[1,7,3],[9,8,2],[4,5,6]]
  const result = sortMatrix(input)
  assertEquals(result, [[8,2,3],[9,6,7],[4,5,1]])
})

Deno.test("input2", () => {
  const input = [[0,1],[1,2]]
  const result = sortMatrix(input)
  assertEquals(result, [[2,1],[1,0]])
})

Deno.test("input3", () => {
  const input = [[1]]
  const result = sortMatrix(input)
  assertEquals(result, [[1]])
})

Deno.test("input4", () => {
  const input = [[-2,-1,-3],[-3,-4,-3],[-4,-5,0]]
  const result = sortMatrix(input)
  assertEquals(result, [[0,-3,-3],[-3,-2,-1],[-4,-5,-4]])
})  