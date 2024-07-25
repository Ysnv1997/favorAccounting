import mpserverless from "~/alicloud";
import { nanoid } from 'nanoid/non-secure'
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user'
const { userInfo } = storeToRefs(useUserStore())
const db = mpserverless.db;

/**
 * 添加家庭
 *
 * @author chadwuo
 */
export const add = async () => {
  // 把自己添加为家庭管理员
  return await db.collection('family_member').insertOne({
    userId: userInfo.value._id,
    familyId: nanoid(),
    relation: '组织者',
  });
};

/**
 * 删除家庭
 *
 * @author chadwuo
 */
export const del = async (parameter) => {
  // 删除家庭成员
  return await db.collection('family_member').deleteMany({
    familyId: parameter.familyId,
  });
};

/**
 * 加入某个家庭
 *
 * @author chadwuo
 */
export const join = async (parameter) => {
  const { familyId } = parameter;
  return await db.collection('family_member').insertOne({
    userId: userInfo.value._id,
    familyId,
    relation: '成员',
  });
};

/**
 * 删除家庭成员
 *
 * @author chadwuo
 */
export const delFamilyMember = async (parameter) => {
  return await db.collection('family_member').deleteOne({
    _id: parameter._id,
  });
};