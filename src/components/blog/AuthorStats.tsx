// AuthorStats component to display author statistics
'use client';

interface AuthorStatsProps {
  postsCount: number;
  followersCount: number;
  avgReadTime: string;
  joinDate: string;
}

const AuthorStats = ({ postsCount, followersCount, avgReadTime, joinDate }: AuthorStatsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Author Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{postsCount}</p>
          <p className="text-sm text-gray-600">Posts</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{followersCount}</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{avgReadTime}</p>
          <p className="text-sm text-gray-600">Avg Read Time</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{joinDate}</p>
          <p className="text-sm text-gray-600">Member Since</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorStats;