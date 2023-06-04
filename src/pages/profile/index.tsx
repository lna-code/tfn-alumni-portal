import React, { useEffect, useState } from 'react';
import { Upload, Avatar, Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import profilePin from '../../assets/imgs/profilePin.png';
import PersonalInfoForm from '@/components/profiles/PersonalInfoForm';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectCommonListState } from '@/store/commonList/commonListSlice';
import { getListAction } from '@/store/commonList/commonListAction';
const { Panel } = Collapse;

const ProfilePage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useAppDispatch();
  const { currentProfile } = useAppSelector(selectCommonListState);

  console.log(currentProfile);
  const handleImageUpload = () => {
    setImageUrl('https://www.sbs.ox.ac.uk/sites/default/files/Leye.PNG');
  };

  useEffect(() => {
    dispatch(getListAction({ query: 'auth', list: 'currentProfile' }));
  }, []);

  return (
    <div className='flex flex-col items-start justify-center xl:px-16 lg:px-4 md:px-5 px-2 pb-36'>
      <div className='md:py-12 py-8 flex md:flex-row md:space-x-6 flex-col space-x-0 md:space-y-0 space-y-6 items-center w-full'>
        <Upload className='relative' accept='image/*' showUploadList={false} onChange={handleImageUpload}>
          <Avatar className='border-2 border-[#698C30]' icon={<UserOutlined />} size={168} src={imageUrl} />
          <span className='absolute right-0 bottom-0'>
            <Image width={30} height={30} src={profilePin.src} alt='Profin pin' />
          </span>
        </Upload>
        <div className='flex justify-center md:text-start text-center flex-col space-y-2'>
          <h1 className='md:text-4xl text-3xl font-bold'>Profile</h1>
          <p className='md:text-lg text-base text-gray-600'>Update your photo and personal details</p>
        </div>
      </div>
      <Collapse expandIconPosition='end' bordered={false} className='w-full mt-8 flex-col space-y-10 bg-white' accordion>
        <Panel className='md:p-6 p-4 shadow-lg rounded-lg text-lg font-semibold' header='Personal Information' key='1'>
          <PersonalInfoForm />
        </Panel>
        <Panel className='md:p-6 p-4 shadow-lg rounded-lg  text-lg font-semibold' header='About Me' key='2'>
          <PersonalInfoForm />
        </Panel>
        <Panel className='md:p-6 p-4 shadow-lg rounded-lg text-lg font-semibold' header='Work/Education' key='3'>
          <PersonalInfoForm />
        </Panel>
        <Panel className='md:p-6 p-4 shadow-lg rounded-lg text-lg font-semibold' header='Skills' key='4'>
          <PersonalInfoForm />
        </Panel>
        <Panel className='md:p-6 p-4 shadow-lg rounded-lg text-lg font-semibold' header='Social Media' key='5'>
          <PersonalInfoForm />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ProfilePage;
