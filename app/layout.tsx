import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";
import "./premium.css";
export const metadata: Metadata = {
 title: "Shehab Abedrabuh | Technical Support, Systems & Junior DevOps",
 description: "Technical support specialist in Nablus, Palestine. IT support, networking, systems and infrastructure, with hands-on projects on the Junior DevOps path.",
 metadataBase: new URL("https://shehab-abedrabuh.shehabkinglol.chatgpt.site"), alternates:{canonical:"https://shehab-abedrabuh.shehabkinglol.chatgpt.site"},
 openGraph:{title:"Shehab Abedrabuh — My work. My progress.",description:"Technical Support · Systems & Infrastructure · Junior DevOps. Explore my experience, projects and IT services.",url:"https://shehab-abedrabuh.shehabkinglol.chatgpt.site",type:"website",images:[{url:"/og.png",width:1730,height:909,alt:"Shehab Abedrabuh — Technical Support, Systems & Infrastructure, Junior DevOps"}]},
 twitter:{card:"summary_large_image",title:"Shehab Abedrabuh",description:"Technical Support · Systems & Infrastructure · Junior DevOps",images:["/og.png"]},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

