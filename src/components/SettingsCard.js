import React from 'react';
import { Card, Form } from 'react-bootstrap';

function SettingsCard({ screenshot, onInputChange, onBgImageChange, onAvatarChange }) {
  const backgroundOptions = [
    { value: '/images/bg1_1.png', label: '背景 1' },
    { value: '/images/bg1_2.png', label: '背景 2' },
    { value: '/images/bg1_3.png', label: '背景 3' },
    { value: '/images/bg1_4.png', label: '背景 4' },
    { value: '/images/bg1_5.png', label: '背景 5' },
    { value: '/images/bg1_empty.png', label: '空白背景 1' },
    { value: '/images/bg1_empty2.png', label: '空白背景 2' },
    { value: '/images/bg2_empty.png', label: '空白背景 3' },
    { value: '/images/bg3_empty.png', label: '空白背景 4' },
  ];

  return (
    <Card className="settings-card">
      <Card.Body>
        <Card.Title className="text-center mb-3">数据设置</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>用户名</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={screenshot.username}
              onChange={(e) => onInputChange('username', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Keep标题</Form.Label>
            <Form.Control
              type="text"
              name="keepTitle"
              value={screenshot.keepTitle}
              onChange={(e) => onInputChange('keepTitle', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>公里数</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              name="miles"
              value={screenshot.miles}
              onChange={(e) => onInputChange('miles', parseFloat(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>平均配速</Form.Label>
            <Form.Control
              type="text"
              name="pace"
              value={screenshot.pace}
              onChange={(e) => onInputChange('pace', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>用时</Form.Label>
            <Form.Control
              type="text"
              name="duration"
              value={screenshot.duration}
              onChange={(e) => onInputChange('duration', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>消耗卡路里</Form.Label>
            <Form.Control
              type="number"
              name="calories"
              value={screenshot.calories}
              onChange={(e) => onInputChange('calories', parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>日期时间</Form.Label>
            <Form.Control
              type="datetime-local"
              name="date"
              value={screenshot.date.toISOString().slice(0, 16)}
              onChange={(e) => onInputChange('date', new Date(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>温度 (°C)</Form.Label>
            <Form.Control
              type="number"
              name="temperature"
              value={screenshot.temperature}
              onChange={(e) => onInputChange('temperature', parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>湿度 (%)</Form.Label>
            <Form.Control
              type="number"
              name="humidity"
              value={screenshot.humidity}
              onChange={(e) => onInputChange('humidity', parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>背景图片</Form.Label>
            <Form.Select
              onChange={(e) => onBgImageChange(e.target.value)}
              value={screenshot.bgImage}
            >
              {backgroundOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>自定义背景图片</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => onBgImageChange(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>用户头像</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => onAvatarChange(e.target.files[0])}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SettingsCard;
