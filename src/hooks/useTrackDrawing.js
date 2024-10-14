import { useCallback } from 'react';

function useTrackDrawing() {
  const initializeDrawing = useCallback(() => {
    // 初始化绘图逻辑
    console.log('Initializing drawing');
  }, []);

  return { initializeDrawing };
}

export default useTrackDrawing;
