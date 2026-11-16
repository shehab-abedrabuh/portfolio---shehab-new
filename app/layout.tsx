import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";
import "./premium.css";
import "./redesign.css";
import "./case-study.css";
export const metadata: Metadata = {
 title: "Shehab Al-Deen Abedrabuh | Technical Support, Systems & Networking",
 description: "Technical support representative in Nablus, Palestine. IT support, networking, systems and infrastructure, with experience at Jawwal / Paltel and the EmuPath tools and digital resources platform.",
 metadataBase: new URL("https://www.shehab.bio"), alternates:{canonical:"https://www.shehab.bio"},
 openGraph:{title:"Shehab Al-Deen Abedrabuh — IT Support & Digital Tools",description:"Technical Support · Systems & Infrastructure · Networking. Explore my experience, projects and IT services.",url:"https://www.shehab.bio",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Shehab Al-Deen Abedrabuh — Technical Support, Systems & Infrastructure, Networking"}]},
 twitter:{card:"summary_large_image",title:"Shehab Al-Deen Abedrabuh",description:"Technical Support · Systems & Infrastructure · Networking",images:["/og.png"]},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark"><body>{children}</body></html>}

