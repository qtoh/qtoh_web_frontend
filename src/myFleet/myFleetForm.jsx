import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './myFleetActions'
import LabelAndInput from '../common/form/labelAndInput'

class MyFleetForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }

    render() {
        const { handleSubmit, readOnly/*, credits, debts*/ } = this.props
        //const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='model' component={LabelAndInput} readOnly={readOnly}
                        label='Model' cols='12 4' placeholder='Inform the model' />
                    <Field name='number' component={LabelAndInput} readOnly={readOnly}
                        label='Number' cols='12 4' placeholder='Inform the number' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

MyFleetForm = reduxForm({form: 'myFleetForm', destroyOnUnmount: false})(MyFleetForm)
const selector = formValueSelector('myFleetForm')
const mapStateToProps = state => ({
    model: selector(state, 'model'),
    number: selector(state, 'number')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MyFleetForm)