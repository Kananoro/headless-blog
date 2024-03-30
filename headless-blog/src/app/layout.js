import { Lato, Open_Sans } from "next/font/google";
import './styles/styles.scss'
import Header from "./components/header";
import Footer from "./components/footer";
import { Providers } from "./providers";

const lato = Lato({
    subsets: ["latin"],
    weight: ['400', '700', '900'],
    variable: '--font-lato'
  });
  
const openSans = Open_Sans({
    subsets: ["latin"],
    variable: '--font-open-sans'
  });
  
export const metadata = {
  title: "Headless Blog",
};

const RootLayout = ({ children }) => (
    <html lang="en">
      <body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>
        <Providers>
        <Header/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );


export default RootLayout;