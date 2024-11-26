"use client"
import { FC  , useEffect , useState} from 'react'
import { MdOutlineNavigateNext } from "react-icons/md"

const FormBlog: FC = () => {




  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Вы успешно подписались!");
      } else {
        alert("Произошла ошибка при подписке. Попробуйте еще раз.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };




  useEffect(() => {
    // OneSignal SDK ni yuklash
    const script = document.createElement('script');
    script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
    script.defer = true;
    document.body.appendChild(script);

    // OneSignal konfiguratsiyasi
    script.onload = () => {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(async function (OneSignal: any) {
        await OneSignal.init({
          appId: 'a4c3e374-030c-4d56-babf-a4371ebc05df',
          safari_web_id: 'web.onesignal.auto.5f83a190-684a-4c4c-a875-2ee8aa7bf929',
          notifyButton: {
            enable: true,
          },
        });
      });
    };

    return () => {
      document.body.removeChild(script); // Komponent unmounted bo'lganda scriptni olib tashlash
    };
  }, []);

  return (
    <div className='mt-[120px] mx-[16px]'>
      <div className='flex flex-col pt-[30px] pb-[30px] px-[20px] mdl:py-[60px] 2xl:py-[90px] bg-green100 rounded-[20px] justify-center  items-center'>
        <div className='w-[70%] mdl:w-[60%] 2xl:w-[100%]'>
          <div className='text-center'>
            <p className='text-white text-[25px] mdl:text-[45px] 2xl:text-[50px] font-raleway  font-bold'>Будьте в курсе всех новостей!</p>
          </div>
          <div className='mt-[8px] mdl:mt-[12px] text-center'>
            <p className='text-white text-[14px] mdl:text-[18px]  font-raleway  font-medium'>Подпишитесь на обновления нашего блога</p>
          </div>
        </div>
        {/* INPUT AND BUTTON */}
        <div className='bg-white rounded-[10px]  flex flex-row justify-between p-[4px] h-[50px] mdl:h-[60px] mdl:mt-[55px]  w-full mt-[30px] mdl:w-[90%] mx-auto 2xl:w-[50%]'>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='bg-inherit border-none outline-none ml-[8px] w-[80%]' placeholder='E-mail' />
          <div className=' text-white flex items-center justify-center rounded-[10px] bg-green100  mdl:hidden w-[42px] h-[42px]'>
            <MdOutlineNavigateNext size={25} />
          </div>
          <button className='hidden  bg-greenButton py-[16px] px-[20px] mdl:flex items-center justify-center rounded-[10px] text-[18px] font-bold text-white'>
            Подписаться
          </button>
        </div>

      </div>
    </div>
  )
}

export default FormBlog