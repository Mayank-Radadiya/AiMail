"use server";

import { db } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";

export async function createUser() {
  const user = await currentUser(); //Get current User info from Clerk
  if (!user) throw new Error("Clerk User not found!");

  // Save the user data in your database
  await db.user
    .upsert({
      where: { id: user.id },
      update: {
        emailAddress:
          user.emailAddresses[0]?.emailAddress ?? "no-email@domain.com",
        firstName: user.firstName || "Unknown",
        lastName: user.lastName || "Unknown",
        imageUrl: user.imageUrl || "",
      },
      create: {
        id: user.id,
        emailAddress:
          user.emailAddresses[0]?.emailAddress ?? "no-email@domain.com",
        firstName: user.firstName || "Unknown",
        lastName: user.lastName || "Unknown",
        imageUrl: user.imageUrl || "",
      },
    })
    .catch((err) => console.log(err));
}
