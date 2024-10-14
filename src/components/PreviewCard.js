import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";

function PreviewCard({
  screenshot,
  bgImage,
  avatarImage,
  onGenerateScreenshot,
}) {
  const previewRef = useRef(null);

  return (
    <Card className="preview-card">
      <Card.Body>
        <Card.Title className="text-center mb-3">预览</Card.Title>
        <div className="preview-image" ref={previewRef}>
          <div
            className="background-layer"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + bgImage})`,
            }}
          ></div>
          <img
            src={process.env.PUBLIC_URL + "/images/1.png"}
            alt="Top overlay"
            className="top-overlay"
          />
          <div className="content-layer">
            <div className="keep-title">{screenshot.keepTitle}</div>
            <div className="keep-miles">
              <span className="miles-number">
                {screenshot.miles.toFixed(2)}
              </span>
              <span className="miles-unit">公里</span>
            </div>
            <div className="keep-info">
              <div className="keep-user">
                <img
                  src={
                    avatarImage ||
                    process.env.PUBLIC_URL + "/images/default_portrait.png"
                  }
                  alt="User avatar"
                  className="user-avatar"
                />
                <span className="username">{screenshot.username}</span>
              </div>
              <div className="keep-date">
                <span>
                  {screenshot.date.toLocaleString("zh-CN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
              </div>
              <div className="keep-weather">
                <img
                  src={process.env.PUBLIC_URL + "/images/weather1.png"}
                  alt="Weather"
                  className="weather-icon"
                />
                <div className="weather-text">
                  <span>{screenshot.temperature}°C</span>
                  <span>{screenshot.humidity}%</span>
                </div>
              </div>
            </div>
            <div className="keep-stats">
              <div className="stat">
                <span className="stat-value">{screenshot.pace}</span>
              </div>
              <div className="stat">
                <span className="stat-value">{screenshot.duration}</span>
              </div>
              <div className="stat">
                <span className="stat-value">{screenshot.calories}</span>
              </div>
            </div>
          </div>
        </div>
        <Button onClick={() => onGenerateScreenshot(previewRef)} className="generate-btn mt-3">
          生成截图
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PreviewCard;
