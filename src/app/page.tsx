import { createUser } from "@/action/auth";

export default async function Home() {
  await createUser();
  return <>Hello</>;
}
