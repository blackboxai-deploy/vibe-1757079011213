// Core TypeScript interfaces for the Cheque Management System

export interface Cheque {
  id: string;
  partyName: string;
  billNumber: string;
  bankName: string;
  chequeNumber: string;
  amount: number;
  issueDate: string; // ISO date string
  dueDate: string; // ISO date string
  status: 'pending' | 'cleared' | 'bounced' | 'cancelled';
  recipient?: string;
  paymentPurpose?: string;
  notes?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Party {
  id: string;
  name: string;
  contactNumber?: string;
  email?: string;
  address?: string;
  totalOutstanding: number;
  paymentHistory: string[]; // Cheque IDs
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Bill {
  id: string;
  billNumber: string;
  partyId: string;
  partyName: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  billDate: string; // ISO date string
  dueDate: string; // ISO date string
  status: 'paid' | 'pending' | 'partial' | 'overdue';
  relatedCheques: string[]; // Cheque IDs
  description?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Bank {
  id: string;
  name: string;
  color: string; // Hex color for visual identification
  shortName: string; // Abbreviated name
}

export interface ChequeFilter {
  partyName?: string;
  billNumber?: string;
  bankName?: string;
  status?: Cheque['status'];
  dateRange?: {
    start: string;
    end: string;
  };
  amountRange?: {
    min: number;
    max: number;
  };
  searchTerm?: string;
}

export interface PartyStats {
  partyName: string;
  totalCheques: number;
  totalAmount: number;
  pendingAmount: number;
  clearedAmount: number;
  overdueAmount: number;
}

export interface BankStats {
  bankName: string;
  totalCheques: number;
  totalAmount: number;
  pendingAmount: number;
  color: string;
}

export interface DashboardStats {
  totalCheques: number;
  totalAmount: number;
  pendingAmount: number;
  clearedAmount: number;
  overdueAmount: number;
  dueTodayAmount: number;
  dueThisWeekAmount: number;
  partiesCount: number;
  banksCount: number;
  overdueCheques: number;
}

export interface ReminderAlert {
  id: string;
  chequeId: string;
  partyName: string;
  billNumber: string;
  bankName: string;
  amount: number;
  dueDate: string;
  daysUntilDue: number;
  type: 'due_today' | 'due_soon' | 'overdue';
  priority: 'low' | 'medium' | 'high';
}

// Form interfaces
export interface ChequeFormData {
  partyName: string;
  billNumber: string;
  bankName: string;
  chequeNumber: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  recipient?: string;
  paymentPurpose?: string;
  notes?: string;
}

export interface PartyFormData {
  name: string;
  contactNumber?: string;
  email?: string;
  address?: string;
}

export interface BillFormData {
  billNumber: string;
  partyId: string;
  partyName: string;
  totalAmount: number;
  billDate: string;
  dueDate: string;
  description?: string;
}

// Export interfaces
export interface ExportOptions {
  format: 'csv' | 'pdf';
  dateRange?: {
    start: string;
    end: string;
  };
  parties?: string[];
  banks?: string[];
  status?: Cheque['status'][];
}

export interface ExportData {
  cheques: Cheque[];
  parties: Party[];
  bills: Bill[];
  summary: DashboardStats;
}