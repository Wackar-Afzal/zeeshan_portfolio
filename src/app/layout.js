import { Six_Caps, Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor/Cursor";
import PreLoader from "@/components/PreLoader/PreLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Zeeshan",
  description: "Portfolio App Zeeshan",
};

const styles ={
  container:{
    position:"fixed",
    top:"300px",
    right:" 0px",
    top: "50%",
    transform: "translate(0%, -50%)",
    padding:"0px",
    margin:"0px",
    width: "50px",
    height:"180px",
    background:"#DB4A46",
    zIndex:"15",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"3rem",
    cursor:"pointer"

  },

}
export default function RootLayout({ children }) {

  return (
    <html lang="en">
    <body className={`${poppins.className}`}>
      {/* <PreLoader /> */}

      <div id="main-content" >
        <Cursor />
        {children}
      </div>
    </body>
  </html>
  );
}
