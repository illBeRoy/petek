import { isIos } from './ios';

export const share = async (dataUrl: string) => {
  if ((navigator as any).share && (window as any).fetch && !isIos) {
    const blob = await fetch(dataUrl).then((res) => res.blob());
    const file = new File([blob], 'petek.jpg', { type: blob.type });
    await (navigator as any).share({
      title: 'הצביעו לי!',
      text: 'צרו את הפתק שלכם עכשיו באתר https://petek.design',
      files: [file],
    });
  } else {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'פתק.jpg';
    a.click();
  }
};
