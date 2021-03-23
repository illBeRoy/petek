export const share = async (
  dataUrl: string,
  { forceDownload = false } = {}
) => {
  if ((navigator as any).share && (window as any).fetch && !forceDownload) {
    const blob = await fetch(dataUrl).then((res) => res.blob());

    try {
      (navigator.clipboard as any)
        .write([new (window as any).ClipboardItem({ 'image/jpeg': blob })])
        ?.catch?.(() => void 0);
    } catch (err) {
      // do nothing
    }

    const file = new File([blob], 'petek.jpg', { type: 'image/jpeg' });
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
