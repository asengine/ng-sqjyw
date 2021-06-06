
/**
 * 工伤基本信息
 */
export class Gongshangjiben {

    /**行编号 */
    ROWNO: number = 0;

    /** 个人编号*/
    BAC001: number = 0;

    /**身份证号 */
    AAC002: string = '';

    /** 姓名 */
    AAC003: string = '';

    /** 性别 */
    AAC004: string = '';

    /**单位编号 */
    BAB001: number = 0;

    /**单位名称 */
    AAB004: string = '单位名称';

    /**工伤发生日期(或职业病诊断时间) */
    ALC020: number = 0;

    /**工伤类型 */
    ALC004: string = '工伤类型';

    /**事故类别 */
    ALC007: string = '事故类别';

    /**伤害部位 */
    ALC042: string = '伤害部位';

    /**职业病名称 */
    ALA017: string = '职业病名称';

    /**申请时间 */
    ALC026: number = 0;

    /**认定时间 */
    ALC031: number = 0;

    /**死亡时间 */
    ALC040: number = 0;

    /**伤残等级鉴定书编号 */
    ALC035: string = '伤残等级鉴定书编号';

    /**伤残等级 */
    ALA040: string = '伤残等级';

    /**伤残等级鉴定时间 */
    ALC034: number = 0;

    /**护理等级鉴定书编号 */
    ALC036: string = '护理等级鉴定书编号';

    /**护理等级 */
    ALC060: string = '护理等级';

    /**护理等级鉴定时间 */
    ALC037: number = 0;

    /**定期待遇发放方式 */
    AAE145: string = '定期待遇发放方式';

    /**定期待遇发放银行 */
    AAF200: string = '定期待遇发放银行';

    /**定期待遇发放账号 */
    AAE010: string = '定期待遇发放账号';

    constructor() { }
}