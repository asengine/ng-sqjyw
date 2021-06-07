
/**
 * 工伤定期待遇信息
 */
export class Gongshangdingqidaiyu {

    /**行编号 */
    ROWNO: number = 0;

    /**人员类型 */
    AAC121: string = '';

    /**待遇发放状态 */
    AAE116: string = '';

    /**定期待遇月标准 */
    AAE019: number = 0;

    AAE019S: Daiyumingxi[] = new Array<Daiyumingxi>();

    constructor() { }
}

/**待遇明细 */
export class Daiyumingxi {

    /**待遇类别 */
    AAA036: string = '';

    /**待遇开始年月 */
    AAE041: number = 0;

    /**待遇中止年月 */
    AAE042: number = 0;

    /**待遇金额 */
    AAE019: number = 0;

    constructor() { }
}