import { Head } from "@inertiajs/react";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import Nav from "@/Components/nav/Nav";

export default function GuestLayout({ children, title = "Documento" }) {
    return (
        <>
            <Head title={title} />
            <Header />
            <Nav />

            <main className="mx-auto container">{children}</main>
            <Footer />
        </>
    );
}
