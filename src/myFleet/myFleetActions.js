import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import consts from '../consts'

//const INITIAL_VALUES = {model: "", number: ""}
const INITIAL_VALUES = { list: [{}] }

export function getList() {
    const request = axios.get(`${consts.API_URL}/fleet`)
    return {
        type: 'FLEETS_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${consts.API_URL}/fleet/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(fleet) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('myFleetForm', fleet)
    ]
}

export function showDelete(fleet) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('myFleetForm', fleet)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('myFleetForm', INITIAL_VALUES)
    ]
}