import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
  youtube: string;
  tiktok: string;
  facebook: string;
}

const SocialMedia = (props: IProps) => {
  const { youtube, tiktok, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={youtube}
        target="_blank"
        className="highlight"
        title="Youtube of @nvminh162"
      >
        <SiYoutubeshorts size={30} />
      </a>
      <a
        href={tiktok}
        target="_blank"
        className="highlight"
        title="Tiktok of @nvminh162"
      >
        <FaTiktok size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook of @nvminh162"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
