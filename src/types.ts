export type ActivityStatus = '销售中' | '已暂停';
export interface Activity {
    id: string;
    communityName: string;
    status: ActivityStatus;
    dealer: string;
    orderCount: number;
    refundCount: number;
    a4Usage: number;
    photoUsage: number;
    storeSubsidy: number;
    dealerSubsidy: number;
}
