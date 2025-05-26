import type {Metadata} from "next";
import Provider from "src/components/common/provider";
import "src/styles/global.css";

export const metadata: Metadata = {
    title: "Linty",
    description: "none",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    )
}
