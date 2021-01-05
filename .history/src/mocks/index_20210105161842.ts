import { mock } from '@/utils/mock-api.ts';
import { success } from './utils';
mock.onPost("/system/menus").reply(success([{}]));