export const share = async (
  dataUrl: string,
  { forceDownload = false } = {}
) => {
  if ((navigator as any).share && (window as any).fetch && !forceDownload) {
    const blob = await fetch(dataUrl).then((res) => res.blob());
    const file = new File([blob], 'פתק.png', { type: blob.type });
    await (navigator as any)
      .share({
        title: 'הצביעו לי!',
        text: 'צרו את הפתק שלכם עכשיו באתר https://petek.design',
        files: [file],
      })
      .catch(() => share(dataUrl, { forceDownload: true }));
  } else {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'פתק.png';
    a.click();
  }
  // }
  // if (navigator.canShare && navigator.canShare({ files: fileArray }))
};
