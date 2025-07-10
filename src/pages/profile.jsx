// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Heart, History, Settings, LogOut, Edit } from 'lucide-react';

import { UserAvatar } from '@/components/UserAvatar';
import { MenuItem } from '@/components/MenuItem';
export default function Profile(props) {
  const {
    $w
  } = props;
  const currentUser = $w.auth.currentUser || {
    name: '张美丽',
    nickName: 'meili',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  };
  const handleEditProfile = () => {
    alert('跳转到编辑资料页面');
  };
  const handleLogout = () => {
    if (confirm('确定要退出登录吗？')) {
      alert('已退出登录');
    }
  };
  const handleMenuItemClick = title => {
    alert(`跳转到${title}页面`);
  };
  return <div className="max-w-md mx-auto min-h-screen bg-white">
      {/* 顶部背景 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 w-full relative">
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <UserAvatar src={currentUser.avatarUrl} alt={currentUser.name} onEdit={handleEditProfile} />
        </div>
      </div>

      {/* 个人信息 */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">{currentUser.name}</h2>
        <p className="text-gray-500">@{currentUser.nickName}</p>
        <p className="text-gray-600 mt-2">前端开发工程师 | 北京</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm" onClick={handleEditProfile}>
            <Edit className="w-4 h-4 mr-1" />
            编辑资料
          </Button>
        </div>
      </div>

      {/* 数据统计 */}
      <div className="flex justify-around mt-8 px-6 py-4 bg-gray-50 rounded-lg mx-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">128</div>
          <div className="text-gray-500 text-sm">关注</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">356</div>
          <div className="text-gray-500 text-sm">粉丝</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">24</div>
          <div className="text-gray-500 text-sm">作品</div>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="mt-8 px-6">
        <MenuItem icon={<Heart className="w-5 h-5" />} title="我的收藏" subtitle="查看收藏的内容" onClick={() => handleMenuItemClick('我的收藏')} />
        <MenuItem icon={<History className="w-5 h-5" />} title="浏览历史" subtitle="查看浏览记录" onClick={() => handleMenuItemClick('浏览历史')} />
        <MenuItem icon={<Settings className="w-5 h-5" />} title="设置" subtitle="账号、通知等设置" onClick={() => handleMenuItemClick('设置')} />
      </div>

      {/* 底部操作 */}
      <div className="mt-12 px-6 pb-8">
        <Button variant="ghost" className="w-full py-3 bg-red-50 text-red-500 rounded-lg font-medium flex items-center justify-center hover:bg-red-100" onClick={handleLogout}>
          <LogOut className="w-5 h-5 mr-2" />
          退出登录
        </Button>
      </div>
    </div>;
}