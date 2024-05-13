import { Loader } from 'lucide-react';

export default function Loading() {
  return <div className="mx-auto flex flex-col items-center justify-center bg-black/20 text-gray-400">
    <Loader className='animate-spin text-gray-400' />
    <p>Please wait, page is loading...</p>
  </div>;
}