import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://leandroreis:pFbj4SsLTXEFC2vh@cluster0.a14uh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsColletion = db.collection('meetups');

  const meetups = await meetupsColletion.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
