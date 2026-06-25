import { validateInput } from "../validation.js";

test("Input valid", () => {
  expect(validateInput("Seminar", "ITH")).toBe(true);
});

test("Nama kosong", () => {
  expect(validateInput("", "ITH")).toBe(false);
});

test("Value kosong", () => {
  expect(validateInput("Seminar", "")).toBe(false);
});