'use client';
import FooterLinkComp from "../components/footerlinkComp";
import { GdprData } from "../data";
import React from "react";


export default function GdprCompliance() {  

  return (
    <>
      <FooterLinkComp data={GdprData} />
    </>
  );
}
