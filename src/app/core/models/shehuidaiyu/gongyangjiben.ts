

/**
 * '供养基本情况
 */
export class Gongyangjiben {

    ROWNO: number = 0;

    // BAC001: string = '死者编号';
    // AAC003: string = '死者姓名';
    AAA036: string = '死者待遇类别';

    /**供属编号 */
    BAC001: number = 0;

    /**供属姓名 */
    AAC003: string = '供属姓名';

    /**供属身份证 */
    AAC147: string = '供属身份证';

    /**出生年月 */
    AAC006: number = 0;

    /**险种 */
    AAE140: string = '险种';

    /**供养类别 */
    AAC090: string = '供养类别';

    /**享受状态 */
    AAE116: string = '享受状态';

    /**供养金 */
    AAE019: number = 0;
    //:string='供养人数';

    /**孤寡标志 */
    AAC100: string = '孤寡标志';

    /**供养开始时间 */
    AAE041: number = 0;

    /**供养结束时间 */
    AAE042: number = 0;

    //AAC090: string = '与死者关系';

    /**参与调资标志 */
    AAC117: string = '参与调资标志';

    /**单位编号 */
    BAB001: number = 0;

    /**单位名称 */
    AAB004: string = '单位名称';

    /**分管区域 */
    AAA027: string = '分管区域';

    /**审批人 */
    BZE011: string = '审批人';

    /**复核人 */
    AAE011: string = '复核人';

    /**经办时间 */
    AAE036: number = 0;

    constructor() { }
}