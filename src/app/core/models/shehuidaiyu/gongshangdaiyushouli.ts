
/**
 * 工伤待遇受理信息
 */
export class Gongshangdaiyushouli {

    /**行编号 */
    ROWNO: number = 0;

    /**个人编号 */
    BAC001: string = '个人编号';

    /**社会保障号码 */
    AAC002: string = '社会保障号码';

    /**姓名 */
    AAC003: string = '姓名';

    /**单位编号 */
    BAB001: string = '单位编号';

    /**单位名称,待确认 */
    AAC004: string = '单位名称';

    /**单位名称,待确认  */
    AAB004: string = '单位名称';

    /**工伤发生时间 */
    ALC020: number = 0;

    /**工伤人员类型 */
    ALC004: string = '工伤人员类型';

    /**是否申请医疗待遇 */
    BLC131: string = '是否申请医疗待遇';

    /**是否申请定期伤残待遇 */
    BLC132: string = '是否申请定期伤残待遇';

    /**是否申请一次性伤残补助金 */
    BLC133: string = '是否申请一次性伤残补助金';

    /**是否申请一次性医疗补助金 */
    BLC136: string = '是否申请一次性医疗补助金';

    /**是否申请供养亲属抚恤金 */
    BLC134: string = '是否申请供养亲属抚恤金';

    /**是否申请工亡待遇 */
    BLC135: string = '是否申请工亡待遇';

    /** 受理日期*/
    BAE034: number = 0;

    /**发票张数 */
    BLC141: number = 0;

    /**申请人类型 */
    BLC142: string = '申请人类型';

    /**申请人姓名 */
    BLC143: string = '申请人姓名';

    /**申请人联系方式 */
    AAC067: string = '申请人联系方式';

    /**受理状态 */
    BLC146: string = '受理状态';

    /**备注 */
    AAE013: string = '备注';

    constructor() { }
}
