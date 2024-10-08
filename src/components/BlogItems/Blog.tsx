import Image from 'next/image'
import { FC } from 'react'
import slugblog from '@/public/slugblog.jpg'
import { Link } from '@/i18n/routing'
import { MdNavigateNext } from "react-icons/md"

const BlogWithSlug: FC = () => {
    return (
        <div className='flex flex-col mt-[20px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                {/* BLOG */}
                <div className='flex flex-col 2xl:w-[68%]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[#7C7C7C] text-[15px] mdl:text-[17px] font-raleway'>
                            20.08.2024
                        </p>
                        <h1 className='text-[25px] mdl:text-[35px] 2xl:text-[32px] 4xl:text-[40px] text-titleDark font-bold  font-raleway'>Безопасность пациентов: Как гарантировать свое здоровье при лечении?</h1>
                    </div>
                    <div className='mt-[20px] mdl:mt-[25px]  rounded-[20px] overflow-hidden h-[220px] mdl:h-[420px] 2xl:h-[510px]'>
                        <Image quality={100} alt='blogImage' src={slugblog} width={1075} height={500} className='object-cover w-full h-full' />
                    </div>
                    <div className='mt-[30px] mdl:mt-[40px] '>
                        <p className='text-[15px] font-raleway  mdl:text-[17px]'>
                            В условиях современного здравоохранения обеспечение безопасности пациентов становится приоритетной задачей. Важно помнить, что ваше здоровье во многом зависит от мер предосторожности, которые вы принимаете при лечении.

                            Первый шаг к обеспечению безопасности — это тщательный выбор медицинского учреждения. Убедитесь, что клиника или медицинский центр имеет все необходимые лицензии и сертификаты, а также положительные отзывы от предыдущих пациентов

                            Кроме того, рекомендуется проверять квалификацию медицинских специалистов. Опыт и профессионализм врачей играют ключевую роль в успешности лечения.
                        </p>
                    </div>
                    <div className='mt-[40px] mdl:mt-[50px] 2xl:mt-[60px] flex flex-col gap-[12px] 2xl:gap-[12px]'>
                        <p className='text-[22px] mdl:text-[25px]  text-titleDark font-semibold'>Соблюдение рекомендаций</p>
                        <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] text-titleDark '>Соблюдение всех предписаний, таких как диета и режим, помогает избежать осложнений и ускоряет процесс восстановления.

                            Обеспечение безопасности пациентов требует внимательности и ответственности как со стороны медицинских учреждений, так и со стороны самих пациентов. Следуя этим рекомендациям, вы можете значительно повысить уровень своей защиты и гарантировать себе безопасное и эффективное лечение.</p>
                        <p className='text-[22px] mdl:text-[25px]  text-titleDark font-semibold'>Полис медицинского страхования</p>
                        <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] text-titleDark '>Наконец, не забывайте о страховании. Полис медицинского страхования может стать важным фактором в обеспечении вашей безопасности, покрывая непредвиденные расходы и предоставляя дополнительную защиту.</p>
                    </div>
                </div>
                {/* SIMILAR NEWS */}
                <div className='hidden 2xl:flex 2xl:flex-col 2xl:gap-[12px] 2xl:w-[30%] mt-[158px]'>
                    <div className='border border-borderColor p-[30px] rounded-[20px]'>
                        <p className='text-[18px] font-semibold font-raleway text-titleDark '>
                            Как выбрать правильное место для реабилитации: Советы экспертов
                        </p>
                        <div className='mt-[20px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[16px]'>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                    <div className='border border-borderColor p-[30px] rounded-[20px]'>
                        <p className='text-[18px] font-semibold font-raleway text-titleDark '>
                            Как выбрать правильное место для реабилитации: Советы экспертов
                        </p>
                        <div className='mt-[20px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[16px]'>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                    <div className='border border-borderColor p-[30px] rounded-[20px]'>
                        <p className='text-[18px] font-semibold font-raleway text-titleDark '>
                            Как выбрать правильное место для реабилитации: Советы экспертов
                        </p>
                        <div className='mt-[20px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[16px]'>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                    <div className='border border-borderColor p-[30px] rounded-[20px]'>
                        <p className='text-[18px] font-semibold font-raleway text-titleDark '>
                            Как выбрать правильное место для реабилитации: Советы экспертов
                        </p>
                        <div className='mt-[20px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[16px]'>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogWithSlug