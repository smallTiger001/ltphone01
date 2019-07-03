import api from '@/config/api'

const apis = {
    phonecode :`${api.api}/phone/code`,
    phonebind :`${api.api}/phone/bind`,
    insure:`${api.api}/insure/product/list`,
    insurepa:`${api.api}/insure/namelist/parse`,
    apply :`${api.api}/insure/apply`
}
export default apis;
