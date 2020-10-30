import React, { useState, useEffect, useRef } from 'react';

type Props = {
  width?: number;
  height?: number;
  src: string;
  className: string;
  alt: string;
  placeHolder: string;
};

function LazyImage(props: Props): React.ReactElement {
  const { width, height, className, alt, placeHolder } = props;
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
  }, []);

  return (
    <img
      src={placeHolder}
      width={width || '100%'}
      height={height || '100%'}
      ref={imgRef}
      className={`${className}`}
      alt={alt}
      sizes="80vw"
    />
  );
}

export default LazyImage;
