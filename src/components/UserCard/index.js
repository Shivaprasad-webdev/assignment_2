import { Card, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import React from 'react';

const UserCard = ({ user, onEdit, onDelete, onToggleLike }) => {
  const isLiked = user.liked || false;

  return (
    <Card
      title={user.name}
      style={{ width: 300 }}
      extra={
        <Button type="link" onClick={() => onEdit(user)}>
          <EditOutlined /> Edit
        </Button>
      }
    >
      <div className="user-avatar" style={{ textAlign: 'center', marginBottom: 12 }}>
        <img
          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}&mood=happy`}
          alt={user.username}
          width={80}
        />
      </div>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>

      <Space style={{ marginTop: 12 }}>
        <Button
          type={isLiked ? 'primary' : 'default'}
          icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
          onClick={() => onToggleLike(user.id)}
        >
          {isLiked ? 'Liked' : 'Like'}
        </Button>

        <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(user.id)}>
          Delete
        </Button>
      </Space>
    </Card>
  );
};

export default UserCard;
