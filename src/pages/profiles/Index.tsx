import React , { useState } from 'react';
import { Upload, message, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DropdownMenu from '../../components/dropdownMenu/dropdownMenu';

const ProfilePage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (info: any) => {
    if (info.file.status === 'done') {
      message.success('Image uploaded successfully!');
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImageUrl(reader.result as string);
      });
      reader.readAsDataURL(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error('Image upload failed.');
    }
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-start'>
      <Upload accept='image/*' showUploadList={false} onChange={handleImageUpload}>
        {imageUrl ? <Avatar size={128} src={imageUrl} /> : <Avatar size={128} icon={<UserOutlined />} />}
        <div className='mt-2 text-center'>
          <span className='text-sm text-gray-600'>Upload Image</span>
        </div>
      </Upload>
      <div className='w-full max-w-md mt-8'>
        <DropdownMenu label='Personal Information' onSave={() => console.log('Information saved.')} />
      </div>
      <div className='w-full max-w-md mt-8'>
        <DropdownMenu label='About Me' onSave={() => console.log('Information saved.')} />
      </div>
    </div>
  );
};

export default ProfilePage;
