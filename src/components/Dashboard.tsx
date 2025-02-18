import React, { useState } from 'react';
import {
  Shield,
  AlertTriangle,
  Activity,
  Users,
  FileText,
  Database,
  Link,
  Search,
  Clock,
  Server,
  Cpu
} from 'lucide-react';

import { AuditLog, SystemStats } from '../types';

const mockStats: SystemStats = {
  totalLogs: 145892,
  anomaliesDetected: 23,
  blockchainSyncStatus: 99.9,
  lastBlockHeight: 1234567,
  activeUsers: 42,
  systemHealth: 98.5
};

const mockLogs: AuditLog[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    action: 'login',
    actor: 'sanjana@gmail.com',
    resource: 'admin-panel',
    status: 'suspicious',
    blockchainHash: '0x7d8f...3e2a',
    blockNumber: 1234567,
    anomalyScore: 0.85,
    details: {
      ip: '192.168.1.100',
      location: 'New York, US',
      device: 'MacBook Pro'
    }
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    action: 'file_modification',
    actor: 'system.admin',
    resource: '/etc/config/security.conf',
    status: 'success',
    blockchainHash: '0x3a1f...9b4c',
    blockNumber: 1234566,
    anomalyScore: 0.12,
    details: {
      ip: '10.0.0.50',
      location: 'Internal Network',
      device: 'Server-01'
    }
  }
];

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold">BlockGuard Audit</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-green-400" />
                <span>Blockchain Sync: {mockStats.blockchainSyncStatus}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-blue-400" />
                <span>Block Height: {mockStats.lastBlockHeight.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-400">Total Logs</h3>
              <FileText className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{mockStats.totalLogs.toLocaleString()}</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-400">Anomalies</h3>
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{mockStats.anomaliesDetected}</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-400">Active Users</h3>
              <Users className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{mockStats.activeUsers}</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-400">System Health</h3>
              <Cpu className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{mockStats.systemHealth}%</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 col-span-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400">Blockchain Status</h3>
              <Database className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Sync Status</span>
                <span className="text-sm font-medium">{mockStats.blockchainSyncStatus}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${mockStats.blockchainSyncStatus}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-lg bg-slate-800/50 backdrop-blur-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search audit logs by user, action, or resource..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Audit Logs */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Recent Audit Logs
          </h2>
          <div className="space-y-4">
            {mockLogs.map((log) => (
              <div key={log.id} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        log.status === 'suspicious' ? 'bg-red-900/50 text-red-400' :
                        log.status === 'failure' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-green-900/50 text-green-400'
                      }`}>
                        {log.status.toUpperCase()}
                      </span>
                      <h3 className="font-medium text-slate-200">{log.action.replace('_', ' ').toUpperCase()}</h3>
                    </div>
                    <p className="text-sm text-slate-400">
                      Actor: {log.actor} • Resource: {log.resource}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span>{new Date(log.timestamp).toLocaleString()}</span>
                      <span>IP: {log.details.ip}</span>
                      <span>Location: {log.details.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-2 text-sm">
                      <Link className="h-4 w-4 text-blue-400" />
                      <span className="font-mono text-slate-400">
                        Block #{log.blockNumber}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono mt-1">
                      Hash: {log.blockchainHash}
                    </span>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-xs text-slate-400">Anomaly Score:</span>
                      <span className={`text-sm font-medium ${
                        log.anomalyScore > 0.7 ? 'text-red-400' :
                        log.anomalyScore > 0.3 ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {(log.anomalyScore * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;