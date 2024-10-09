"use client"
import { FC  , useState} from 'react'
import { Modal , Tooltip  } from 'antd'
import { IoClose } from "react-icons/io5"
import { FaTelegramPlane } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { IoLinkOutline } from "react-icons/io5"
import { usePathname } from 'next/navigation'
interface IShareModal {
  visible: boolean  // 'visible' as a boolean
  close: () => void // 'close' as a function to close the modal
}

const ShareModal: FC<IShareModal> = ({ visible, close }) => {
  const pathname = usePathname()
  const currentUrl = `${window.location.origin}${pathname}`

  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setTooltipVisible(true) // Show the tooltip when link is copied
        setTimeout(() => setTooltipVisible(false), 2000) // Hide tooltip after 2 seconds
      })
      .catch(err => {
        console.error("Ошибка копирования ссылки: ", err)
      })
  }

  const handleShare = (platform: string) => {
    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        break
      case 'instagram':
        alert("Instagram не поддерживает прямой URL для общего доступа. Скопируйте ссылку.") // Instagram does not support direct sharing via URL
        return
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`
        break
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`
        break
      default:
        return
    }
    window.open(shareUrl, '_blank')
  }
  return (
    <div>
      <Modal
        open={visible}
        footer={null}
        onCancel={close} // Using the close function
        centered
        closeIcon={<IoClose size={25} />}
        className="custom-modal"
      >
        <div className="flex flex-col">
          <p className="text-[22px] mdl:text-[30px] font-raleway font-bold">Поделиться новостью</p>
          <div className="flex  mt-[30px] mdl:mt-[40px] flex-wrap gap-[2%]">
          <div className='flex items-center justify-center flex-col w-[32%] h-[100px]'>
              <Tooltip title="Ссылка скопирована!" visible={tooltipVisible} placement="top">
                <button onClick={handleCopyLink} className='flex items-center justify-center bg-[#1AB2A6] rounded-full w-[60px] h-[60px]'>
                  <IoLinkOutline className='text-white' size={28} />
                </button>
              </Tooltip>
              <p className='text-[12px] mdl:text-[16px] text-[#505050] text-center h-[40px]'>Копировать ссылку</p>
            </div>

            <div className='flex items-center justify-center flex-col w-[32%] h-[100px]'>
              <button onClick={() => handleShare("instagram")} className=' flex items-center justify-center bg-[#F00073] rounded-full w-[60px] h-[60px]'>
                <FaInstagram className='text-white' size={28} />
              </button>
              <p className='text-[12px] mdl:text-[16px]  text-[#505050] text-center h-[40px]'>Instagram</p>
            </div>

            <div className='flex items-center justify-center flex-col w-[32%] h-[100px]'>
              <button onClick={() => handleShare("telegram")} className=' flex items-center justify-center bg-[#0088CC] rounded-full w-[60px] h-[60px]'>
                <FaTelegramPlane className='text-white' size={28} />
              </button>
              <p className='text-[12px] mdl:text-[16px]  text-[#505050] text-center h-[40px]'>Telegram</p>
            </div>

            <div className='flex items-center justify-center flex-col w-[32%] h-[100px]'>
              <button onClick={() => handleShare("facebook")} className=' flex items-center justify-center bg-[#1877F2] rounded-full w-[60px] h-[60px]'>
                <FaFacebook className='text-white' size={28} />
              </button>
              <p className='text-[12px] mdl:text-[16px]  text-[#505050] text-center h-[40px]'>Facebook</p>
            </div>
            <div className='flex items-center justify-center flex-col w-[32%] h-[100px]'>
              <button onClick={() => handleShare("whatsapp")} className=' flex items-center justify-center bg-[#25D366] rounded-full w-[60px] h-[60px]'>
                <FaWhatsapp className='text-white' size={28} />
              </button>
              <p className='text-[12px] mdl:text-[16px]  text-[#505050] text-center h-[40px]'>WhatsApp</p>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default ShareModal
