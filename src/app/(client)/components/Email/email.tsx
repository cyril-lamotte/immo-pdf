import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

<Html>
  <Head />
  <Preview>{previewText}</Preview>
  <Tailwind>
    <Body className="bg-white my-auto mx-auto font-sans">
      {...}
    </Body>
  </Tailwind>
</Html>
