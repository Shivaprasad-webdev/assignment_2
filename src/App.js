import React, { useEffect, useState } from 'react';
import './App.css';
import { Row, Col, Typography, Spin,message} from 'antd';
import UserCard from './components/UserCard';
import EditUserModal from './components/EditUserModal';

const { Title } = Typography;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
  const usersWithLike = data.map(user => ({ ...user, liked: false }));
        setUsers(usersWithLike);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch users', err);
        setLoading(false);
        message.error('Failed to load users');
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsModalOpen(false);
    setSelectedUser(null);
    message.success('User updated');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleToggleLike = (userId) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, liked: !user.liked } : user
    );
    setUsers(updatedUsers);
  };

  const handleDelete = (userId) => {
    const filtered = users.filter(user => user.id !== userId);
    setUsers(filtered);
    message.success('User deleted');
  };

  return (
    <div className="container">
      <Title level={2} style={{ textAlign: 'center' }}>User Profiles</Title>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: 100 }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[24, 24]} justify="center">
          {users.map(user => (
            <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
              <UserCard
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleLike={handleToggleLike}
              />
            </Col>
          ))}
        </Row>
      )}

      {selectedUser && (
        <EditUserModal
          visible={isModalOpen}
          user={selectedUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
