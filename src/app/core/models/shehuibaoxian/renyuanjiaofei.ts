
/**
 * 人员缴费信息
 */
export class Renyuanjiaofei {
    /**行编号 */
    ROWNO: number = 0;
    /** 个人编号*/
    BAC001: number = 0;
    /**社会保障号码 */
    AAC002: string = '';
    /** 姓名 */
    AAC003: string = '';
    /**单位编号 */
    BAB001: number = 0;
    /**单位名称 */
    AAB004: string = '';
    /**结算期 */
    AAE002: number = 0;
    /**对应费款所属期 */
    AAE003: number = 0;
    /**险种类型 */
    AAE140: string = '';
    /**缴费类型 */
    AAA115: string = '';
    /**缴费基数 */
    AAE482: number = 0;
    /**单位缴费金额 */
    AAE480: number = 0;
    /**个人缴费金额 */
    AAE481: number = 0;
    /**利息 */
    AAA020: number = 0;
    /**滞纳金 */
    AAA021: number = 0;
    /**合计缴费金额 */
    AAA080: number = 0;
    /**缴费标志 */
    AAE132: string = '';
    /**到账日期 */
    AAB191: number = 0;

    constructor() { }
}