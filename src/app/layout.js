import './globals.css'

export const metadata = {
    title: 'lovelyVector - Home',
    description: 'Home sweet home',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
