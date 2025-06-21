import React from 'react';
import { Link } from 'react-router-dom';

export default function TariqueRahman() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow rounded-md">
      {/* Header */}
      <div className="bg-green-800 text-white text-xl font-semibold text-center py-3 rounded-t-md">
        Acting Chairman Tarique Rahman
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row p-4 gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/t.jpg"
            alt="Tarique Rahman"
            className="w-64 h-auto rounded-md object-cover"
          />
          <Link to="/" className="block mt-4">
            <button className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition">
              Home
            </button>
          </Link>
          <Link to="/leaders/shaheed-president-ziaur-rahman" className="block mt-4">
            <button className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition">
              Shaheed President Ziaur Rahman
            </button>
          </Link>
          <Link to="/leaders/Chairperson-Begum-Khaleda-Zia" className="block mt-4">
            <button className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition">
              Chairperson Begum Khaleda Zia
            </button>
          </Link>
          <Link to="/leaders/Acting-Chairman-Tarique-Rahman" className="block mt-4">
            <button className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition">
              Acting Chairman Tarique Rahman
            </button>
          </Link>
        </div>

        {/* Text */}
        <div className="text-gray-800 text-justify leading-relaxed max-w-3xl">
          <p><strong>Tarique Rahman</strong> (Born: 20 November 1967) is the Acting Chairman of the Bangladesh Nationalist Party-BNP. He previously served as the Senior Vice-Chairman and Senior Joint Secretary of the party.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Early Life</h3>
          <p>Tarique Rahman witnessed Bangladesh’s liberation struggles from a young age. In March 1971, his father, Shaheed President Ziaur Rahman, declared independence and launched the liberation movement. During this time, Tarique, along with his mother Begum Khaleda Zia and brother, was arrested. They were released on December 16, 1971, upon Bangladesh’s victory. He was among the youngest prisoners of war during that time.</p>

          <p>He completed his early education at BAF Shaheen College and later enrolled in the Department of International Relations at the University of Dhaka in the 1980s. He studied political philosophy and thinkers like Socrates, Plato, Locke, Rousseau, and Marx. In 1986, he addressed a press conference protesting electoral injustice, facing frequent house arrests under the Ershad regime.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Political Career</h3>
          <p>In 1988, he joined BNP at the grassroots level in Gabtali Upazila and actively participated in the anti-Ershad movement. He campaigned across the country alongside his mother before the 1991 elections, which saw BNP’s victory and Khaleda Zia becoming the first female Prime Minister of Bangladesh.</p>

          <p>Tarique initiated democratic practices within BNP’s internal elections, starting with the Bogura district in 1993. He promoted participatory leadership, encouraging other districts to follow the model.</p>

          <p>Before the 2001 election, he focused on local governance and policy research and contributed to BNP's electoral landslide. In 2002, he was appointed Senior Joint Secretary of BNP. In 2005, he conducted a nationwide grassroots outreach campaign to strengthen the party’s base.</p>

          <p>He educated citizens on pro-people policies including subsidies for farmers, female education stipends, and anti-plastic awareness. He personally responded to over 18,000 participants in the grassroots conference.</p>

          <p>In 2007, after a military-backed regime took power, Tarique was arrested and tortured. Multiple charges were filed under political pressure. He later moved abroad for treatment.</p>

          <p>He was elected Senior Vice-Chairman of BNP in 2009. After his mother’s imprisonment in 2018, he became the Acting Chairman and has led the movement for restoring democracy since then.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Personal Life</h3>
          <p>In 1994, he married Dr. Zubaida Rahman, daughter of Rear Admiral Mahbub Ali Khan. She is a cardiologist trained at Dhaka Medical College. The couple has a daughter named Zaima Zarnaz Rahman.</p>
        </div>
      </div>
    </div>
  );
}
