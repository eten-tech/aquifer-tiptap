// @ts-expect-error bun:test types don't exist
import { expect, test } from "bun:test";
import { parseBref } from "./bref-parser";

test("parseBref simple verse", () => {
  expect(parseBref("GEN.1.1")).toEqual([
    { startVerse: 1001001001, endVerse: 1001001001 },
  ]);
});

test("parseBref verse range", () => {
  expect(parseBref("MATT.5:3-7")).toEqual([
    { startVerse: 1041005003, endVerse: 1041005007 },
  ]);
});

test("parseBref multiple verses", () => {
  expect(parseBref("JOHN.3:16,17")).toEqual([
    { startVerse: 1044003016, endVerse: 1044003016 },
    { startVerse: 1044003017, endVerse: 1044003017 },
  ]);
});

test("parseBref complex reference", () => {
  expect(parseBref("PSA.23.1-6;4.1-2")).toEqual([
    { startVerse: 1019023001, endVerse: 1019023006 },
    { startVerse: 1019004001, endVerse: 1019004002 },
  ]);
});

test("parseBref throws on invalid book", () => {
  expect(() => parseBref("INVALID.1:1")).toThrow("Missing book: INVALID");
});
