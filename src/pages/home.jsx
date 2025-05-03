import { useState, useEffect } from 'react';
import PostCard from '../components/Postcard';
import FloodMap from '../components/floodmap';

const mockFloodPosts = [
  { id: 1, text: "Heavy flooding in Nairobi near River Road", location: "Nairobi", created_at: "2025-04-30 10:00" },
  { id: 2, text: "Roads impassable in Mombasa due to floods", location: "Mombasa", created_at: "2025-04-30 09:30" },
  { id: 3, text: "Flood alert: Kisumu residents evacuate", location: "Kisumu", created_at: "2025-04-30 08:45" },
];

function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    setTimeout(() => {
      setPosts(mockFloodPosts);
      setFilteredPosts(mockFloodPosts);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = posts.filter(post =>
      post.location.toLowerCase().includes(term) || post.text.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Flood Detection Dashboard</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by location or keyword..."
            value={searchTerm}
            onChange={handleSearch}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchPosts}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition"
          >
            {loading ? 'Refreshing...' : 'Refresh Posts'}
          </button>
        </div>
        <FloodMap posts={filteredPosts} />
        {loading && <div className="spinner my-6"></div>}
        {!loading && filteredPosts.length === 0 && (
          <p className="text-gray-600 text-center text-lg">No posts found.</p>
        )}
        <div className="grid gap-6">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;