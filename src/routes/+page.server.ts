import prisma from "$lib/prisma";
import type { Actions } from "./$types";

export const actions = {
  default: async (event) => {
    const body = await event.request.formData();

    const content = body.get("content");
    const title = body.get("title");

    if (!content || !title) {
      return {
        status: 400,
        body: "Missing title or content",
      };
    }

    const post = await prisma.post.create({
      data: {
        title: title.toString(),
        content: content.toString(),
      },
    });

    return {
      status: 200,
      body: post,
    }
  },
} satisfies Actions;
