import React, { useReducer, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PreviewCard from "./components/PreviewCard";
import SettingsCard from "./components/SettingsCard";
import { screenshotReducer, initialState } from "./reducers/screenshotReducer";
import { ScreenshotContext } from "./contexts/ScreenshotContext";
import useImageProcessing from "./hooks/useImageProcessing";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(screenshotReducer, initialState);
  const [avatarImage, setAvatarImage] = useState(null);
  const { processImage, generateScreenshot } = useImageProcessing();

  const handleAvatarChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatarImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBgImageChange = (input) => {
    if (typeof input === 'string') {
      // 预设背景图片
      dispatch({ type: 'SET_BG_IMAGE', payload: input });
    } else if (input instanceof File) {
      // 自定义上传的背景图片
      processImage(input, 'bgImage');
    }
  };

  return (
    <ScreenshotContext.Provider value={{ state, dispatch }}>
      <Container fluid className="app-container">
        <h1 className="text-center mb-4 app-title">运动截图生成器</h1>
        <Row className="justify-content-center">
          <Col md={6} lg={5} className="mb-4">
            <PreviewCard 
              screenshot={state.screenshot} 
              bgImage={state.bgImage}
              avatarImage={avatarImage}
              onGenerateScreenshot={generateScreenshot}
            />
          </Col>
          <Col md={6} lg={5}>
            <SettingsCard 
              screenshot={state.screenshot}
              onInputChange={(name, value) => dispatch({ type: 'UPDATE_FIELD', payload: { name, value } })}
              onBgImageChange={handleBgImageChange}
              onAvatarChange={handleAvatarChange}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={12} className="text-center">
            <p className="disclaimer">
              免责声明：本工具仅供学习和娱乐目的使用。请勿将生成的图片用于欺骗或其他不当用途。使用本工具所产生的任何后果由用户自行承担。
            </p>
          </Col>
        </Row>
      </Container>
    </ScreenshotContext.Provider>
  );
}

export default App;
