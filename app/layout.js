import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ArrowTopSVG } from "@/components/svgs";
import { scrollToTop } from "@/components/function";

export default function RootLayout({ children }) {
    
    return (
        <html lang="fr" className="no-scrollbar">
            <head>
                <script src="https://static.geetest.com/v4/gt4.js"></script>
            </head>
            <body id="bodyLayout" className="bg-fixed bg-gradient-to-tr from-gray-400 from-10% via-black via-50% to-gray-900 to-90%">
                <main className="flex flex-col min-h-screen">
                    <Header/>
                    <div className="flex flex-1">
                        {children}
                    </div>

                    <div  className="fixed right-0 bottom-0">
                        <div className="p-2 border-2 md:p-4 md:border-4 border-gray-900 bg-gray-800 rounded-xl md:rounded-3xl  mr-4 mb-28 md:mr-8 md:mb-32">
                            <div onClick={scrollToTop} className="fill-white text-2xl md:text-4xl hover:fill-red-600 cursor-pointer">
                                <ArrowTopSVG/>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </main>
            </body>
        </html>
    );
}
