import { getFinder, getInserter } from 'libs/utils/zod'
import { Account, AccountSchema, parseAccountUid } from '../../authentication/models/Account'

export const allAccounts: Account[] = []

export const addAccount = getInserter('Account', AccountSchema, parseAccountUid, allAccounts)

export const findAccount = getFinder(parseAccountUid, allAccounts)

// export const findAccount = function (obj: Parameters<typeof getAccountUid>[0]) {
//   return allAccounts.find(byUid(getAccountUid, obj))
// }

// export const getAccount = function () {
//
// }
