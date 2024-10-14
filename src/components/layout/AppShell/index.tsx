import { useRouter } from "next/router";
import { Inter } from "next/font/google"
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../Navbar'))

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
});

type AppShellProps = {
    children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();

    return (
        <main className={inter.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default AppShell;