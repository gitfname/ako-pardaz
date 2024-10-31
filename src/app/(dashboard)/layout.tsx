
import "@/app/globals.css";
import { SideBar } from "@/components";
import ChatsContextProvider from "@/components/chat/context/ChatsContextProvider";
import "@mantine/core/styles.css"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ChatsContextProvider>
            <div className="w-full h-screen  overflow-hidden grid grid-cols-1 lg:grid-cols-[14rem_1fr] bg-myBlue/10 ">

                <aside className="overflow-y-auto max-lg:hidden">
                    <div className="w-full">
                        <SideBar />
                    </div>
                </aside>

                <main className="overflow-y-auto">
                    {children}
                </main>

            </div>
        </ChatsContextProvider>
    );
}
