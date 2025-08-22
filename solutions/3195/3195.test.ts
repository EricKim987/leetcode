import { assertEquals } from "jsr:@std/assert";
import { minimumArea } from "./3195.ts";

Deno.test("input1", () => {
    const input = [[0,1,0],[1,0,1]]
    const result = minimumArea(input)
    assertEquals(result, 6)
})

Deno.test("input2", () => {
    const input = [[1,0],[0,0]]
    const result = minimumArea(input)
    assertEquals(result, 1)
})

Deno.test("input3", () => {
    const input = [[0],[1]]
    const result = minimumArea(input)
    assertEquals(result, 1)
})