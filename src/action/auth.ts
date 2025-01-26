"use server";

import { db } from "@/server/db";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createUser() {
  const user = await currentUser(); //Get current User info from Clerk
  if (!user) throw new Error("Clerk User not found!");

  const userId = user.id;
  const emailAddress =
    user.emailAddresses[0]?.emailAddress ?? "no-email@domain.com";
  const firstName = user.firstName || "Unknown";
  const lastName = user.lastName || "Unknown";
  const imageUrl = user.imageUrl || "";

  // Save the user data in your database
  await db.user
    .upsert({
      where: { id: userId },
      update: { emailAddress, firstName, lastName, imageUrl },
      create: { id: userId, emailAddress, firstName, lastName, imageUrl },
    })
    .catch((err) => console.log(err));
}
