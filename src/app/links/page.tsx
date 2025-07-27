"use client";
import React from "react";
import ProfileLinks from "../../components/Links/ProfileLinks";
import LinksTabs from "../../components/Links/LinksTabs";

export default function LinksPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen pt-20">
        <LinksTabs />
        <ProfileLinks />
      </div>
    </div>
  );
}
