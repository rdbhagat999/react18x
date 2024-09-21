import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-som/vitest";

afterEach(() => {
  cleanup();
});
