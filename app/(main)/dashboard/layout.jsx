import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import Header from "./_components/header";

export default function DashboardLayout({ children }) {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[200px] z-30 flex-col fixed inset-y-0">
                <NavigationSidebar />
            </div>
            <main className="md:pl-[200px] h-full">
                <Header />
                {children}
            </main>
        </div>
    );
}
