// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { ChevronRight } from 'lucide-react';

export function MenuItem({
  icon,
  title,
  subtitle,
  onClick
}) {
  return <Button variant="ghost" className="w-full mb-4 p-3 bg-white rounded-lg flex items-center cursor-pointer hover:bg-gray-50" onClick={onClick}>
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <div className="font-medium">{title}</div>
        <div className="text-gray-500 text-sm">{subtitle}</div>
      </div>
      <ChevronRight className="text-gray-400" />
    </Button>;
}