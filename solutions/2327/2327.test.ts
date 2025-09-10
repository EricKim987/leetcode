import { assertEquals } from "jsr:@std/assert";
import { peopleAwareOfSecret } from "./2327.ts";

Deno.test("input1", () => {
  const result = peopleAwareOfSecret(6,2,4)
  assertEquals(result, 5)
})

Deno.test("input2", () => {
  const result = peopleAwareOfSecret(4,1,3)
  assertEquals(result, 6)
})