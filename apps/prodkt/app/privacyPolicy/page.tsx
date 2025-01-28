'use client';
import FooterLinkComp from "../components/footerlinkComp";
import React from "react";
import { PrivacyPolicyData } from "../data";


export default function PrivacyPolicy() {

  return (
    <>
      <FooterLinkComp data={PrivacyPolicyData} />
    </>
  );
}
