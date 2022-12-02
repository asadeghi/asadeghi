import { serveRequest } from "@collected/press-server";

export default {
  async fetch(request) {
    return await serveRequest("asadeghi", "asadeghi", new URL(request.url));
  },
};
