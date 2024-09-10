const AboutUs = () => {
    return (
        <div className='wrapper flex flex-col items-center font-["Montserrat_Alternates",_sans-serif]'>
            <section className='my-10 max-w-[740px] text-center'>
                <h2 className='mb-12 text-3xl md:text-5xl font-["Cormorant_Garamond",_serif]'>About Emporium</h2>
                <p className=' text-center leading-5 '>Emporium is a multi-brand luxury concept store established in 2005.
                    This main fashion destination situated in the very center of Baku City in the luxury
                    shopping venue Port Baku Mall presents niche and high-class men and women’s fashion
                    apparel, sought beauty products and fragrances, fine jewelry, and revered designer home items.
                </p>
            </section>
            <section className='flex justify-between mb-10  gap-4 md:gap-0 lg:gap-16 md:flex-row flex-col items-center'>
                <div className='min-w-[300px]'>
                    <img className='w-full' src="/img/emporiumAbout.jpg" alt="aboutEmporium" />
                </div>
                <div className='md:max-w-[500px] mb-4 md:px-20 text-start'>
                    <p className='text-sm'>
                        The concept store presents a three-floor unique and impressive creative vision,
                        much to the recognition of the fashion world. Emporium feels proud to host and
                        build strong friendly relationships with more than 500 global brands and designers
                        of such as Bottega Veneta, Fendi, Miu Miu, Balenciaga, Givenchy, etc. Emporium is
                        part of Sinteks Group of Companies, one of the largest and most successful fashion
                        retailers in the Caucasus region, represented in over 50 stores.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
