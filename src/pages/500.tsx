import YouTube from "react-youtube";
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Logo } from "@/svg/Logo";

export default function Page500() {
    return <div className="flex flex-col relative w-full h-screen justify-center items-center overflow-hidden gap-4">
        <div className="text-white text-4xl z-10 w-full text-center">ขออภัย คุณไม่พบหน้าอะไร...นอกจากคุณ<b className='text-[#ab98ff] underline'>คุณบากุ</b></div>
        <div className="flex gap-2 text-white z-10 items-center">
            <span className="text-4xl">ติดตาม<b className='text-[#ab98ff] underline'>คุณบากุ</b>ได้แล้ววันนี้ ที่</span>
            <Link href={"https://algorhythm.realic.net/members/illusion/baku"} target="_blank">
                <img src="/img/logo_arp.png" className="w-[60px]"/>
            </Link>
            <Link href={"https://www.youtube.com/@Baku_ARP"} target="_blank">
                <YouTubeIcon className="text-6xl"/>
            </Link>
            <Link href={"https://twitter.com/Baku_ARP"} target="_blank">
                <TwitterIcon className="text-6xl"/>
            </Link>
            <Link href={"https://www.facebook.com/Baku.ARP"} target="_blank">
                <FontAwesomeIcon className="text-[44px] mt-2 mr-2" icon={faFacebook} />
            </Link>
            <Link href={"https://www.tiktok.com/@baku_arp"} target="_blank">
                <FontAwesomeIcon className="text-[44px] mt-2" icon={faTiktok} />
            </Link>
            <div className="px-0.5"/>
            <Link href={"https://vtuberthaiinfo.com/talent/baku_arp"} target="_blank">
                <Logo className="w-[50px] h-[50px] pt-2"/>
            </Link>
        </div>
        <div className="flex gap-2 text-white z-10">
            <Link className="flex flex-row items-center gap-1" href={"/"}>
                <HomeIcon className="text-2xl"/>
                <span className="text-xl">หน้าอวยพรวันเกิด<b className='text-[#ab98ff] underline'>คุณบากุ</b></span>
            </Link>
            <Divider className="bg-white" orientation="vertical" flexItem />
            <Link className="flex flex-row items-center gap-1" href={"https://twitter.com/Dreamerism89"} target="_blank">
                <TwitterIcon className="text-2xl"/>
                <span className="text-xl">ผู้ฝันใฝ่แปลว่าอิสระ</span>
            </Link>
        </div>
        <YouTube
            className="video-container absolute blur-sm brightness-[25%]"
            videoId="2a0UlszZwQI"
            opts={{
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    loop: 1,
                    playlist: '2a0UlszZwQI',
                },
            }}
            iframeClassName="ifreamYoutube"
        />
    </div>
}