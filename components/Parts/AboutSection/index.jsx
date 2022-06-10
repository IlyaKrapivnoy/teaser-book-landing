import React from 'react';
import Image from 'next/image';
import Button from '../../Buttons/Button';
import buttonStyles from '../../Buttons/Button/Button.module.scss';
import KindleImg from '../../../public/kindle.png';

const AboutSection = () => {
    return (
        <div className='container'>
            <div className={'wrapper'}>
                <div className={'picturePart'}>
                    <Image
                        src={KindleImg}
                        alt={'Kindle'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={'textPart'}>
                    <p className={'supText'}>
                        <span>50% discount</span> on early purchase
                    </p>
                    <h1>The Man in the Glass House</h1>
                    <p className={'subText'}>
                        A great landing page to sell your eBook!
                    </p>
                    <p>
                        We work with our partners to streamline project plans
                        that don’t just deliver on product perfection, but also
                        delivers on time.
                    </p>
                    <Button
                        title={'Buy now for $14.99'}
                        className={buttonStyles.red}
                    />
                    <p className={'footnote'}>
                        * eBook includes iBooks, PDF & ePub versions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
