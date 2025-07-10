// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui';
// @ts-ignore;
import { Camera } from 'lucide-react';

export function UserAvatar({
  src,
  alt,
  onEdit
}) {
  return <div className="relative">
      <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
      <Button onClick={onEdit} className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <Camera className="w-4 h-4" />
      </Button>
    </div>;
}