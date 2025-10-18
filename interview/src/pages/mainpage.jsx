import React from 'react'
import Banner from '../components/banner'
import { useLocation } from 'react-router-dom'
import Features from '../components/features';
import Howitlooks from '../components/howitlooks';
import Feedback from '../components/feedback';

const Mainpage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const user = params.get('user') || 'Interviewer';
  return (
    <div>
      <Banner user={user} />
      <Features/>
      <Howitlooks/>
      <Feedback/>
    </div>
  );
}

export default Mainpage
