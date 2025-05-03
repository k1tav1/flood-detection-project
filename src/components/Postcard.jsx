function PostCard({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <p className="text-gray-800 text-lg font-semibold">{post.text}</p>
      <p className="text-sm text-gray-500 mt-2">Location: {post.location}</p>
      <p className="text-sm text-gray-500">Posted: {post.created_at}</p>
    </div>
  );
}

export default PostCard;