import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

interface ISwiperBrandCardProps {
    gambar: StaticImageData
}

const SwiperBrandCard: React.FunctionComponent<ISwiperBrandCardProps> = (props) => {
  return (
    <div className='swiperBrandCard'>
        <Image quality={100} alt='aciertoVisuals' src={props.gambar} />
    </div>
  );
};

export default SwiperBrandCard;
