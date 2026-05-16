import { FaCog, FaBrain, FaDesktop } from 'react-icons/fa';

const Secondsection = () => {
  const cards = [
    {
      icon: <FaDesktop className="text-4xl" />,
      title: 'Digital Skills',
      description:
        'Building practical technology skills so young people can learn, create, and compete in the digital economy.',
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'Entrepreneurship & Innovation',
      description:
        'Supporting youth-led ideas through mentorship, innovation labs, and pathways to self-reliance.',
    },
    {
      icon: <FaCog className="text-4xl" />,
      title: 'Community Empowerment',
      description:
        'Connecting underserved communities with programs, partners, and opportunities that drive lasting impact.',
    },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="w-[90%] mx-auto py-16 bg-gray-50">
        <div className="text-center my-10 md:my-20">
          <span className="text-green-500 text-2xl font-semibold">
            What we do
          </span>
          <h2 className="md:text-5xl text-2xl font-semibold text-blue-950 md:w-[600px] md:mx-auto mt-10">
            Empowering Youth and Communities for a Stronger Future
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8 md:px-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative h-96 rounded-lg  overflow-hidden shadow-lg ${
                index === 1 ? 'bg-green-500 text-white' : 'bg-white group'
              }`}
            >
              {index !== 1 && (
                <div className="absolute inset-0 bg-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              )}

              <div
                className={`relative flex items-center justify-center flex-col  z-10 p-6 transition-colors duration-500 ${
                  index === 1
                    ? 'text-white'
                    : 'text-blue-900 group-hover:text-white'
                }`}
              >
                <div className="flex justify-center  items-center mb-4">
                  <div
                    className={`p-4 rounded-full ${
                      index === 1 ? 'bg-blue-950' : 'bg-green-100'
                    }`}
                  >
                    {card.icon}
                  </div>
                </div>

                <h4 className="text-xl  font-bold mb-2 mt-10">{card.title}</h4>
                <p className="text-sm text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secondsection;


