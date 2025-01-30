"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import { getAurinkoAuthUrl } from "@/lib/aurinkos";

const LinkAccountButton: FC = ({}) => {
  return <Button
  onClick={async() => {
    const authURl = await getAurinkoAuthUrl("Google")
    console.log(authURl);
    
  }}
  >Link Account</Button>;
};

export default LinkAccountButton;
