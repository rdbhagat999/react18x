import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup, configure } from "@testing-library/react";
import "@testing-library/jest-som/vitest";
import { server } from "./src/__mocks__/msw/node/server";

configure({
  asyncUtilTimeout: 5000,
});

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
