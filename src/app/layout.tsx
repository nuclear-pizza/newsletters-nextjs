import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import UserProvider from "@/contexts/user";
import NewslettersProvider from "@/contexts/newsletters";
import Container from "@/components/shared/Container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <UserProvider>
            <NewslettersProvider>
              <Container>{children}</Container>
            </NewslettersProvider>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
