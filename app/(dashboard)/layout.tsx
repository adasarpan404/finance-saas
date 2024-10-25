"use client"
import { Header } from "@/components/headers";

type Props = {
    children: React.ReactNode;
};

function dashboardLayout({ children }: Props) {
    return (
        <>
            <Header />
            <main className="px-3 lg:px-14">
                {children}
            </main>
        </>);
}

export default dashboardLayout;
