const INIT_MEMBERS = 'INIT_MEMBERS'
const UPDATA_MEMBER = 'UPDATA_MEMBER'

export const initMembers = (members)=>{
    return { type: INIT_MEMBERS,members }
}
export const updataMember = (member)=>{
    return {type: UPDATA_MEMBER,member}
}