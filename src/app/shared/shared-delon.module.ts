import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';

export const SHARED_DELON_MODULES = [
    STModule,
    SVModule,
    SEModule,
    NoticeIconModule,
    PageHeaderModule,
    ResultModule,
    ReuseTabModule
];
