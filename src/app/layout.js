export const metadata = {
  title: "Mandu5",
  description: "Personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
