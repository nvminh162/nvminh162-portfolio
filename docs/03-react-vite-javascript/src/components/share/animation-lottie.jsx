import Lottie from "lottie-react";
import { useEffect, useMemo, useRef } from "react";

const AnimationLottie = ({ animationPath, width = "95%" }) => {

  const lottieRef = useRef();

  const defaultOptions = useMemo(
    () => {
      return {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
          width
        },
        lottieRef: lottieRef
      }
    },
    [animationPath, width]
  );

  useEffect(() => {
    return () => lottieRef.current.destroy();
  }, [])

  return (
    <Lottie
      {...defaultOptions} />
  );
};

export default AnimationLottie;