
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();

  // Automatically redirect to the Akhtiyar screen
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default Index;
