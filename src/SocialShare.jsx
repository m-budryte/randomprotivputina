import React from 'react';
import {
   XIcon,
  FacebookShareButton,
  FacebookIcon,
  VKShareButton,
  VKIcon,
  OKIcon,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  ViberShareButton,
  TelegramIcon,
  WhatsappIcon,
  ViberIcon,
} from 'react-share';

import './SocialShare.css'; 

function SocialShare({ candidateName, candidateImage}) {
    const shareUrl = "https://randomprotivputina.com/";
    const hashtag = "РандомПротивПутина";
    const text = `Мой Кандидат: ${candidateName}. А что делаешь ты в Полдень Против Путина?`;
    const handleXShare = () => {
        const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtag)}`;
      
        // Open the share URL in a new window
        window.open(xShareUrl, '_blank');
      };
      
    return (
      <div className="social-share">
        <XIcon size={32} round={true} onClick={handleXShare} />
        <FacebookShareButton url={shareUrl} quote={text} hashtag={hashtag}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <VKShareButton url={shareUrl} title={text}>
          <VKIcon size={32} round={true} />
        </VKShareButton>
        <OKShareButton url={shareUrl} title={text}>
          <OKIcon size={32} round={true} />
        </OKShareButton>
        <TelegramShareButton url={shareUrl} title={text}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <WhatsappShareButton url={shareUrl} title={text}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <ViberShareButton url={shareUrl} title={text}>
          <ViberIcon size={32} round={true} />
        </ViberShareButton>
      </div>
    );    
}

export default SocialShare;