import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center text-gray-400">
        <Loader className='animate-spin' />
        <p className="mt-4">Please wait, page is loading...</p>
      </div>
    </div>
  );
}
