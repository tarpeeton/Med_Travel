import Image from 'next/image'
import { FC } from 'react'


const BlogWithSlug: FC = () => {
    return (
        <div className='flex flex-col mt-[20px]'>
            <div className='flex flex-col'>
                {/* BLOG */}
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[#7C7C7C] text-[15px] mdl:text-[17px] font-raleway'>
                            20.08.2024
                        </p>
                        <h1 className='text-[25px] mdl:text-[35px] 2xl:text-[40px] text-titleDark font-bold  font-raleway'>Безопасность пациентов: Как гарантировать свое здоровье при лечении?</h1>
                    </div>
                    <div className='mt-[20px] mdl:mt-[25px]  rounded-[20px] overflow-hidden'>
                        <Image quality={100} alt='blogImage' src='sdf' width={1075} height={500} className='object-cover w-full h-full' />
                    </div>
                    <div className='mt-[30px] mdl:mt-[40px] '>
                        <p className='text-[15px] font-raleway font-medium mdl:text-[17px] 2xl:text-[18px] text-[]'>
                            В условиях современного здравоохранения обеспечение безопасности пациентов становится приоритетной задачей. Важно помнить, что ваше здоровье во многом зависит от мер предосторожности, которые вы принимаете при лечении.

                            Первый шаг к обеспечению безопасности — это тщательный выбор медицинского учреждения. Убедитесь, что клиника или медицинский центр имеет все необходимые лицензии и сертификаты, а также положительные отзывы от предыдущих пациентов

                            Кроме того, рекомендуется проверять квалификацию медицинских специалистов. Опыт и профессионализм врачей играют ключевую роль в успешности лечения.
                        </p>
                    </div>
                    <div className='mt-[40px] mdl:mt-[50px] 2xl:mt-[60px] flex flex-col gap-[12px] 2xl:gap-[12px]'>
                        <p className='text-[22px] mdl:text-[25px]  text-titleDark font-semibold'>Соблюдение рекомендаций</p>
                        <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] text-titleDark font-medium'>Соблюдение всех предписаний, таких как диета и режим, помогает избежать осложнений и ускоряет процесс восстановления.

                            Обеспечение безопасности пациентов требует внимательности и ответственности как со стороны медицинских учреждений, так и со стороны самих пациентов. Следуя этим рекомендациям, вы можете значительно повысить уровень своей защиты и гарантировать себе безопасное и эффективное лечение.</p>
                        <p className='text-[22px] mdl:text-[25px]  text-titleDark font-semibold'>Полис медицинского страхования</p>
                        <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] text-titleDark font-medium'>Наконец, не забывайте о страховании. Полис медицинского страхования может стать важным фактором в обеспечении вашей безопасности, покрывая непредвиденные расходы и предоставляя дополнительную защиту.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogWithSlug