export interface Menu {
    menuId: number;
    menuName: string;
    path: string;
    icon: string;
    parentMenuId?: number;
    sortOrder: number;
}