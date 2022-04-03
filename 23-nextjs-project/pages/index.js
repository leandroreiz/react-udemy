import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Guitar workshop',
    image:
      'https://images.unsplash.com/photo-1444623151656-030273ddb785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: '10b Watermill Road, Raheny, Dublin',
    description: 'A workshop for rock guitarists.',
  },

  {
    id: 'm2',
    title: 'Sport Cars Exhibition',
    image:
      'https://images.unsplash.com/photo-1558333924-237d26071691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80',
    address: '9 Clontarf Windmill, Clontarf, Dublin',
    description: 'Only sport cars allowed!',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
