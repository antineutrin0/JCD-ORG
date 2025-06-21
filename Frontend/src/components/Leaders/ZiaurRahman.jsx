import React from 'react';
import { Link } from 'react-router-dom';

export default function ZiaurRahman() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow rounded-md">
      {/* Header */}
      <div className="bg-green-800 text-white text-xl font-semibold text-center py-3 rounded-t-md">
        Lieutenant General Ziaur Rahman Bir Uttam
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row p-4 gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/z.jpg"
            alt="Ziaur Rahman"
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
          <p><strong>Ziaur Rahman</strong> (1936–1981) was the founder of the Bangladesh Nationalist Party and a valiant freedom fighter. As Chief of Army Staff and later elected President, he defined Bangladeshi Nationalism and introduced multi-party democracy.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Early Life</h3>
          <p>Zia was born on 19 January 1936 in Bagbari, Bogra. His early education spanned Calcutta and Karachi, leading to military training at the Pakistan Military Academy in Kakul, where he joined in 1953.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Life in Army</h3>
          <p>Commissioned in 1955, he served in Pakistan and East Bengal. He fought heroically in the 1965 war and became an instructor and staff officer. In 1970, he became second-in-command of the 8th East Bengal Regiment in Chittagong.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Heroism at the Liberation War</h3>
          <p>On 25 March 1971, Zia rebelled against Pakistan. He declared Bangladesh’s independence from Kalurghat Radio on 26 March. He led BDF Sector 1 and later Sector 11, forming the civil administration in Roumari. For his bravery, he was awarded 'Bir Uttam'.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Political Rise</h3>
          <p>After the war, he became deputy chief of staff, then army chief in 1975. The 7 November movement brought him to power. By 1977, he was President of Bangladesh and focused on restoring order, professionalism, and law enforcement strength.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Visionary Statesman</h3>
          <p>Zia amended the constitution to reflect Islamic values, reintroduced democratic elections, and formed the BNP in 1978. He promoted Bangladeshi Nationalism based on territory and inclusion rather than language or religion.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Economic Reforms</h3>
          <p>Zia prioritized private sector growth, food self-sufficiency, and rural development. His 19-Point Programme focused on agriculture, decentralization, family planning, literacy, and grassroots governance through Gram Sarkar.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">International Role</h3>
          <p>Zia reoriented foreign policy toward Islamic and regional solidarity. He strengthened ties with China, the US, and Muslim countries. His efforts laid the groundwork for SAARC, launched in Dhaka in 1985.</p>

          <p className="mt-4">Ziaur Rahman was assassinated on 30 May 1981 in Chittagong. He is buried at Sher-e-Banglanagar, Dhaka. His legacy lives on through his contributions to Bangladesh’s independence, politics, and national identity.</p>
        </div>
      </div>
    </div>
  );
}
