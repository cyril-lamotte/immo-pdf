'use client';

import jwt from "jwt-simple";
import { useEffect } from "react";

export default function ImportData() {

  useEffect(() => {
    // Get data attribute from URL.
    const url = new URL(window.location.href);
    const token = url.searchParams.get('data');
  });

  return null;
}
