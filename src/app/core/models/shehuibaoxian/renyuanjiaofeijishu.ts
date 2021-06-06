
/**
 * 人员缴费基数信息
 */
export class Renyuanjiaofeijishu {
    /**行编号 */
    ROWNO: number = 0;
    /**个人编号 */
    BAC001: number = 0;
    /**社会保障号码 */
    AAC002: string = '';
    /**姓名 */
    AAC003: string = '';
    /**性别 */
    AAC004: string = '';
    /**开始年月 */
    AAE041: number = 0;
    /**终止年月 */
    AAE042: number = 0;
    /**单位编号 */
    BAB001: number = 0;
    /**单位名称 */
    AAB004: string = '';
    /**单位类型 */
    AAB019: string = '';
    /**缴费基数 */
    AAE180: number = 0;

    constructor() { }
}