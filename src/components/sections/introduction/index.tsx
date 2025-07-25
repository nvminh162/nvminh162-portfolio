import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar.svg";
import nvminh162 from "assets/nvminh162.jpg";
import './introduction.scss';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "en" ? <>
                            LET ME <span className='text-pink-100'> INTRODUCE </span> MYSELF
                        </>
                            :
                            <>
                                <span className='text-pink-100'>GIỚI THIỆU</span> BẢN THÂN
                            </>
                        }
                    </h2>
                    <br />
                    <p>
                        {/* Paragraph 1 */}
                        {t("introSection.heading1")}
                        <br />
                        <br />
                        {/* Paragraph 2 */}
                        {t("introSection.heading2")}<i><b className='text-pink-100'> Java Spring Boot, Node.js, NestJS, React {t("introSection.and")} Next.js.</b></i>
                        <br />
                        <br />
                        {/* Paragraph 3 */}
                        {t("introSection.heading3")}
                        <br />
                        <br />
                        {/* Paragraph 4 */}
                        {t("introSection.heading4")}
                        <br />
                        <br />
                        {/* Paragraph 5 */}
                        {t("introSection.heading5")}
                        <br />
                        <br />
                        {/* Paragraph 6 */}
                        {t("introSection.heading6")}
                        <br />
                        <hr />
                        {/* Paragraph 7 */}
                        <i><b className='text-pink-100'>{t("introSection.heading7")}</b></i>
                        <br />
                        {/* Paragraph 8 */}
                        <i><b className='text-pink-100'>{t("introSection.heading8")}</b></i>
                        <br />
                    </p>
                </Col>
                <Col md={3} className='d-md-block d-none'>
                    <Tilt>
                        <img src={nvminh162} className="img-fluid" alt="avatar" style={{ borderRadius: '50%' }} />
                    </Tilt>
                </Col>
            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section>
    )
}

export default Introduction;