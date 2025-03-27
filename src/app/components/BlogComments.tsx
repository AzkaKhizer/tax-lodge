import { useState } from 'react';
import Image from 'next/image';
import { Send } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

type Comment = {
  name: string;
  date: string;
  text: string;
  avatar: string;
};

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      name: 'Matthew Larson',
      date: '8 December 2025',
      text: 'This is super helpful! I’ve always found GST and superannuation a bit confusing, but your breakdown makes it much clearer. Excited to read more about lodging taxes online!',
      avatar: '/author1.png',
    },
    {
      name: 'Murtaza Ali Haider',
      date: '9 December 2025',
      text: 'Thank you so much! I’m glad you found the breakdown helpful. I’ll definitely be sharing more insights on lodging taxes online soon — stay tuned!',
      avatar: '/author2.png',
    },
  ]);

  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newEntry: Comment = {
        name: 'You',
        date: new Date().toLocaleDateString(),
        text: newComment,
        avatar: '/your-avatar.jpg',
      };
      setComments([...comments, newEntry]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-auto md:p-4 bg-white md:shadow-md rounded-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Add Comments</h2>

      {/* Input and Send Button */}
      <div className='flex justify-between'>
        <div>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a comment...."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md transition-all  focus:ring-orange-500 hover:border-gray-500"
            />
            <button
              onClick={handleAddComment}
              className="text-black text-[30px]  md:ml-10 hover:bg-gray-600 rounded-full px-3 py-1 hover:text-white transition duration-300"
            >
              ➤
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <div className='hidden md:block'>
            <div className="mt-3 flex justify-start items-center gap-3 mb-4 text-black">
              <span className="font-semibold">Share:</span>
              <div className='bg-orange-100 rounded-full p-2 hover:bg-orange-300 transition-all duration-300'>
                <Send className="w-[20px] h-[20px] cursor-pointer hover:text-orange-600 transition" />
              </div>
              <div className='bg-orange-100 rounded-full p-2 hover:bg-orange-300 transition-all duration-300'>
                <FaInstagram className="w-[20px] h-[20px] cursor-pointer hover:text-orange-600 transition" />
              </div>
              <div className='bg-orange-100 rounded-full p-2 hover:bg-orange-300 transition-all duration-300'>
                <FaFacebookF className="w-[20px] h-[20px] cursor-pointer hover:text-orange-600 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {comments.map((comment, index: number) => (
        <div
          key={index}
          className={`p-4 rounded-md shadow-md mb-4 transition-all duration-300 ${
            index % 2 === 0 ? 'bg-orange-100' : 'bg-gray-100'
          } hover:shadow-lg hover:scale-[1.02]`}
        >
          <div className='flex justify-between'>
            <div className="flex items-center gap-2 mb-2">
              <Image src={comment.avatar} alt={comment.name} width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-bold">{comment.name}</p>
                <p className="text-sm text-gray-500">{comment.date}</p>
              </div>
            </div>
            <div>
              <button className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition">
                ↪ Reply
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-2">{comment.text}</p>

          {/* Delete Button */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-sm text-red-600 hover:text-red-800 hover:scale-105 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
