
/**
 * 人员月账户信息
 */
export class Renyuanyuezhanghu {
    /**行编号 */
    ROWNO: number = 0;
    /** 个人编号*/
    BAC001: number = 0;
    /**社会保障号码 */
    AAC002: string = '';
    /**姓名 */
    AAC003: string = '';
    /**性别 */
    AAC004: string = '';
    /**单位编号 */
    BAB001: number = 0;
    /**单位名称 */
    AAB004: string = '';
    /**单位类型 */
    AAB019: string = '';
    /**账户类型 */
    AAA119: string = '';
    /**划账基数 */
    AAE180: number = 0;
    /**缴费年月 */
    AAE003: number = 0;
    /**缴费月数 */
    AAE202: number = 0;
    /**单位划账户金额 */
    AAE482: number = 0;
    /**个人划账户金额 */
    AAE080: number = 0;

    AAE081: number = 0;
    AAE083: number = 0;
    /**到账年月 */
    AAB191: number = 0;
    constructor() { }
}