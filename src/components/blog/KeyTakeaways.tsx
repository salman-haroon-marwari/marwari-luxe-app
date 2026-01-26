'use client';

interface KeyTakeawaysProps {
  takeaways: string[];
}

const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
  if (!takeaways || takeaways.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-blue-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Key Takeaway
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {takeaways.map((takeaway, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-2 py-1 whitespace-wrap text-[10px] text-gray-700">
                      {takeaway}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;