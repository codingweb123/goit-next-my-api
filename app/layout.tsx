import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Next.js My API",
	description: "Made by @codingweb123",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
