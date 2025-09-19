
import { Modal, Form, Input } from 'antd';

const EditUserModal = ({ visible, user, onSave, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        onSave({ ...user, ...values });
        form.resetFields();
      })
      .catch(info => {
        console.log('Validation failed:', info);
      });
  };

  return (
    <Modal
      title={`Edit: ${user.name}`}
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Save"
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
        }}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Website" name="website">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
