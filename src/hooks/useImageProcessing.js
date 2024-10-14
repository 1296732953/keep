import { useCallback } from 'react';
import html2canvas from 'html2canvas';

function useImageProcessing() {
  const processImage = useCallback((image, type) => {
    // 处理图片逻辑
    console.log(`Processing ${type} image`);
  }, []);

  const generateScreenshot = useCallback((ref) => {
    if (ref.current) {
      html2canvas(ref.current, {
        scale: 2, // 提高截图质量
        useCORS: true, // 允许加载跨域图片
        allowTaint: true,
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'keep-screenshot.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  }, []);

  return { processImage, generateScreenshot };
}

export default useImageProcessing;
