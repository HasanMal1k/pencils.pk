import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Phrase = ({ container, direction, color, children }) => {
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    
    const dir = direction === 'left' ? -1 : 1
    const x = useTransform(scrollYProgress, [0, 1], [-250 * dir, 250 * dir]);
    
    return (
        <motion.div 
            className={`${color} font-bold text-6xl whitespace-nowrap relative left-[-10%] pb-10` }
            style={{ x }}
        >
            {children}
        </motion.div>
    );
};

function HorizontalText() {
    const container = useRef(null);
    return (
        <>
            <div ref={container} className="overflow-x-hidden mt-32 mb-48">

                <Phrase container={container} direction={'left'} color={'text-yellow-400'}>
                    { 'SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. SALE 50% OFF. '}
                </Phrase>
                <Phrase container={container} direction={''} color={'text-pink-500'}>
                    {'Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. Bulk Prices. '}
                </Phrase>
                <Phrase container={container} direction={'left'} color={'text-blue-500'}>
                    {'Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. Free Delivery. '}
                </Phrase>

            </div>
            
        </>
    );
}

export default HorizontalText;