import {
	pinyin
} from 'pinyin-pro';
import mpserverless from "~/alicloud";
import {
	storeToRefs
} from 'pinia'
const db = mpserverless.db;

/**
 * 计算送礼金额总计
 *
 * @author chadwuo
 */

 
export const systeminfo = async (parameter) => { 
	const res =await db.collection('system_info').findOne({
		typeof: 'system_info'
	}) 
	return res
}