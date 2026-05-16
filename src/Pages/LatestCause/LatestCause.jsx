import img1 from '../../assets/img/gallery/case1.png';
import img2 from '../../assets/img/gallery/case2.png';
import img3 from '../../assets/img/gallery/case3.png';

// TODO: Replace with live program data from CMS or API
const campaigns = [
  {
    image: img1,
    title: 'Youth Digital Skills Accelerator',
    progress: 70,
    enrolled: '120',
    capacity: '200',
  },
  {
    image: img2,
    title: 'Entrepreneurship & Innovation Lab',
    progress: 45,
    enrolled: '45',
    capacity: '80',
  },
  {
    image: img3,
    title: 'Community Mentorship Network',
    progress: 60,
    enrolled: '60',
    capacity: '100',
  },
  {
    image: img2,
    title: 'STEM & Coding for Youth',
    progress: 35,
    enrolled: '35',
    capacity: '60',
  },
  {
    image: img3,
    title: 'Leadership & Life Skills Workshop',
    progress: 50,
    enrolled: '50',
    capacity: '75',
  },
  {
    image: img1,
    title: 'Community Innovation Challenge',
    progress: 55,
    enrolled: '28',
    capacity: '50',
  },
];

function LatestCause() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-[90%] max-w-6xl px-4 sm:px-6">
        <header className="flex h-[220px] items-center justify-center sm:h-[280px]">
          <h1 className="text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl">
            Programs &amp; Impact
          </h1>
        </header>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {campaigns.map((campaign, index) => (
              <div key={index} className="text-center mb-10">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="rounded-lg w-full h-48 object-cover hover:scale-[1.05]"
                />
                <h3 className="text-2xl text-left font-bold text-blue-950 mt-4 px-5">
                  {campaign.title}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 mx-5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${campaign.progress}%` }}
                  />
                </div>
                <p className="text-sm text-green-600 mt-1 font-bold">
                  {campaign.progress}% toward capacity
                </p>
                <div className="flex justify-between text-sm px-5 font-bold text-gray-700 mt-4">
                  <span>Enrolled: {campaign.enrolled}</span>
                  <span>Capacity: {campaign.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default LatestCause;
