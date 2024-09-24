import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import * as React from 'react';

interface IFooterCardProps {
    link: string,
    ikon: IconDefinition,
    deskripsi: string,
}

const FooterCard: React.FunctionComponent<IFooterCardProps> = (props) => {
  return (
    <Link href={props.link} className='containerFooter'>
        <FontAwesomeIcon className='icon' icon={props.ikon} />
        <h3>{props.deskripsi}</h3>
    </Link>
  );
};

export default FooterCard;
