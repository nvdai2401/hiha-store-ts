import React, { useState, useEffect, useRef } from 'react';

type Props = {
  width?: number;
  height?: number;
  src: string;
  classes?: string;
  alt: string;
  placeHolder: string;
};

const LazyImage: React.FC<Props> = (props: Props) => {
  const { width, height, classes = '', alt = '', placeHolder = '' } = props;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const elementInViewport = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const { current } = imgRef;
      if (!loaded && elementInViewport(current)) {
        const { src } = props;
        const imgLoader = new Image();
        imgLoader.src = src;
        imgLoader.onload = () => {
          if (current) {
            current.setAttribute(`src`, `${src}`);
            setLoaded(true);
          }
        };
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <img
      src={placeHolder}
      alt={alt}
      width={width}
      height={height}
      ref={imgRef}
      loading="lazy"
      className={`c-lazy-image ${classes}`}
    />
  );
};

export default LazyImage;
