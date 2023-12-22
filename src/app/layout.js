import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shiksha Plus ERP",
  description: "Shivaclicksoft introduces Shiksha Plus ERP software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Shiksha Plus – A School ERP Software"
        />
        <meta
          name="google-site-verification"
          content="WqzVV3q8uEG4ERq7kns6Cq33Ke6CPxFUUfOP8DpmFtA"
        />
        <meta
          name="keywords"
          content="Application, Clean, Saas, Dashboard, Bootstrap4"
        />
        <meta content="sacredthemes" name="author" />

        <link rel="canonical" href="https://www.shikshaplus.in/" />
        <link rel="shortcut icon" href="images/favicon.png" />

        <link href="css/animate.css" rel="stylesheet" type="text/css" />

        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />

        <link href="css/slick.css" rel="stylesheet" type="text/css" />

        <link
          href="css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="css/line-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="css/fontawesome.min.css" rel="stylesheet" type="text/css" />

        <link
          href="css/style.css"
          rel="stylesheet"
          type="text/css"
          id="theme-default"
        />
        <link
          href="css/rtl-style.css"
          rel="stylesheet"
          type="text/css"
          id="rtl-theme-default"
          disabled="disabled"
        />
        <link
          href="css/colors/default-color.css"
          rel="stylesheet"
          type="text/css"
          id="theme-color"
        />
      </head>
      <>
        <body>
          <Header />
          {children}
          <Footer />

          <Script type="text/javascript" src="/js/jquery.min.js"></Script>
          <Script
            type="text/javascript"
            src="js/jquery-migrate.min.js"
          ></Script>
          <Script
            type="text/javascript"
            src="js/bootstrap.bundle.min.js"
          ></Script>
          <Script type="text/javascript" src="js/jquery.easing.min.js"></Script>
          <Script type="text/javascript" src="js/scrollspy.min.js"></Script>
          <Script type="text/javascript" src="js/appear.js"></Script>

          <Script type="text/javascript" src="js/wow.min.js"></Script>

          <Script type="text/javascript" src="js/slick.min.js"></Script>

          <Script type="text/javascript" src="js/dcode.js"></Script>
        </body>
      </>
    </html>
  );
}
