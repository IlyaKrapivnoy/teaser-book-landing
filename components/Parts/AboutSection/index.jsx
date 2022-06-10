import React from 'react';
import Image from 'next/image';
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
                        Very high <span>resolution!</span>
                    </p>
                    <h2>About The Book</h2>
                    <p className={'subText'}>
                        This lovely, well-written book is concerned with
                        creating typography and is essential for professionals
                        who regularly work for clients.
                    </p>
                    <h3>More than 10+ award achieved</h3>
                    <p className={'subText'}>
                        Fugit ratione, repellendus, dignissimos, ducimus
                        voluptatem, quos.
                    </p>
                    <h3>Read On Any Device</h3>
                    <p>
                        We work with our partners to streamline project plans
                        that don’t just deliver on product perfection, but also
                        delivers on time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
