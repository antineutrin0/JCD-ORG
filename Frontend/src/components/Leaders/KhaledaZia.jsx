import React from 'react';
import { Link } from 'react-router-dom';

export default function KhaledaZia() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow rounded-md">
      {/* Header */}
      <div className="bg-green-800 text-white text-xl font-semibold text-center py-3 rounded-t-md">
        Chairperson Begum Khaleda Zia
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row p-4 gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/k.jpg"
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
          <p><strong>Begum Khaleda Zia</strong> (Born: 15 August 1946) is the chairperson of the Bangladesh Nationalist Party-BNP who served as the Prime Minister of Bangladesh three times since 1991. She is the first woman to be elected as the prime minister of Bangladesh, and second in the Muslim world.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Early Life</h3>
          <p>Begum Zia was born to Iskandar Majumder and Taiyaba Majumder in Dinajpur District. Her father had migrated from Jalpaiguri in India to West Pakistan after Partition. The family originally hails from Feni district. She studied at Dinajpur Government Girls High School and later at Surendranath College. In 1960, she married Ziaur Rahman.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">After Marriage Life</h3>
          <p>As First Lady during President Ziaur Rahman's tenure, she met global leaders including Margaret Thatcher and Queen Juliana. After Zia's assassination in 1981, she joined BNP in 1982 and rose rapidly through party ranks, becoming Chairperson in 1984.</p>

          <p>She played a major role in restoring democracy during the military rule of General Ershad. Khaleda formed a seven-party alliance and led strong protests against the 1986 rigged election, choosing not to participate. From 1983 to 1990, she was detained seven times for her democratic efforts.</p>

          <p>In 1991, she led BNP to a historic win, becoming Bangladesh's first woman Prime Minister. Her government transformed Bangladesh into a parliamentary democracy and saw economic progress, especially in the RMG sector.</p>

          <p>She raised important issues globally, including the Ganges water-sharing at the UN and Rohingya refugee crisis at the White House. In 1996, she stepped down for a caretaker government and later led the opposition with BNP winning 116 seats.</p>

          <p>Returning to power in 2001 through a four-party alliance, Khaleda promised reforms and was globally recognized—ranked 29th by Forbes in 2005 among the most powerful women. She handed power to a caretaker government in 2006 and was arrested in 2007 by the military-backed regime.</p>

          <p>Her tenure saw advances in education: free primary education, scholarships for girls, and increased age limits for government jobs. She was elected in all constituencies she contested in 1991, 1996, 2001, and 2008.</p>

          <p>Since 2009, she renewed her call for democracy amidst authoritarian rule. She faced house arrest and was forcefully removed from her residence. In 2011, New Jersey's State Senate honoured her as a "Fighter for Democracy".</p>

          <p>In 2018, she was sentenced to 17 years on politically motivated charges. International observers including the US State Department and Amnesty International criticized the fairness of her trial and raised concerns about human rights violations.</p>
        </div>
      </div>
    </div>
  );
}
