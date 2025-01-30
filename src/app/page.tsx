import { createUser } from "@/action/auth";
import LinkAccountButton from "@/components/global/LinkAccountButton";

export default async function Home() {
  await createUser();
  return (
    <>
      Hello <LinkAccountButton />{" "}
    </>
  );
}
