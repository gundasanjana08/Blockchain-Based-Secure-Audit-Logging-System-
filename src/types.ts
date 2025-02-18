export interface AuditLog {
  id: string;
  timestamp: string;
  action: 'login' | 'file_modification' | 'access_request' | 'system_change';
  actor: string;
  resource: string;
  status: 'success' | 'failure' | 'suspicious';
  blockchainHash: string;
  blockNumber: number;
  anomalyScore: number;
  details: {
    ip?: string;
    location?: string;
    device?: string;
    [key: string]: any;
  };
}

export interface SystemStats {
  totalLogs: number;
  anomaliesDetected: number;
  blockchainSyncStatus: number;
  lastBlockHeight: number;
  activeUsers: number;
  systemHealth: number;
}