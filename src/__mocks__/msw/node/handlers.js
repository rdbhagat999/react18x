import { http } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/products/:id", ({ params }) => {
    return new Response.json(
      { id: +params?.id },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": 1270,
          "Last-Modified": "Mon, 13 Jul 2020 15:00:00 GMT",
        },
      }
    );
  }),
];
