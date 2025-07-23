import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

const SocialMedia = (props) => {
    const { youtube, tiktok, udemy, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube Hỏi Dân IT">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Hỏi Dân IT">
                <FaTiktok size={30} />
            </a>
            <a href={udemy} target='_blank' className="highlight" title="Udemy Hỏi Dân IT">
                <SiUdemy size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Hỏi Dân IT">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;