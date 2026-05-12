/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { Activity } from './types';
import { Plus, Download } from 'lucide-react';

const mockActivities: Activity[] = [
  { id: 'ACT001', communityName: '阳光花园', status: '销售中', dealer: '张经理', orderCount: 120, refundCount: 2, a4Usage: 50, photoUsage: 30, storeSubsidy: 100, dealerSubsidy: 50 },
  { id: 'ACT002', communityName: '书香门第', status: '已暂停', dealer: '李主管', orderCount: 80, refundCount: 0, a4Usage: 40, photoUsage: 20, storeSubsidy: 80, dealerSubsidy: 40 },
];

export default function App() {
  const [filterStatus, setFilterStatus] = useState<string>('全部');
  const [activities] = useState<Activity[]>(mockActivities);

  const filteredActivities = filterStatus === '全部' 
    ? activities 
    : activities.filter(a => a.status === filterStatus);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <nav className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-lg font-bold tracking-tight">爱萝卜管理后台</span>
          </div>
          <div className="flex space-x-8 h-16">
            <a href="#" className="flex items-center border-b-2 border-blue-600 text-blue-600 font-medium">社区券包活动管理</a>
            <a href="#" className="flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors">券包订单列表</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-semibold">管理员</p>
            <p className="text-xs text-slate-400">admin@ailuobo.com</p>
          </div>
          <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        </div>
      </nav>

      <main className="p-8 flex-grow flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">活动列表</h1>
            <p className="text-sm text-slate-500 mt-1">查看、编辑及管理社区券包推广活动</p>
          </div>
          <div className="flex space-x-3">
            <button className="border border-slate-200 bg-white text-slate-600 px-4 py-2 rounded-lg font-medium flex items-center hover:bg-slate-50">
              <Download size={16} className="mr-2" /> 导出
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-blue-700">
              <Plus size={16} className="mr-2" /> 新增活动
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex items-center space-x-6">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase font-bold text-slate-400 mb-1">状态筛选</span>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded px-3 py-1.5 text-sm w-40"
            >
              <option>全部</option>
              <option>销售中</option>
              <option>已暂停</option>
            </select>
          </div>
          <div className="flex flex-col flex-grow">
            <span className="text-[11px] uppercase font-bold text-slate-400 mb-1">搜索社区</span>
            <input type="text" placeholder="输入社区名称或ID..." className="bg-slate-50 border border-slate-200 rounded px-3 py-1.5 text-sm w-full" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 flex-grow flex flex-col overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-slate-50 sticky top-0">
                <tr>
                  <th className="pl-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">社区名称</th>
                  <th className="py-3 text-left text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">活动ID</th>
                  <th className="py-3 text-left text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">状态</th>
                  <th className="py-3 text-left text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">推广经销商</th>
                  <th className="py-3 text-center text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">订单</th>
                  <th className="py-3 text-center text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">退款</th>
                  <th className="py-3 text-center text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">A4券</th>
                  <th className="py-3 text-center text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">照片券</th>
                  <th className="py-3 text-left text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">门店补贴</th>
                  <th className="py-3 text-left text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">经销商补贴</th>
                  <th className="pr-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredActivities.map(activity => (
                  <tr key={activity.id}>
                    <td className="pl-6 py-4 text-sm text-slate-900 font-medium">{activity.communityName}</td>
                    <td className="py-4 text-sm text-slate-500 font-mono">{activity.id}</td>
                    <td className="py-4 text-sm">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${activity.status === '销售中' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-slate-500">{activity.dealer}</td>
                    <td className="py-4 text-sm text-slate-600 text-center font-semibold">{activity.orderCount}</td>
                    <td className="py-4 text-sm text-red-500 text-center">{activity.refundCount}</td>
                    <td className="py-4 text-sm text-slate-600 text-center">{activity.a4Usage}</td>
                    <td className="py-4 text-sm text-slate-600 text-center">{activity.photoUsage}</td>
                    <td className="py-4 text-sm text-slate-600">¥{activity.storeSubsidy.toFixed(2)}</td>
                    <td className="py-4 text-sm text-slate-600">¥{activity.dealerSubsidy.toFixed(2)}</td>
                    <td className="pr-6 py-4 text-sm text-right">
                      <button className="text-blue-600 hover:underline font-medium mr-3">编辑</button>
                      <button className="text-slate-400 hover:text-slate-600">更多</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-12 border-t border-slate-100 flex items-center justify-between px-6 bg-slate-50 mt-auto">
            <span className="text-xs text-slate-500">显示共 {filteredActivities.length} 条记录</span>
            <div className="flex space-x-1">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400">«</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-600 bg-blue-600 text-white font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400">»</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
